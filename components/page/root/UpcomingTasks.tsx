import Task from "@/components/resuseable/Task";
import { colors, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";
import { ChevronsRight } from "tabler-icons-react";
import { CalendarContext } from "@/components/layout/CalendarContext";
import { useContext, useEffect } from "react";
import { UserContext } from "@/components/layout/LoginContext";
import { baseURL } from "@/values/api";
import data from "@/temp/calendarData";
import { Store } from "react-notifications-component";
import { Appointment } from "devextreme/ui/scheduler";

export default function UpcomingTasks() {
  const { events, setEvents } = useContext(CalendarContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      fetch(baseURL + `planner/getall?nNumber=${user.nNumber}`)
        .then((res) => {
          if (res.ok) {
            res.json().then((res: Appointment[]) => {
              setEvents(data.concat(res));
            });
          } else if (res.status === 404) {
            Store.addNotification({
              title: "Could not find planner data",
              message: "User planner data not found",
              type: "danger",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
                pauseOnHover: true,
                showIcon: true,
              },
            });
          } else {
            Store.addNotification({
              title: "ERROR: Unexpected behavior",
              message: `${res.status}: ${res.statusText}`,
              type: "danger",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
                pauseOnHover: true,
                showIcon: true,
              },
            });
          }
        })
        .catch((error) => {
          Store.addNotification({
            title: "Client failed to connect to API",
            message: "Possible network error or disruption",
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true,
              showIcon: true,
            },
          });

          console.log(error);
        });
    } else {
      setEvents(data);
    }
  }, [user]);

  return (
    <UpcomingTasksWrapper>
      <UpcomingTasksTitle>Upcoming Tasks</UpcomingTasksTitle>

      {events
        .filter((event) => {
          if (
            typeof event.endDate != "string" &&
            typeof event.endDate != "undefined"
          ) {
            return event.endDate?.getTime() > new Date().getTime();
          }
        })
        .sort((a, b) => {
          if (a.startDate instanceof Date && b.startDate instanceof Date)
            return (
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            );
          else return 0;
        })
        .slice(0, 3)
        .map((event) => (
          <TaskLink href="/calendar" key={event.text}>
            <Task
              title={event.text}
              startDate={event.startDate}
              endDate={event.endDate}
              allDay={event.allDay ? event.allDay : false}
              eventType={event.eventType ? event.eventType : (event.recurrenceRule ? "Reoccuring Event" : "Personal Event")}
            />
          </TaskLink>
        ))}

      <FullCalendarLink href="/calendar">
        <TextColoring>View Full Calendar</TextColoring>
        <ChevronsRight size="1.25rem" />
      </FullCalendarLink>
    </UpcomingTasksWrapper>
  );
}

const TaskLink = styled(Link)`
  text-decoration: none;
`;

const UpcomingTasksWrapper = styled.div`
  padding: 1rem;

  @media (max-width: ${screen.mobile}) {
    padding: 1rem 0;
  }
`;

const UpcomingTasksTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 800;

  margin: 0rem 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid black;

  @media (max-width: ${screen.mobile}) {
    margin: 0rem 0.5rem;
  }
`;

const TextColoring = styled.span`
  color: ${colors.unfBlue};
  font-weight: 600;

  font-size: 1rem;
  line-height: 1rem;
`;

const FullCalendarLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${colors.unfBlue};

  width: fit-content;

  border-bottom: 2px solid ${colors.unfBlue};

  text-decoration: none;
  margin: 1rem 2rem;

  @media (max-width: ${screen.mobile}) {
    margin: 1rem 0.5rem;
  }
`;

import Task from "@/components/resuseable/Task";
import { colors } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";
import { ChevronsRight } from "tabler-icons-react";
import { CalendarContext } from "@/components/layout/CalendarContext";
import { useContext } from "react";

export default function UpcomingTasks() {
  const {events} = useContext(CalendarContext);

  return (
    <UpcomingTasksWrapper>
      <UpcomingTasksTitle>Upcoming Tasks</UpcomingTasksTitle>

      {events.slice(0,3).map((event) => (
        <TaskLink href="/calendar" key={event.text}>
          <Task
            title={event.text}
            date={event.startDate}
            eventType={event.eventType}
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
`;

const UpcomingTasksTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 800;

  margin: 0rem 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid black;
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
`;

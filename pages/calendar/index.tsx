import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.light.css";
import Scheduler from "devextreme-react/scheduler";
import Task from "@/components/resuseable/Task";
import { CalendarContext } from "@/components/layout/CalendarContext";

export default function TodoPage() {
  function addEvent(e: any) {
    const f = { ...e.appointmentData, eventType: "Personal Event" };

    setEvents([...events, f]);
  }

  function updateEvent(e: any) {
    console.log(e);
  }

  function deleteEvent(e: any) {
    console.log(e);
  }

  function editAppointmentForm(e: any) {
    const form = e.form;
    let mainGroupItems = form.itemOption("mainGroup").items;

    mainGroupItems[0] = {
      ...mainGroupItems[0],
      validationRules: [{ type: "required" }],
    };

    form.itemOption("mainGroup", "items", mainGroupItems);
  }

  const currentDate = new Date();

  const { events, setEvents } = useContext(CalendarContext);

  return (
    <>
      <Head>
        <title>Calendar | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>
        <ToDoTitle>Todo</ToDoTitle>

        <EventsHolder>
          {events.map((event) => (
            <TaskWrapper key={event.text}>
              <Task
                title={event.text}
                date={event.startDate}
                eventType={
                  event.recurrenceRule ? "Reoccuring Event" : event.eventType
                }
              />
            </TaskWrapper>
          ))}
        </EventsHolder>
        <Scheduler
          timeZone="America/New_York"
          dataSource={[...events]}
          views={["day", "week", "month", "agenda"]}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          height={600}
          showAllDayPanel={true}
          firstDayOfWeek={1}
          startDayHour={8}
          endDayHour={18}
          onAppointmentFormOpening={editAppointmentForm}
          onAppointmentAdded={addEvent}
          onAppointmentUpdating={updateEvent}
          onAppointmentDeleted={deleteEvent}
        ></Scheduler>
      </main>
    </>
  );
}

const TaskWrapper = styled.div``;

const Hero = styled.div`
  height: 5rem;
`;

const EventsHolder = styled.div`
  height: 24rem;

  ${TaskWrapper}:nth-child(odd) {
    background-color: #f8f8f8;
  }

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    &:hover {
      background-color: #a8bbbf;
    }
  }
`;

const ToDoTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;

  margin: 1rem 2rem;
  padding: 0 1rem;

  border-bottom: 2px solid black;
`;

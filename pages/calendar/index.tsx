import { fonts } from "@/styles/styleConstants";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.light.css";
import Scheduler from "devextreme-react/scheduler";
import Task from "@/components/resuseable/Task";

export default function TodoPage() {
  const data = [
    {
      text: "Create Plan To Steal UNF Goldfish Sculpture",
      startDate: new Date("2023-01-25T16:30:00.000Z"),
      endDate: new Date("2023-01-25T18:30:00.000Z"),
    },
    {
      text: "Book Flights to New York for Sales Trip",
      startDate: new Date("2023-01-25T19:00:00.000Z"),
      endDate: new Date("2023-01-25T20:00:00.000Z"),
      allDay: true,
    },
  ];

  const data2 = [
    {
      title: "Commit Felony",
      date: "March 10th",
      eventType: "Reoccuring Event",
    },
    {
      title: "Move To New Country",
      date: "March 11th",
      eventType: "Personal Event",
    },
    {
      title: "Get Extradited",
      date: "December 12th",
      eventType: "Annual Holiday",
    },
  ];


  const currentDate = new Date();

  return (
    <>
      <Head>
        <title>Calendar | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>
        <ToDoTitle>Todo</ToDoTitle>

        {data2.map((task) => (
          <Task
            title={task.title}
            date={task.date}
            eventType={task.eventType}
            key={task.title}
          />
      ))}

        <Scheduler
          timeZone="America/New_York"
          dataSource={data}
          views={["day", "week", "month"]}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          height={600}
          showAllDayPanel={true}
          firstDayOfWeek={1}
          startDayHour={8}
          endDayHour={18}
        ></Scheduler>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 5rem;
`;

const ToDoTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;

  margin: 1rem;
`;

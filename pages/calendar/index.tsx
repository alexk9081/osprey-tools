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

  const currentDate = new Date();

  return (
    <>
      <Head>
        <title>Calendar | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>
        <ToDoTitle>Todo</ToDoTitle>

        <Task date="March 10th">Commit Felony</Task>
        <Task date="March 11th">Move To New Country</Task>
        <Task date="December 12th">Get Extradited</Task>

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

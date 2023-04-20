import Head from "next/head";
import { useContext, useRef } from "react";
import styled from "styled-components";
import "devextreme/dist/css/dx.light.css";
import { Scheduler } from "devextreme-react/scheduler";
import { CalendarContext } from "@/components/layout/CalendarContext";

export default function TodoPage() {
  function addEvent(e: any) {
    const f = { ...e.appointmentData, eventType: "Personal Event" };

    setEvents([...events, f]);
  }

  function updateEvent(e: any) {
    // e.cancel = true;
    console.log(e);
  }

  function deleteEvent(e: any) {
    console.log(e);
  }

  function editAppointmentForm(e: any) {
    console.log(dataSource);
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

  const ref: any = useRef();

  let dataSource = [...events];

  return (
    <>
      <Head>
        <title>Calendar | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>
        <Scheduler
          timeZone="America/New_York"
          dataSource={dataSource}
          views={[
            "day",
            "week",
            "month",
            { type: "agenda", agendaDuration: 365 },
          ]}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          height={600}
          showAllDayPanel={true}
          firstDayOfWeek={1}
          startDayHour={0}
          endDayHour={24}
          onAppointmentFormOpening={editAppointmentForm}
          onAppointmentAdded={addEvent}
          onAppointmentUpdating={updateEvent}
          onAppointmentDeleted={deleteEvent}
          ref={ref}
        ></Scheduler>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 5rem;
`;

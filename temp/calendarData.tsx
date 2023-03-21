import { Appointment } from "devextreme/ui/scheduler";

const data: Appointment[] = [
  {
    text: "Execute Plan To Commit Felony",
    startDate: new Date("2023-03-10T16:30:00.000Z"),
    endDate: new Date("2023-03-10T18:30:00.000Z"),
    eventType: "Reoccuring Event",
  },
  {
    text: "Book Flights to Move To New Country",
    startDate: new Date("2023-03-11T16:30:00.000Z"),
    endDate: new Date("2023-03-11T18:30:00.000Z"),
    allDay: true,
    eventType: "Personal Event",
  },
  {
    text: "Get Extradited and Serve Your Prison Sentence",
    startDate: new Date("2023-12-11T16:30:00.000Z"),
    endDate: new Date("2023-12-11T18:30:00.000Z"),
    allDay: true,
    eventType: "Annual Holiday",
  },
  {
    text: "Blame Rich for All Your Problems",
    startDate: new Date("2024-01-11T16:30:00.000Z"),
    endDate: new Date("2024-01-11T18:30:00.000Z"),
    allDay: true,
    eventType: "Annual Holiday",
  },
];

export default data;

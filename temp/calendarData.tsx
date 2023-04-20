import { Appointment } from "devextreme/ui/scheduler";

const data: Appointment[] = [
  {
    text: "Create Plan for SWE Project",
    startDate: new Date("2023-05-10T16:30:00.000Z"),
    endDate: new Date("2023-05-10T18:30:00.000Z"),
    eventType: "Reoccuring Event",
    disabled: true,
  },
  {
    text: "Design Project Architecture",
    startDate: new Date("2023-05-11T16:30:00.000Z"),
    endDate: new Date("2023-05-11T18:30:00.000Z"),
    allDay: true,
    eventType: "Personal Event",
    disabled: true,
  },
  {
    text: "Finish Project",
    startDate: new Date("2023-12-11T16:30:00.000Z"),
    endDate: new Date("2023-12-11T18:30:00.000Z"),
    allDay: true,
    eventType: "Annual Holiday",
    disabled: true,
  },
  {
    text: "Present My Project",
    startDate: new Date("2024-01-11T16:30:00.000Z"),
    endDate: new Date("2024-01-11T18:30:00.000Z"),
    allDay: true,
    eventType: "Annual Holiday",
    disabled: true,
  },
];

export default data;

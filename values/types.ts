export type Notecard = {
  noteid: String;
  setid: String;
  question: String;
  answer: String;
};

export type NotecardSet = {
  id: String;
  name: String;
  isPublic: boolean;
  nNumber: String;
  description?: String;
  notecards?: Notecard[];
};

export type User = {
  nNumber: string;
  name: string;
  imageUrl: string;
};

export type PlannerTask = {
  startDate: String;
  endDate: String;
  taskSubject: String;
  description: String;
  allDayTrigger: boolean;
  repeatValue: String;
  userID: String;
};

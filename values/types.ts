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

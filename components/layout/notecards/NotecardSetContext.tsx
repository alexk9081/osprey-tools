import data from "@/temp/calendarData";
import { NotecardSet } from "@/types/types";
import { Appointment } from "devextreme/ui/scheduler";
import {
  useMemo,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

export const NotecardSetContext = createContext<{
  notecardSet: NotecardSet;
  setNotecardSet: Dispatch<SetStateAction<NotecardSet>>;
}>({
  notecardSet: {
    id: "",
    name: "",
    isPublic: false,
    nNumber: "",
  },
  setNotecardSet: () => {},
});

export default function NotecardSetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notecardSet, setNotecardSet] = useState<NotecardSet>({
    id: "",
    name: "",
    isPublic: false,
    nNumber: "",
  });

  const notecardSetProviderValue = useMemo(
    () => ({ notecardSet, setNotecardSet }),
    [notecardSet, setNotecardSet]
  );

  return (
    <>
      <NotecardSetContext.Provider value={notecardSetProviderValue}>
        {children}
      </NotecardSetContext.Provider>
    </>
  );
}

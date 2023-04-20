import { User } from "@/values/types";
import { useMemo, useState, createContext, Dispatch, SetStateAction } from "react";

export const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
}>({
  user: null,
  setUser: () => {},
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const userProviderValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={userProviderValue}>
        {children}
      </UserContext.Provider>
    </>
  );
}

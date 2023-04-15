import { useMemo, useState, createContext, Dispatch, SetStateAction } from "react";

export type User = {
  nNumber: string;
  name: string;
  imageUrl: string;
} | null;

export const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
}>({
  user: null,
  setUser: () => {},
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>(null);

  const userProviderValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={userProviderValue}>
        {children}
      </UserContext.Provider>
    </>
  );
}

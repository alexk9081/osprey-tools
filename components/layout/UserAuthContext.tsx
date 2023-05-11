import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useMemo, useState, createContext, SetStateAction, useEffect } from "react";

export const UserAuthContext = createContext<{
  userAuth: User | null;
  setUserAuth: React.Dispatch<SetStateAction<User | null>>;
}>({
  userAuth: null,
  setUserAuth: () => {},
});

export default function UserAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const userProviderValue = useMemo(() => ({ userAuth, setUserAuth }), [userAuth, setUserAuth]);

  const auth = getAuth();
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserAuth(user)

      //Update calendar events
    })

    return unsubscribe;
  }, []);

  return (
    <>
      <UserAuthContext.Provider value={userProviderValue}>
        {children}
      </UserAuthContext.Provider>
    </>
  );
}

import EventsProvider from "@/components/layout/CalendarContext";
import Layout from "@/components/layout/Layout";
import UserProvider from "@/components/layout/LoginContext";
import NotecardSetProvider from "@/components/layout/notecards/NotecardSetContext";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { initializeApp } from "firebase/app";
import UserAuthProvider from "@/components/layout/UserAuthContext";

const firebaseConfig = {
  apiKey: process?.env?.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "osprey-productivity-tools.firebaseapp.com",
  projectId: "osprey-productivity-tools",
  storageBucket: "osprey-productivity-tools.appspot.com",
  messagingSenderId: process?.env?.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process?.env?.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <EventsProvider>
        <UserProvider>
          <UserAuthProvider>
            <NotecardSetProvider>
              <ReactNotifications />
              <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
            </NotecardSetProvider>
          </UserAuthProvider>
        </UserProvider>
      </EventsProvider>
    </>
  );
}

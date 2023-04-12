import EventsProvider from "@/components/layout/CalendarContext";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

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
      <Layout>
        <EventsProvider>
          {getLayout(<Component {...pageProps} />)}
        </EventsProvider>
      </Layout>
    </>
  );
}

import EventsProvider from "@/components/layout/CalendarContext";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <EventsProvider>
          <Component {...pageProps} />
        </EventsProvider>
      </Layout>
    </>
  );
}

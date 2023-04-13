import NotecardLayout from "@/components/layout/notecards/layout";
import Head from "next/head";
import styled from "styled-components";

export default function NotecardsOverviewPage() {
  return (
    <>
      <Head>
        <title>Notecards Overview | Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}

NotecardsOverviewPage.getLayout = function getLayout(page:any) {
  return <NotecardLayout>{page}</NotecardLayout>;
};

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

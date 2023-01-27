import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

export default function NoteCardsPage() {
  return (
    <>
      <Head>
        <title>Notecards | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}

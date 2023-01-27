import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}

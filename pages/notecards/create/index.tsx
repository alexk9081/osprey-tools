import { colors } from "@/styles/styleConstants";
import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 40vh;
  background-color: ${colors.unfBlueWhite};
`;

export default function Create() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
        <h2>Create a new notecard set</h2>
        <form>
          <label>Input</label><input type="text"></input><br />
          <label>Input</label><input type="text"></input><br />
          <label>Input</label><input type="text"></input><br />
          <label>Input</label><input type="text"></input><br />
        </form>
      </main>
    </>
  );
}

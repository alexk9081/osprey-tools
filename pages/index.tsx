import { screen } from "@/styles/styleConstants";
import Head from "next/head";
import styled from "styled-components";
import NoteCards from "@/components/page/root/NoteCards";
import UpcomingTasks from "@/components/page/root/UpcomingTasks";
import MainHero from "@/components/page/root/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>

      <main>
        <MainHero />

        <MainContent>
          <div>
            <UpcomingTasks />
            <NoteCards />
          </div>

          <StickyBox>Test</StickyBox>
        </MainContent>
      </main>
    </>
  );
}

const StickyBox = styled.div`
  position: sticky;
  top: 6rem;

  height: 20rem;

  margin: 1rem;
  padding: 1rem;

  border: 4px solid #000;
  border-radius: 1rem;

  background-color: white;

  @media (max-width: ${screen.tablet}) {
    display: none;
  }
`;

const MainContent = styled.div`
  display: grid;

  grid-template-columns: 1fr 20rem;

  @media (max-width: ${screen.tablet}) {
    grid-template-columns: 100%;
  }
`;

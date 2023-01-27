import Task from "@/components/resuseable/Task";
import { colors, fonts, screen } from "@/styles/styleConstants";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { ChevronsRight } from "tabler-icons-react";
import { useState } from "react";
import NoteCards from "@/components/page/root/NoteCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>
      <main>
        <Hero>
          <Link href="/map">
            <Image
              src="http://fakeimg.pl/1500x600?text=Map Placeholder&font=bebas"
              alt=""
            />
          </Link>
        </Hero>

        <MainContent>
          <div>
            <UpcomingTasks>
              <UpcomingTasksTitle>Upcoming Tasks</UpcomingTasksTitle>
              <Task date="March 10th">Commit Felony</Task>
              <Task date="March 11th">Move To New Country</Task>
              <Task date="December 12th">Get Extradited</Task>
              <FullCalendarLink href="/calendar">
                View Full Calendar
                <ChevronsRight />
              </FullCalendarLink>
            </UpcomingTasks>

            <NoteCards />
          </div>

          <StickyBox>Test</StickyBox>
        </MainContent>
      </main>
    </>
  );
}

const FullCalendarLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  margin: 1rem 2rem;

  color: ${colors.unfBlue};
  font-weight: 600;
`;

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

const Hero = styled.div`
  height: 30rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const UpcomingTasks = styled.div`
  margin: 1rem;
`;

const UpcomingTasksTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

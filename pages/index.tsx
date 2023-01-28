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
          <HeroText>Elevate your Productivity</HeroText>

          <Link href="/map">
            <Image
              src="https://media.discordapp.net/attachments/1067491860286820394/1068360876056387614/CamScanner_01-26-2023_11.59_2.jpg?width=806&height=676"
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

const HeroText = styled.div`
  font-size: 4rem;
  font-weight: 800;

  font-family: ${fonts.serifMain};
`;

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
  position: relative;
  background-image: linear-gradient(350deg, ${colors.unfBlueWhite}, white);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 30rem;

  @media (max-width: ${screen.tablet}) {
    justify-content: flex-end;

    height: calc(30rem + 200px);
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  height: 175px;

  border: 4px solid ${colors.unfBlue};
  border-radius: 1rem;

  @media (max-width: ${screen.tablet}) {
    position: relative;

    display: block;

    border: none;
    border-radius: 0;

    bottom: 0;
    right: 0;

    width: 100vw;
    height: 200px;
    object-fit: cover;
  }
`;

const UpcomingTasks = styled.div`
  margin: 1rem;
`;

const UpcomingTasksTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

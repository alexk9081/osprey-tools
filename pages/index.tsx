import Task from "@/components/resuseable/Task";
import { colors, fonts, screen } from "@/styles/styleConstants";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { ChevronsRight } from "tabler-icons-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
              <FullCalendar href="/calendar">
                View Full Calendar
                <ChevronsRight />
              </FullCalendar>
            </UpcomingTasks>
            <NoteCards>
              <NoteCard isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <CardText isOpen={!isOpen}>
                  How do you convert assembly to byte code in SIC/XE?
                  <SmallText>Click to Open</SmallText>
                </CardText>
                <CardText isOpen={isOpen}>I DON'T KNOW</CardText>
              </NoteCard>
            </NoteCards>
          </div>

          <StickyBox>Test</StickyBox>
        </MainContent>
      </main>
    </>
  );
}

const SmallText = styled.div`
  padding-top: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CardText = styled.span`
  position: absolute;
  text-align: center;

  padding: 1rem;

  transition: 4s cubic-bezier(1, -0.01, 0.97, 0.54) 1s opacity;
  opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? "1" : "0")};
`;

const NoteCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;

  box-sizing: border-box;

  padding: 1rem;

  background-color: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "red" : "white"};

  box-shadow: 0.75rem 0.25rem 1rem #00000040;

  height: 10rem;
  width: 20rem;

  transform: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "rotateY(6120deg)" : "rotateY(0deg)"};

  color: ${(props: { isOpen: boolean }) => (props.isOpen ? "white" : "black")};

  transition: 5s cubic-bezier(1, 0.03, 0.75, 0.61) transform,
    5s cubic-bezier(1, 0.03, 0.75, 0.61) color,
    4s cubic-bezier(1, -0.01, 0.97, 0.54) 1s background-color;

  cursor: pointer;
`;

const FullCalendar = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  margin: 1rem 2rem;

  color: ${colors.lightBlack};
  font-weight: 600;
`;

const NoteCards = styled.div`
  display: flex;
  padding-left: 18rem;

  height: 15rem;

  background-color: #ddd;

  margin-right: -20rem;
  padding: 1rem 20rem 1rem 1rem;

  @media (max-width: ${screen.tablet}) {
    margin: 0;
    padding: 1rem;
  }
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

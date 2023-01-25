import { fonts } from "@/styles/styleConstants";
import Head from "next/head";
import { ReactComponentElement, ReactElement, ReactFragment } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Hero>
          <Image
            src="http://fakeimg.pl/1500x600?text=Map Placeholder&font=bebas"
            alt=""
          />
        </Hero>

        <UpcomingTasks>
          <UpcomingTasksTitle>Upcoming Tasks</UpcomingTasksTitle>
          <Task date="March 10th">Commit Felony</Task>
          <Task date="March 11th">Move To New Country</Task>
          <Task date="December 12th">Get Extradited</Task>
        </UpcomingTasks>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 30vh;

  /* background-image: radial-gradient(#0a233f 0%, #ffffff 60%); */
  /* backdrop-filter: blur(45px); */
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

function Task({ children, date }: { children: ReactFragment; date: string }) {
  return (
    <>
      <TaskWrapper>
        <TaskHeader>
          <TaskTitle>{children}</TaskTitle>
          <Date>{date}</Date>
        </TaskHeader>
      </TaskWrapper>
    </>
  );
}

const TaskWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;

  border: 1px solid #666;
  border-radius: 1rem;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;

    background-color: #f1f1f1e8;
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
`;

const Date = styled.div``;

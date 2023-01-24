import { fonts } from "@/styles/styleConstants";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <ToDoTitle>Todo</ToDoTitle>
        <Task></Task>
        <Task></Task>
        <Task></Task>

        <Calendar></Calendar>
      </main>
    </>
  );
}

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 10rem);

`;

const ToDoTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;

function Task() {
  return (
    <TaskWrapper>
      <Title>Test Task</Title>
      Test
    </TaskWrapper>
  );
}

const TaskWrapper = styled.div`
  border: 1px solid #666;
  border-radius: 1rem;
  padding: 1rem;
  font-family: ${fonts.sansSerifMain};
  margin-bottom: 1rem;

  transition: 300ms ease all;

  &:hover {
    cursor: pointer;

    background-color: #ddd;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

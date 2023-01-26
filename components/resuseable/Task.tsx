import { ReactFragment } from "react";
import styled from "styled-components";

export default function Task({ children, date }: { children: ReactFragment; date: string }) {
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

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  box-shadow: 0.1rem 0.3rem 0.75rem #00000040;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;

    background-color: #e2e2e2e8;
    box-shadow: 0.1rem 0.3rem 0.75rem #00000060;
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Date = styled.div``;

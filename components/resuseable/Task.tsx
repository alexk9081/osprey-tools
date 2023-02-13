import { colors, fonts } from "@/styles/styleConstants";
import styled from "styled-components";

export default function Task({
  children,
  date,
}: {
  children: string;
  date: string;
}) {
  return (
    <>
      <TaskWrapper>
        <TaskHeader>
          <Tag>Calendar Event</Tag>
          <TaskTitle>{children}</TaskTitle>
          <Date>{date}</Date>
        </TaskHeader>
      </TaskWrapper>
    </>
  );
}

const Tag = styled.div`
  font-size: 1.25rem;
  padding-bottom: 0.5rem;

  color: #a98363;
`;

const TaskTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  width: fit-content;
  border-bottom: 2px solid transparent;
  font-family: ${fonts.sansSerifSecondary};
`;

const TaskWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;

  transition: 0.1s ease all;

  color: ${colors.nearBlack};

  &:hover {
    cursor: pointer;

    ${TaskTitle} {
      color: ${colors.unfBlueLight};
    }
  }
`;

const TaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.div`
  font-size: 0.9rem;
  color: ${colors.lightGray};
  margin-top: 0.25rem;
`;

import { colors, fonts } from "@/styles/styleConstants";
import styled from "styled-components";
import { isStringLiteral } from "typescript";

export default function Task({
  title,
  date,
  eventType,
}: {
  title: string | undefined;
  date: Date | string | undefined;
  eventType: string;
}) {

  let dateString: string;

  if(typeof date === "string") {
    dateString = date;
  }
  else if (typeof date === "undefined"){
    dateString = "Unknown";
  }
  else {
    dateString = date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"long", day: '2-digit'})
  }


  return (
    <>
      <TaskWrapper>
        <TaskHeader>
          <Tag>{eventType ? eventType : "Personal Event"}</Tag>
          <TaskTitle>{title}</TaskTitle>
          <Date>{dateString}</Date>
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

import Task from "@/components/resuseable/Task";
import { colors } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";
import { ChevronsRight } from "tabler-icons-react";

export default function UpcomingTasks() {
  return (
    <UpcomingTasksWrapper>
      <UpcomingTasksTitle>Upcoming Tasks</UpcomingTasksTitle>

      <TaskLink href="/calendar">
        <Task date="March 10th">Commit Felony</Task>
      </TaskLink>
      <TaskLink href="/calendar">
        <Task date="March 11th">Move To New Country</Task>
      </TaskLink>
      <TaskLink href="/calendar">
        <Task date="December 12th">Get Extradited</Task>
      </TaskLink>

      <FullCalendarLink href="/calendar">
        <TextColoring>View Full Calendar</TextColoring>
        <ChevronsRight />
      </FullCalendarLink>
    </UpcomingTasksWrapper>
  );
}

const TaskLink = styled(Link)`
  text-decoration: none;
`;

const UpcomingTasksWrapper = styled.div`
  padding: 1rem;
`;

const UpcomingTasksTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 800;

  margin: 0rem 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid black;
`;

const TextColoring = styled.span`
  color: ${colors.unfBlue};
  font-weight: 600;
`;

const FullCalendarLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${colors.unfBlue};

  /* border-bottom: 2px solid blue; */

  text-decoration: none;
  margin: 1rem 2rem;
`;

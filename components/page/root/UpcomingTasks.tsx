import Task from "@/components/resuseable/Task";
import { colors } from "@/styles/styleConstants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ChevronsRight } from "tabler-icons-react";

export default function UpcomingTasks() {
  return (
    <ShadowWrapper>
      <UpcomingTasksWrapper>
        <UpcomingTasksTitle>Upcoming Tasks</UpcomingTasksTitle>
        <Task date="March 10th">Commit Felony</Task>
        <Task date="March 11th">Move To New Country</Task>
        <Task date="December 12th">Get Extradited</Task>
        <FullCalendarLink href="/calendar">
          <TextColoring>View Full Calendar</TextColoring>
          <ChevronsRight />
        </FullCalendarLink>
      </UpcomingTasksWrapper>
    </ShadowWrapper>
  );
}

const ShadowWrapper = styled.div`
  padding-bottom: 2rem;
  background-color: #ddd;
`;

const UpcomingTasksWrapper = styled.div`
  padding: 1rem;

  box-shadow: 0 0 1rem #0002;
  background-color: #fff;
`;

const UpcomingTasksTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const TextColoring = styled.span`
  color: ${colors.unfBlue};
  font-weight: 600;
`;

const FullCalendarLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  margin: 1rem 2rem;
`;

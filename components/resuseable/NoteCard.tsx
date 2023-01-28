import { useState } from "react";
import styled from "styled-components";

export default function NoteCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NoteCardWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Text isOpen={!isOpen}>
          {question}
          <SmallText>Click to Open</SmallText>
        </Text>
        <Text isOpen={isOpen} style={{ transform: "rotateX(180deg)" }}>
          {answer}
        </Text>
      </NoteCardWrapper>
    </>
  );
}

const SmallText = styled.div`
  padding-top: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Text = styled.span`
  position: absolute;
  text-align: center;

  margin: 1rem;

  transition: 0s 0.2s linear opacity;
  opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? "1" : "0")};
`;

const NoteCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  font-size: 1.5rem;
  font-weight: 700;

  box-sizing: border-box;
  background-color: white;

  height: 10rem;
  width: 20rem;

  transition: 0.4s linear transform, 0.4s linear box-shadow;
  box-shadow: ${(props: { isOpen: boolean }) =>
    props.isOpen
      ? "0.75rem -0.25rem 1rem #00000040"
      : "0.75rem  0.25rem 1rem #00000040"};

  transform: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
  cursor: pointer;
`;

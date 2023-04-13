import { useState } from "react";
import styled from "styled-components";

export default function NoteCard({
  question,
  answer,
  height,
  width,
}: {
  question: string;
  answer: string;
  height: string;
  width: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NoteCardWrapper
        height={height}
        width={width}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
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
  font-size: 1.25rem;
  font-weight: 500;
`;

const Text = styled.span`
  font-size: 2.5rem;
  
  position: absolute;
  text-align: center;

  margin: 3rem;

  transition: 0s 0.2s linear opacity;
  opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? "1" : "0")};
`;

type wrapperProps = { width: string; height: string; isOpen: boolean };

const NoteCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  font-size: 1.5rem;
  font-weight: 700;

  box-sizing: border-box;
  background-color: #fafafa;

  height: ${(props: wrapperProps) => props.height};
  width: ${(props: wrapperProps) => props.width};

  margin: 1rem;

  transition: 0.4s linear transform, 0.4s linear box-shadow;
  box-shadow: ${(props: wrapperProps) =>
    props.isOpen
      ? "0.5rem -0.25rem 1.25rem #00000040"
      : "0.5rem  0.25rem 1.25rem #00000040"};

  transform: ${(props: wrapperProps) =>
    props.isOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
  cursor: pointer;
`;

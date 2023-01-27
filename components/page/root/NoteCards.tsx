import { screen } from "@/styles/styleConstants";
import { useState } from "react";
import styled from "styled-components";

export default function NoteCards() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NoteCardsWrapper>
    <NoteCard isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <BackgroundChanger
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CardText2 isOpen={isOpen}>I DON&apos;T KNOW</CardText2>
        <CardText isOpen={!isOpen}>
          How do you convert assembly to byte code in SIC/XE?
          <SmallText>Click to Open</SmallText>
        </CardText>
      </BackgroundChanger>
    </NoteCard>
  </NoteCardsWrapper>
  );
}


const BackgroundChanger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;

  box-sizing: border-box;

  padding: 1rem;

  background-color: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "red" : "white"};

  transition: 4s cubic-bezier(1, -0.01, 0.97, 0.54) 1s background-color;

  height: 10rem;
  width: 20rem;

  cursor: pointer;
`;

const SmallText = styled.div`
  padding-top: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CardText2 = styled.span`
  position: absolute;
  text-align: center;

  padding: 1rem;

  color: white;

  transition: 4s cubic-bezier(1, -0.01, 0.97, 0.54) 1s opacity;
  opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? "1" : "0")};
`;

const CardText = styled.span`
  position: absolute;
  text-align: center;

  padding: 1rem;

  color: black;

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
  background-color: white;

  box-shadow: 0.75rem 0.25rem 1rem #00000040;

  height: 10rem;
  width: 20rem;

  transform: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "rotateY(6120deg)" : "rotateY(0deg)"};

  transition: 5s cubic-bezier(1, 0.03, 0.75, 0.61) transform;

  cursor: pointer;
`;


const NoteCardsWrapper = styled.div`
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

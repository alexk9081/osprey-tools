import NoteCard from "@/components/resuseable/NoteCard";
import { screen } from "@/styles/styleConstants";
import styled from "styled-components";

export default function NoteCards() {
  const data = [
    {
      question: "How do you speed run getting arrested Any%?",
      answer: "Follow Rich's project ideas",
    },
    {
      question: "Why do programmers prefer dark mode?",
      answer: "Because light attracts bugs",
    },
    {
      question: "How many programmers does it take to change a light bulb?",
      answer: "None, that's a hardware problem",
    },
    {
      question: "What's the best thing about a Boolean?",
      answer: " if you're wrong, you're only off by a bit.",
    },
  ];

  return (
    <NoteCardsWrapper>
      {data.map((card) => (
        <NoteCard question={card.question} answer={card.answer} key={card.question} />
      ))}
    </NoteCardsWrapper>
  );
}

const NoteCardsWrapper = styled.div`
  display: flex;
  gap: 2rem;

  height: 15rem;

  background-color: #ddd;

  margin-right: -20rem;
  padding: 1rem 20rem 1rem 1rem;

  @media (max-width: ${screen.tablet}) {
    margin: 0;
    padding: 1rem;
  }
`;

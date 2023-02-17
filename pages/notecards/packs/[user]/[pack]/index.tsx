import Head from "next/head";
import styled from "styled-components";
import NoteCard from "@/components/resuseable/NoteCard";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40vh;
  background-color: wheat;
`;

export default function Pack({
  name,
  cards,
}: {
  name: string;
  cards: { question: string; answer: string }[];
}) {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero>
          Add different ways to study note cards
        </Hero>

        <div>{name}</div>
        {cards.map((card) => (
          <NoteCard
            question={card.question}
            answer={card.answer}
            key={card.question}
          />
        ))}
      </main>
    </>
  );
}

const data = [
  {
    name: "Wall-E",
    packs: [
      {
        name: "Software Engineering",
        id: "softwareEngineering",
        cards: [
          {
            question: "Test",
            answer: "Hello!",
          },
        ],
      },
    ],
  },
  {
    name: "Gradma",
    packs: [
      {
        name: "Construction of Language Transistors",
        id: "languageTransistors",
        cards: [
          {
            question: "Test Two",
            answer: "Hello Two!",
          },
        ],
      },
    ],
  },
];

export async function getStaticPaths() {
  const paths = data
    .map((user) =>
      user.packs.map((pack) => ({
        params: { user: user.name, pack: pack.id },
      }))
    )
    .flat(1);

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { user: string; pack: string };
}) {
  return {
    props: {
      name: params.user,
      cards: data
        .find((user) => user.name === params.user)
        ?.packs.find((pack) => pack.id === params.pack)?.cards,
    },
  };
}

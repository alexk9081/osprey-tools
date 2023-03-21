import Head from "next/head";
import styled from "styled-components";
import NoteCard from "@/components/resuseable/NoteCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          <div>
            <div>Edit notecards</div>
            <div>
              <div>
                {cards.map((card) => (
                  <EditCard question={card.question} answer={card.answer} />
                ))}
                <EditCard question="" answer="" />
              </div>
            </div>
          </div>
        </Hero>

        <h2>Notecard pack by {name}</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.question}>
              <SlideWrapper>
                <NoteCard
                  height="15rem"
                  width="30rem"
                  question={card.question}
                  answer={card.answer}
                />
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>

        <GridViewCards>
          {cards.map((card) => (
            <SlideWrapper>
              <NoteCard
                height="15rem"
                width="calc(100% - 2rem)"
                question={card.question}
                answer={card.answer}
              />
            </SlideWrapper>
          ))}
        </GridViewCards>
      </main>
    </>
  );
}

function EditCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <input value={question} placeholder="Question" />
      <input value={answer} placeholder="Answer" />
      <input type="submit" />
      <button>Delete</button>
    </div>
  );
}

const GridViewCards = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
`;

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40vh;
  background-color: wheat;
`;

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
          {
            question: "Test TwoTwo",
            answer: "Hello Two!",
          },
          {
            question: "Test Twwo",
            answer: "Hello Two!",
          },
          {
            question: "Test Two0",
            answer: "Hello Two!",
          },
          {
            question: "Test Ttwwoo",
            answer: "Hello Two!",
          },
          {
            question: "Test Ttwwoo",
            answer: "Hello Two!",
          },
          {
            question: "Test Ttwwoo",
            answer: "Hello Two!",
          },
          {
            question: "Test Ttwwoo",
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

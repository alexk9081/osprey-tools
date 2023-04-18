import type { ReactElement } from "react";
import NotecardLayout from "@/components/layout/notecards/layout";
import Head from "next/head";
import styled from "styled-components";
import NoteCard from "@/components/page/notecards/NoteCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "@/temp/notecardData";

export default function StudyPage({
  name,
  cards,
}: {
  name: string;
  cards: { question: string; answer: string }[];
}) {
  return (
    <>
        <Head>
          <title>Notecard Pack | UNF App</title>
        </Head>
        <main>
          <h2>Notecard pack by {name}</h2>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.question + card.answer}>
                <SlideWrapper>
                  <NoteCard
                    question={card.question}
                    answer={card.answer}
                  />
                </SlideWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
    </>
  );
}

StudyPage.getLayout = function getLayout(page:any) {
  return <NotecardLayout>{page}</NotecardLayout>;
};

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem;
`;

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

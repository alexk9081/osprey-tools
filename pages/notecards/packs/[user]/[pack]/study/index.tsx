import NotecardLayout from "@/components/layout/notecards/layout";
import Head from "next/head";
import styled from "styled-components";
import NoteCard from "@/components/page/notecards/NoteCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NotecardSetContext } from "@/components/layout/notecards/NotecardSetContext";
import { useContext } from "react";

export default function StudyPage() {
  const { notecardSet, setNotecardSet } = useContext(NotecardSetContext);
  
  return (
    <>
        <Head>
          <title>Study Notecards | UNF App</title>
        </Head>
        <main>
          {/* <h2>Notecard pack by {name}</h2> */}

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {/* {cards.map((card) => (
              <SwiperSlide key={card.question + card.answer}>
                <SlideWrapper>
                  <NoteCard
                    question={card.question}
                    answer={card.answer}
                  />
                </SlideWrapper>
              </SwiperSlide>
            ))} */}
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
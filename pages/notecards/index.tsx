import CardSection from "@/components/page/notecards/CardSection";
import Hero from "@/components/page/notecards/Hero";
import Pack from "@/components/page/notecards/Pack";
import data from "@/temp/notecardPacksData";
import Head from "next/head";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { screen } from "@/styles/styleConstants";

export default function NoteCardsPage() {
  return (
    <>
      <Head>
        <title>Notecards | UNF App</title>
      </Head>
      <main>
        <Hero />

        <CardSection
          title="Your Notecards"
          description="Your own personally made notecards"
        >
          <StyledSwiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {data.slice(1, 2).map((cardCollection: any) => (
              <SwiperSlide
                key={cardCollection.creator.name + cardCollection.title}
              >
                <Pack
                  title={cardCollection.title}
                  desc={cardCollection.desc}
                  img={cardCollection.img}
                  link={cardCollection.link + "/overview"}
                  creator={cardCollection.creator}
                  key={cardCollection.creator.name + cardCollection.title}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <Pack
                title="Add new collection"
                desc="Create your own note card collection"
                img="https://cdn-icons-png.flaticon.com/512/32/32339.png"
                link="/notecards/create"
                creator={{
                  img: "anon-user.png",
                  name: "Current User",
                }}
              />
            </SwiperSlide>
          </StyledSwiper>
        </CardSection>

        <HorizontalRule />

        <CardSection
          title="Public Notecards"
          description="Community shared notecards"
        >
          <StyledSwiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((cardCollection: any) => (
              <SwiperSlide
                key={cardCollection.creator.name + cardCollection.title}
              >
                <Pack
                  title={cardCollection.title}
                  desc={cardCollection.desc}
                  img={cardCollection.img}
                  link={cardCollection.link + "/overview"}
                  creator={cardCollection.creator}
                  key={cardCollection.creator.name + cardCollection.title}
                />
              </SwiperSlide>
            ))}
            {data.map((cardCollection: any) => (
              <SwiperSlide
                key={cardCollection.creator.name + cardCollection.title}
              >
                <Pack
                  title={cardCollection.title}
                  desc={cardCollection.desc}
                  img={cardCollection.img}
                  link={cardCollection.link + "/overview"}
                  creator={cardCollection.creator}
                  key={cardCollection.creator.name + cardCollection.title}
                />
              </SwiperSlide>
            ))}
            {data.map((cardCollection: any) => (
              <SwiperSlide
                key={cardCollection.creator.name + cardCollection.title}
              >
                <Pack
                  title={cardCollection.title}
                  desc={cardCollection.desc}
                  img={cardCollection.img}
                  link={cardCollection.link + "/overview"}
                  creator={cardCollection.creator}
                  key={cardCollection.creator.name + cardCollection.title}
                />
              </SwiperSlide>
            ))}
            {data.map((cardCollection: any) => (
              <SwiperSlide
                key={cardCollection.creator.name + cardCollection.title}
              >
                <Pack
                  title={cardCollection.title}
                  desc={cardCollection.desc}
                  img={cardCollection.img}
                  link={cardCollection.link + "/overview"}
                  creator={cardCollection.creator}
                  key={cardCollection.creator.name + cardCollection.title}
                />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </CardSection>
      </main>
    </>
  );
}

const StyledSwiper = styled(Swiper)`
  @media (max-width: ${screen.tablet}) {
    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }
  }
`;

const HorizontalRule = styled.hr`
  margin: 0 2rem;
`;

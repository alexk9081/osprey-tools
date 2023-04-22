import CardSection from "@/components/page/notecards/CardSection";
import Hero from "@/components/page/notecards/Hero";
import Pack from "@/components/page/notecards/Pack";
import Head from "next/head";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState, useContext } from "react";
import { Store } from "react-notifications-component";
import { NotecardSet } from "@/values/types";
import { baseURL } from "@/values/api";
import { UserContext } from "@/components/layout/LoginContext";
import { images } from "@/temp/images";

export default function NoteCardsPage() {
  const [personalSets, setPersonalSets] = useState<NotecardSet[]>([]);
  const [publicSets, setPublicSets] = useState<NotecardSet[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(baseURL + `notecardset/get/public`)
      .then((res) => {
        if (res.ok) {
          res.json().then((res: NotecardSet[]) => {
            setPublicSets(res);
          });
        } else if (res.status === 404) {
          Store.addNotification({
            title: "Could not find public packs",
            message: `No packs could not be found`,
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true,
              showIcon: true,
            },
          });
        } else {
          Store.addNotification({
            title: "ERROR: Unexpected behavior",
            message: `${res.status}: ${res.statusText}`,
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true,
              showIcon: true,
            },
          });
        }
      })
      .catch((error) => {
        Store.addNotification({
          title: "Client failed to connect to API",
          message: "Possible network error or disruption",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover: true,
            showIcon: true,
          },
        });

        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      fetch(baseURL + `notecardset/get/personal?nNumber=${user.nNumber}`)
        .then((res) => {
          if (res.ok) {
            res.json().then((res: NotecardSet[]) => {
              setPersonalSets(res);
            });
          } else if (res.status === 404) {
            Store.addNotification({
              title: "Could not find personal packs",
              message: `No packs could not be found for user ${user.name}`,
              type: "danger",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
                pauseOnHover: true,
                showIcon: true,
              },
            });
          } else {
            Store.addNotification({
              title: "ERROR: Unexpected behavior",
              message: `${res.status}: ${res.statusText}`,
              type: "danger",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
                pauseOnHover: true,
                showIcon: true,
              },
            });
          }
        })
        .catch((error) => {
          Store.addNotification({
            title: "Client failed to connect to API",
            message: "Possible network error or disruption",
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true,
              showIcon: true,
            },
          });

          console.log(error);
        });
    }
  }, [user]);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  return (
    <>
      <Head>
        <title>Notecard Sets | UNF App</title>
      </Head>
      <main>
        <Hero />

        {user && (
          <>
            <CardSection
              title="Your Notecards"
              description="Your own personally made notecards"
            >
              {personalSets.map((cardCollection: NotecardSet) => (
                <SwiperSlide key={cardCollection.id}>
                  <Pack
                    title={cardCollection.name}
                    desc={cardCollection.description}
                    img={
                      cardCollection.imageUrl
                        ? cardCollection.imageUrl
                        : images[getRandomInt(0, images.length)]
                    }
                    link={`notecards/packs/${cardCollection.creator.nNumber}/${cardCollection.id}/overview`}
                    creator={cardCollection.creator}
                  />
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <Pack
                  title="Add new collection"
                  desc="Create your own note card collection"
                  img="https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/plus-small-01-512.png"
                  link="/notecards/create"
                  creator={{
                    imageUrl:
                      "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png",
                    name: "Current User",
                    nNumber: "n01234567",
                  }}
                />
              </SwiperSlide>
            </CardSection>

            <HorizontalRule />
          </>
        )}

        <CardSection
          title="Public Notecards"
          description="Community shared notecards"
        >
          {publicSets.map((cardCollection: NotecardSet) => (
            <SwiperSlide key={cardCollection.id}>
              <Pack
                title={cardCollection.name}
                desc={cardCollection.description}
                img={
                  cardCollection.imageUrl
                    ? cardCollection.imageUrl
                    : images[getRandomInt(0, images.length)]
                }
                link={`notecards/packs/${cardCollection.creator.nNumber}/${cardCollection.id}/overview`}
                creator={cardCollection.creator}
              />
            </SwiperSlide>
          ))}
        </CardSection>
      </main>
    </>
  );
}

const HorizontalRule = styled.hr`
  margin: 0 2rem;
`;

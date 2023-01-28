import { colors, fonts, screen } from "@/styles/styleConstants";
import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import SimpleMap from "@/components/resuseable/Map";

export default function Map() {
  const testButtonData = [
    {
      floor: "Big Map",
      image:
        "https://cdn.discordapp.com/attachments/1067491860286820394/1068584309922996334/20230126_115824.png",
    },
    {
      floor: "Floor 1",
      image: "http://fakeimg.pl/1000x400?text=Floor%201&font=museo",
    },
    {
      floor: "Floor 2",
      image: "http://fakeimg.pl/1000x400?text=Floor%202&font=bebas",
    },
    {
      floor: "Floor 3",
      image: "http://fakeimg.pl/1000x400?text=Floor%203&font=lobster",
    },
  ];

  const [activeImage, setActiveImage] = useState(testButtonData[0]["image"]);

  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>

        <CampusMap>
          <KeyPointsOfIntrest>
            <Title>Key Points of Intrest</Title>
            <PointOfIntrest>Building 58 - Student Union</PointOfIntrest>
            <PointOfIntrest>Building 12 - Tommy G</PointOfIntrest>
            <PointOfIntrest>Building 41 - Police Building</PointOfIntrest>
          </KeyPointsOfIntrest>
          <SimpleMap height="35rem" width="100%" />
        </CampusMap>

        <Buttons>
          {testButtonData.map((map) => (
            <Button
              onClick={() => setActiveImage(map.image)}
              key={map.floor}
              isActive={map.image == activeImage}
            >
              {map.floor}
            </Button>
          ))}
        </Buttons>

        <Image src={activeImage} alt="" />
      </main>
    </>
  );
}

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;

const PointOfIntrest = styled.div`
  margin: 1rem;
  padding: 1rem;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  box-shadow: 0.1rem 0.3rem 0.75rem #00000040;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;

    background-color: #e2e2e2e8;
    box-shadow: 0.1rem 0.3rem 0.75rem #00000060;
  }
`;

const KeyPointsOfIntrest = styled.div`
  color: ${colors.nearBlack};
  font-size: 1.5rem;
  font-weight: 700;
`;

const CampusMap = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 5rem - 3rem);

  object-fit: contain;
`;

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;

  height: 3rem;

  @media (max-width: ${screen.tablet}) {
    justify-content: left;

    margin: 0 1rem;

    gap: 1rem;
  }

  @media (max-width: ${screen.mobile}) {
    overflow: scroll;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? colors.nearBlack : colors.lightGray};

  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;

  border: none;
  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? "4px solid " + colors.unfBlue : "4px solid transparent"};
  height: 100%;

  transition: 0.3s ease all, 0.1s ease border-bottom;

  &:hover {
    cursor: pointer;
    background-color: ${colors.translucentDarkWhite};
    color: ${colors.lightBlack};
  }
`;

const Hero = styled.div`
  height: 5rem;
`;

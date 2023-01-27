import { colors, fonts, screen } from "@/styles/styleConstants";
import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function Map() {
  const testButtonData = [
    {
      floor: "Big Map",
      image: "http://fakeimg.pl/1000x400?text=Big%20Map&font=lobster",
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

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 5rem - 3rem);
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

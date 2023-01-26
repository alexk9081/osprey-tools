import { colors, fonts } from "@/styles/styleConstants";
import Head from "next/head";
import styled from "styled-components";

export default function Map() {
  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>
        <Buttons>
          <Button>Big Map</Button>
          <Button>Floor 1</Button>
          <Button>Floor 2</Button>
          <Button>Floor 3</Button>
        </Buttons>

        <Image
          src="http://fakeimg.pl/1500x600?text=Map Placeholder&font=bebas"
          alt=""
        />
      </main>
    </>
  );
}

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 5rem - 3rem);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  height: 3rem;
`;

const Button = styled.button`
  background-color: ${colors.unfBlue};
  color: ${colors.nearWhite};

  font-size: 1rem;
  font-weight: 600;

  border-radius: 1rem;

  padding: 0.5rem 1rem;

  transition: 0.3s ease all;

  &:hover {
    cursor: pointer;
    background-color: ${colors.unfBlueLight};
  }
`;

const Hero = styled.div`
  height: 5rem;
`;

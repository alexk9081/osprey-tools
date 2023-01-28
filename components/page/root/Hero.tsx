import { colors, fonts, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";

export default function MainHero() {
  return (
    <Hero>
      <HeroText>Elevate your Productivity</HeroText>

      <Link href="/map">
        <Image
          src="https://media.discordapp.net/attachments/1067491860286820394/1068360876056387614/CamScanner_01-26-2023_11.59_2.jpg?width=806&height=676"
          alt=""
        />
      </Link>
    </Hero>
  );
}

const HeroText = styled.div`
  font-size: 4rem;
  font-weight: 800;

  font-family: ${fonts.serifMain};
`;

const Hero = styled.div`
  position: relative;
  background-image: linear-gradient(350deg, ${colors.unfBlueWhite}, white);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 30rem;

  @media (max-width: ${screen.tablet}) {
    justify-content: flex-end;

    height: calc(30rem + 200px);
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  height: 175px;

  border: 4px solid ${colors.unfBlue};
  border-radius: 1rem;

  @media (max-width: ${screen.tablet}) {
    position: relative;

    display: block;

    border: none;
    border-radius: 0;

    bottom: 0;
    right: 0;

    width: 100vw;
    height: 200px;
    object-fit: cover;
  }
`;

import { colors, fonts, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";

export default function MainHero() {
  return (
    <Hero>
      <HeroText>Elevate your Productivity</HeroText>

      <Link href="/map">
        <MapHolder>
          <Image
            src="https://media.discordapp.net/attachments/1067491860286820394/1068360876056387614/CamScanner_01-26-2023_11.59_2.jpg?width=806&height=676"
            alt=""
          />
          <MapText>Map</MapText>
        </MapHolder>
      </Link>
    </Hero>
  );
}

const MapHolder = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  @media (max-width: ${screen.tablet}) {
    bottom: 0;
    right: 0;
  }
`;

const MapText = styled.div`
  display: none;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-family:${fonts.serifMain};
  color: ${colors.nearWhite};
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 0 0 1rem ${colors.nearBlack};

  @media (max-width: ${screen.tablet}) {
    display: block;
  }
`;

const HeroText = styled.div`
  display: flex;
  align-items: center;

  font-size: 4rem;
  font-weight: 800;

  font-family: ${fonts.serifMain};

  flex-grow: 1;

  @media (max-width: ${screen.desktop}) {
    font-size: 3rem;
  }

  @media (max-width: ${screen.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${screen.mobile}) {
    font-size: 1.5rem;
  }
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
  height: 175px;

  border: 4px solid ${colors.unfBlue};
  border-radius: 1rem;

  @media (max-width: ${screen.tablet}) {
    position: relative;

    display: block;

    border: none;
    border-radius: 0;

    box-shadow: 0rem 0rem 1rem #00000080;

    width: 100vw;
    height: 200px;
    object-fit: cover;

    filter: brightness(0.5);
  }
`;

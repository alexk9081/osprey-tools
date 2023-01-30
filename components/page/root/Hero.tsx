import { colors, fonts, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";

export default function MainHero() {
  return (
    <Hero>
      <HeroGradient>
        <HeroText>ELEVATE YOUR PRODUCTIVITY</HeroText>

        <Link href="/map">
          <MapHolder>
            <Image
              src="https://media.discordapp.net/attachments/1067491860286820394/1068360876056387614/CamScanner_01-26-2023_11.59_2.jpg?width=806&height=676"
              alt=""
            />
            <MapText>Map</MapText>
          </MapHolder>
        </Link>
      </HeroGradient>
    </Hero>
  );
}

const MapHolder = styled.div`
  position: absolute;
  bottom: 7rem;
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

  font-family: ${fonts.serifMain};
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

  font-family: ${fonts.sansSerifImpact};

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

const HeroGradient = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(350deg, #030c15aa, #296271aa);

  padding-bottom: 10rem;

  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
`;

const Hero = styled.div`
  position: relative;
  background-image: url("https://www.flbog.edu/wp-content/uploads/unf-masthead.jpg");
  background-size: cover;
  background-position: 50%;

  color: white;
  text-shadow: 0 0 1rem #0009;

  height: 30rem;

  padding-bottom: 10rem;

  @media (max-width: ${screen.tablet}) {
    justify-content: flex-end;

    height: calc(30rem + 200px);
  }

  overflow:hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -12%;
    left: -10%;

    width: 120%;
    height: 10rem;

    background-color: white;

    background-image: linear-gradient(to bottom, #00000090, white 4%);

    transform: rotate(3deg);

  @media (max-width: ${screen.tablet}) {
    display: none;
  }
  }
`;

const Image = styled.img`
  height: 175px;

  box-shadow: 0rem 0rem 1rem ${colors.unfBlue};
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

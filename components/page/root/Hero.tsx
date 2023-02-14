import { colors, fonts, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";
import { Parallax } from "react-parallax";

export default function MainHero() {
  return (
    <>
      <Parallax
        bgImage="https://www.flbog.edu/wp-content/uploads/unf-masthead.jpg"
        bgImageAlt=""
        strength={300}
      >
        <Hero>
          <HeroGradient>
            <ProjectTitle>O s p r e y    P r o d u c t i v i t y    T o o l s</ProjectTitle>
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
      </Parallax>
    </>
  );
}

const ProjectTitle = styled.div`
  color: ${colors.darkWhite};
  white-space: pre-wrap;
  font-size: 1rem;

  text-shadow: 0 0 0.5rem #000;

  @media (max-width: ${screen.tablet}) {
  font-size: 0.9rem;
  }

  @media (max-width: ${screen.mobile}) {
  font-size: 0.75rem;
  }
`;

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
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-family: ${fonts.sansSerifMain};
  color: ${colors.nearWhite};
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 0 1rem ${colors.nearBlack};

  @media (max-width: ${screen.tablet}) {
    display: none;
  }
`;

const HeroText = styled.div`
  display: flex;
  align-items: center;

  font-size: 4rem;
  font-weight: 800;
  line-height: 4rem;

  text-align: center;

  font-family: ${fonts.sansSerifImpact};

  @media (max-width: ${screen.desktop}) {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media (max-width: ${screen.tablet}) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media (max-width: ${screen.mobile}) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const HeroGradient = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(350deg, #030c15aa, #296271aa);

  padding-bottom: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Hero = styled.div`
  position: relative;

  color: white;
  text-shadow: 0 0 1rem #0009;

  height: 40rem;

  padding-bottom: 10rem;

  @media (max-width: ${screen.tablet}) {
    justify-content: flex-end;

    height: calc(30rem + 200px);
    padding-bottom: 0;
  }

  //Diagonal cut below
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -12%;
    left: -10%;

    width: 120%;
    height: 10rem;

    background-color: white;

    background-image: linear-gradient(to bottom, #00000090, white 4%);

    transform: rotate(2.5deg);

    @media (max-width: ${screen.tablet}) {
      display: none;
    }
  }
`;

const Image = styled.img`
  height: 175px;
  filter: brightness(0.7);

  box-shadow: 0rem 0rem 1rem ${colors.unfBlue};
  border-radius: 1rem;

  @media (max-width: ${screen.tablet}) {
    display: none;
  }
`;

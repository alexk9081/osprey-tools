import { screen } from "@/styles/styleConstants";
import Head from "next/head";
import styled from "styled-components";
import UpcomingTasks from "@/components/page/root/UpcomingTasks";
import MainHero from "@/components/page/root/Hero";
import Links from "@/components/page/root/Links";
import FavoriteLocations from "@/components/page/root/FavoriteLocations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>

      <main>
        <MainHero />

        <MainContent>
          <ShadowWrapper>
            <QuickAccessComponents>
              <UpcomingTasks />
              <FavoriteLocations />
            </QuickAccessComponents>
          </ShadowWrapper>
          <Links />
        </MainContent>
      </main>
    </>
  );
}

const ShadowWrapper = styled.div`
  padding-bottom: 2rem;
  background-color: #ddd;
`;

const QuickAccessComponents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  box-shadow: 0 0 1rem #0002;
  background-color: #fff;

  @media (max-width: ${screen.laptop}) {
    grid-template-columns: 1fr;
  }
`;

const StickyBox = styled.div`
  position: sticky;
  top: 6rem;

  height: 20rem;

  margin: 1rem;
  padding: 1rem;

  border: 4px solid #000;
  border-radius: 1rem;

  background-color: white;

  @media (max-width: ${screen.tablet}) {
    display: none;
  }
`;

const MainContent = styled.div`
  /* display: grid;

  grid-template-columns: 1fr 20rem;

  @media (max-width: ${screen.tablet}) {
    grid-template-columns: 100%;
  } */
`;

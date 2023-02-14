import Head from "next/head";
import styled from "styled-components";
import CampusMap from "@/components/page/map/CampusMap";
import FloorViewer from "@/components/page/map/FloorViewer";
import { useState } from "react";
import data, { locationType } from "@/temp/locationData";

export default function Map({location}: {location: locationType}) {
  const [center, setCenter] = useState(
    location.coordinates
  );

  const [activeLocation, setActiveLocation] = useState(
    location
  )

  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>

        <CampusMap setCenter={setCenter} center={center} setActiveLocation={setActiveLocation} />

        <FloorViewer floors={activeLocation.images}/>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 5rem;
`;

export async function getStaticPaths() {
  const paths = data.map((point) => ({
    params: { location: point.number},
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { location: string };
}) {
  return { props: { location: data.find((point) => point.number === params.location) } };
}

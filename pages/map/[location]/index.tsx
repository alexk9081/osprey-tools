import Head from "next/head";
import styled from "styled-components";
import CampusMap from "@/components/page/map/CampusMap";
import FloorViewer from "@/components/page/map/FloorViewer";
import { useState } from "react";
import data, { locationType } from "@/temp/locationData";
import MapLayout from "@/components/page/map/PageLayout";
import { BoxMultiple, Map } from "tabler-icons-react";

export default function MapPage({ location }: { location: locationType }) {
  const [center, setCenter] = useState(location.coordinates);

  const [activeLocation, setActiveLocation] = useState(location);

  const [viewMap, setViewMap] = useState(true);

  return (
    <>
      <Head>
        <title>Map | UNF App</title>
      </Head>
      <MapLayout setCenter={setCenter} setActiveLocation={setActiveLocation}>
        <ChangeViewButton onClick={() => setViewMap(!viewMap)}>
          {viewMap ? (
            <BoxMultiple color="white" size="1.75rem" />
            ) : (
            <Map color="white" size="1.75rem" />
          )}
        </ChangeViewButton>
        <MainContentLayout>
          {viewMap ? (
            <CampusMap
              setCenter={setCenter}
              center={center}
              setActiveLocation={setActiveLocation}
            />
          ) : (
            <FloorViewer floors={activeLocation.images} />
          )}
        </MainContentLayout>
      </MapLayout>
    </>
  );
}

const MainContentLayout = styled.main`
  position: relative;
`;

const ChangeViewButton = styled.button`
  background-color: black;

  position: absolute;
  bottom: 2rem;
  right: 4rem;

  z-index: 2;

  height: 3rem;
  width: 3rem;

  border-radius: 50%;

  cursor: pointer;
`;

export async function getStaticPaths() {
  const paths = data.map((point) => ({
    params: { location: point.number },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { location: string };
}) {
  return {
    props: { location: data.find((point) => point.number === params.location) },
  };
}

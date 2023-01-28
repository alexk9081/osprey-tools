import Head from "next/head";
import styled from "styled-components";
import CampusMap from "@/components/page/map/CampusMap";
import FloorViewer from "@/components/page/map/FloorViewer";
import { useState } from "react";

export default function Map() {
  const [center, setCenter] = useState({
    lat: 30.2661340813742,
    lng: -81.50719579077145,
  });

  return (
    <>
      <Head>
        <title>Home | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>

        <CampusMap setCenter={setCenter} center={center} />

        <FloorViewer />
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 5rem;
`;

import Head from "next/head";
import styled from "styled-components";
import CampusMap from "@/components/page/map/CampusMap";
import FloorViewer from "@/components/page/map/FloorViewer";
import { useState } from "react";

export default function Map({coordinates}: {coordinates: { lat: number; lng: number }}) {
  const [center, setCenter] = useState(
    coordinates
  );

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

export async function getStaticPaths() {
  const data = [
    {
      number: "UNF",
      name: "University of North Florida",
      coordinates: { lat: 30.2661340813742, lng: -81.50719579077145 },
    },
    {
      number: "51",
      name: "Building 51 - Social Sciences",
      coordinates: { lat: 30.26957709945413, lng: -81.50628133740905 },
    },
    {
      number: "58",
      name: "Building 58 - Student Union",
      coordinates: { lat: 30.271890435799264, lng: -81.50923390523664 },
    },
    {
      number: "12",
      name: "Building 12 - Tommy G",
      coordinates: { lat: 30.269504032957066, lng: -81.50865484296324 },
    },
    {
      number: "41",
      name: "Building 41 - Police Building",
      coordinates: { lat: 30.26714525333742, lng: -81.51225882517198 },
    },
  ];

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
  const data = [
    {
      number: "UNF",
      name: "University of North Florida",
      coordinates: { lat: 30.2661340813742, lng: -81.50719579077145 },
    },
    {
      number: "51",
      name: "Building 51 - Social Sciences",
      coordinates: { lat: 30.26957709945413, lng: -81.50628133740905 },
    },
    {
      number: "58",
      name: "Building 58 - Student Union",
      coordinates: { lat: 30.271890435799264, lng: -81.50923390523664 },
    },
    {
      number: "12",
      name: "Building 12 - Tommy G",
      coordinates: { lat: 30.269504032957066, lng: -81.50865484296324 },
    },
    {
      number: "41",
      name: "Building 41 - Police Building",
      coordinates: { lat: 30.26714525333742, lng: -81.51225882517198 },
    },
  ];

  return { props: { coordinates: data.find((point) => point.number === params.location)?.coordinates } };
}

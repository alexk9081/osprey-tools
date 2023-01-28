import { colors } from "@/styles/styleConstants";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import styled from "styled-components";

export default function CampusMap({
  center,
  setCenter,
}: {
  center: { lat: number; lng: number };
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
}) {
  const data = [
    {
      number: "51",
      name: "Building 58 - Social Sciences",
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

  function _onChange({
    center,
    zoom,
  }: {
    center: { lat: number; lng: number };
    zoom: number;
  }) {
    setCenter(center);
  }

  return (
    <CampusMapWrapper>
      <KeyPointsOfIntrest>
        <Title>Key Points of Intrest</Title>
        {data.map((point) => (
          <PointOfIntrest
            onClick={() => {
              setCenter({
                lat: point.coordinates.lat,
                lng: point.coordinates.lng,
              });
            }}
          >
            {point.name}
          </PointOfIntrest>
        ))}
      </KeyPointsOfIntrest>
      <div style={{ height: "35rem", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY
              ? process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY
              : "",
          }}
          defaultZoom={15}
          center={center}
          onChange={_onChange}
        >
          {data.map((point) => (
            <MapMarker
              lat={point.coordinates.lat}
              lng={point.coordinates.lng}
              onClick={() => {
                setCenter({
                  lat: point.coordinates.lat,
                  lng: point.coordinates.lng,
                });
              }}
            >
              {point.number}
            </MapMarker>
          ))}
        </GoogleMapReact>
      </div>

      {!process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY && (
        <h1>
          <h1>
            The api key is missing from your local repo, dm me for it - Alex
          </h1>
        </h1>
      )}
    </CampusMapWrapper>
  );
}

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;

const PointOfIntrest = styled.div`
  margin: 1rem;
  padding: 1rem;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  box-shadow: 0.1rem 0.3rem 0.75rem #00000040;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;

    background-color: #e2e2e2e8;
    box-shadow: 0.1rem 0.3rem 0.75rem #00000060;
  }
`;

const KeyPointsOfIntrest = styled.div`
  color: ${colors.nearBlack};
  font-size: 1.5rem;
  font-weight: 700;
`;

const CampusMapWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

function MapMarker({
  lat,
  lng,
  children,
  onClick,
}: {
  lat: number;
  lng: number;
  children: string;
  onClick: () => void;
}) {
  return <Marker onClick={onClick}>{children}</Marker>;
}

const Marker = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  padding: 5px 0.5rem;
  border-radius: 6px;

  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;

  transform: translate(-50%, calc(-100% - 14px));

  &::after {
    content: " ";
    position: absolute;
    top: calc(100%);
    /* At the bottom of the tooltip */
    left: 50%;

    margin-left: -8px;
    border-width: 8px;
    border-top-width: 14px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`;

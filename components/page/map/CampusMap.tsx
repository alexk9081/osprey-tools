import { colors, screen } from "@/styles/styleConstants";
import data, { locationType } from "@/temp/locationData";
import GoogleMapReact from "google-map-react";
import { Search } from "tabler-icons-react";
import styled from "styled-components";
import { useState } from "react";

export default function CampusMap({
  center,
  setCenter,
  setActiveLocation,
}: {
  center: { lat: number; lng: number };
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
  setActiveLocation: React.Dispatch<React.SetStateAction<locationType>>;
}) {
  function _onChange({
    center,
    zoom,
  }: {
    center: { lat: number; lng: number };
    zoom: number;
  }) {
    setCenter(center);
  }

  const [filteredList, setFilteredList] = useState(data);

  function updateFilteredList(query: string) {
    setFilteredList(
      data.filter((location) =>
      location
      .name
      .toLowerCase()
      .includes(query.toLowerCase())
      )
    )
  }

  return (
    <CampusMapWrapper>
      <KeyPointsOfInterest>
        <Title>Key Points of Interest</Title>
        <SearchComponent>
          <SearchBar onChange={(e) => {updateFilteredList(e.target.value)}} />
          <Search />
        </SearchComponent>
        <POIList>
          {filteredList.map((point) => (
            <PointOfInterest
              onClick={() => {
                setCenter({
                  lat: point.coordinates.lat,
                  lng: point.coordinates.lng,
                });
                setActiveLocation(point);
              }}
              key={point.number}
            >
              {point.name}
            </PointOfInterest>
          ))}
        </POIList>
      </KeyPointsOfInterest>
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
              key={point.number}
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

const SearchBar = styled.input`
  background-color: transparent;
  border: none;

  width: 100%;
`;

const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 3rem;
  border: 2px solid #0005;

  padding: 0 0.5rem;

  margin: 0.5rem 1rem;
`;

const POIList = styled.div`
  height: 31rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9ba5a9;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    &:hover {
      background-color: #5c6568;
    }
  }

  box-shadow: 0 -13px 10px -4px #9d9d9d inset;

  padding-right: 3rem;
`;

const Title = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  margin: 0.5rem 1.5rem;
  padding: calc(0.5rem - 1px) 1rem;
  border-bottom: 2px solid black;
`;

const PointOfInterest = styled.div`
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

const KeyPointsOfInterest = styled.div`
  color: ${colors.nearBlack};
  font-size: 1.5rem;
  font-weight: 700;
`;

const CampusMapWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  @media (max-width: ${screen.tablet}) {
    grid-template-columns: 100%;
  }
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

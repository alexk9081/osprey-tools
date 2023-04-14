import { colors, screen } from "@/styles/styleConstants";
import data, { locationType } from "@/temp/locationData";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

export default function CampusMap({
  center,
  setCenter,
}: {
  center: { lat: number; lng: number };
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
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

  return (
      <div style={{ height: "calc(100vh - 5rem)", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY
              ? process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY
              : "",
          }}
          defaultZoom={16}
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
  );
}

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

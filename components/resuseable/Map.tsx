import GoogleMapReact from "google-map-react";
import styled from "styled-components";

export default function SimpleMap({
  height,
  width,
}: {
  height: string | number;
  width: string | number;
}) {
  return (
    <>
      <div style={{ height: height, width: width }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY
              ? process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY
              : "",
          }}
          defaultCenter={{
            lat: 30.2661340813742,
            lng: -81.50719579077145,
          }}
          defaultZoom={15}
        >
          <MapMarker lat={30.26957709945413} lng={-81.50628133740905}>
            51
          </MapMarker>
        </GoogleMapReact>
      </div>

      {!process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEYY && (
        <h1>
          <h1>
            The api key is missing from your local repo, dm me for it - Alex
          </h1>
        </h1>
      )}
    </>
  );
}

function MapMarker({
  lat,
  lng,
  children,
}: {
  lat: number;
  lng: number;
  children: string;
}) {
  return <Marker>{children}</Marker>;
}

const Marker = styled.div`
  /* opacity: 0.2; */
  /* transition: 0.1s ease opacity, 0.1s ease visibility; */
  /* visibility: hidden; */
  /* width: 40px; */
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

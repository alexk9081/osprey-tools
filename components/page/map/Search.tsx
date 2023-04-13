import styled from "styled-components";
import data, { locationType } from "@/temp/locationData";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import { colors } from "@/styles/styleConstants";

export default function SearchElement({
  setCenter,
  setActiveLocation,
}: {
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
  setActiveLocation: React.Dispatch<React.SetStateAction<locationType>>;
}) {
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
    <KeyPointsOfInterest>
      <Title>Key Points of Interest</Title>
      <SearchComponent>
        <SearchBar
          onChange={(e) => {
            updateFilteredList(e.target.value);
          }}
        />
        <Search style={{ paddingRight: "0.5rem" }} />
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
  );
}

const SearchBar = styled.input`
  background-color: transparent;
  border: none;

  width: 100%;

  border-radius: 3rem;
  padding: 0.5rem 1.25rem;
`;

const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 3rem;
  border: 2px solid #0005;

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

  /* box-shadow: 0 -13px 10px -4px #9d9d9d inset; */

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

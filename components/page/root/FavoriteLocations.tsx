import { colors } from "@/styles/styleConstants";
import styled from "styled-components";

export default function FavoriteLocations() {
  const data = [
    {
      name: "Building 58 - Student Union",
    },
    {
      name: "Building 51 - Social Sciences",
    },
    {
      name: "Building 12 - Tommy G",
    },
  ];

  return (
    <FavoriteLocationsWrapper>
      <Title>Favorite Locations</Title>
      {data.map((location) => (
        <Location>{location.name}</Location>
      ))}
    </FavoriteLocationsWrapper>
  );
}

const FavoriteLocationsWrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const Location = styled.div`
  margin: 1rem;
  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 700;

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

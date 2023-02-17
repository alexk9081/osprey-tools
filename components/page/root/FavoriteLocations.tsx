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

      <Locations>
        {data.map((location) => (
          <Location key={location.name}>
            <LocationText>{location.name}</LocationText>
          </Location>
        ))}
      </Locations>
    </FavoriteLocationsWrapper>
  );
}

const Locations = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const FavoriteLocationsWrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const LocationText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-size: 1.5rem;
  font-weight: 700;

  padding: 1rem;
  height: 100%;

  box-sizing: border-box;

  backdrop-filter: brightness(0.65);
  color: white;

  transition: 0.2s ease all;
`;

const Location = styled.div`
  margin: 1rem;
  height: 10rem;

  background-image: url("https://images.unsplash.com/photo-1574417837609-53a862369529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;

  box-shadow: 0.1rem 0.3rem 0.75rem #00000040;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;

    box-shadow: 0.1rem 0.3rem 0.75rem #00000060;

    ${LocationText} {
      backdrop-filter: brightness(0.45);
    }
  }
`;

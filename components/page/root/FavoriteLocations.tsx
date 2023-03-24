import { colors, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";

export default function FavoriteLocations() {
  const data = [
    {
      name: "Building 58 - Student Union",
      url: "58",
      img: "https://www.unf.edu/studentunion/images/studentunion.jpg",
    },
    {
      name: "Building 51 - Social Sciences",
      url: "51",
      img: "https://thermomass.com/website/wp-content/uploads/2017/02/unf-bldg51-02.jpg",
    },
    {
      name: "Building 12 - Tommy G",
      url: "12",
      img: "https://digitalcommons.unf.edu/assets/md5images/7d02d9983a170b7e6d8625c847806819.jpg",
    },
    {
      name: "Building 41 - Poilce Building",
      url: "41",
      img: "https://www.unf.edu/upd/images/upd-home-banner.jpg",
    },
  ];

  return (
    <FavoriteLocationsWrapper>
      <Title>Favorite Locations</Title>

      <Locations>
        {data.map((location) => (
          <StyledLink key={location.name} href={"map/" + location.url}>
            <Location imgUrl={location.img}>
              <LocationText>{location.name}</LocationText>
            </Location>
          </StyledLink>
        ))}
      </Locations>
    </FavoriteLocationsWrapper>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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

  backdrop-filter: brightness(0.45);
  color: white;

  transition: 0.2s ease all;
`;

const Location = styled.div`
  margin: 1rem;
  height: 12rem;

  background-image: ${(props: { imgUrl: string }) =>
    "url('" + props.imgUrl + "')"};
  background-size: cover;
  background-position: 0;

  box-shadow: 0.1rem 0.3rem 0.75rem #00000040;

  transition: 0.1s ease all;

  &:hover {
    cursor: pointer;

    box-shadow: 0.1rem 0.3rem 0.75rem #00000060;

    ${LocationText} {
      backdrop-filter: brightness(0.9);
    }
  }

  @media (max-width: ${screen.tablet}) {
    margin: 0.25rem;
  }
`;

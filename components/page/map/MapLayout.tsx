import styled from "styled-components";
import { Search } from "tabler-icons-react";
import { useState } from "react";
import { locationType } from "@/temp/locationData";
import SearchElement from "./Search";

export default function MapLayout({
  setCenter,
  setActiveLocation,
  setViewMap,
  setImageIndex,
  setActiveImage,
  floors,
  imageIndex,
  children,
}: {
  setActiveLocation: React.Dispatch<React.SetStateAction<locationType>>;
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
  setViewMap: React.Dispatch<React.SetStateAction<boolean>>;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setActiveImage: React.Dispatch<React.SetStateAction<string>>;
  floors: {
    floor: string;
    shorthand: string;
    image: string;
  }[];
  imageIndex: number;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MainHeaderSafeArea />

      <MenuHolder>
        <PageLayout>
          <Navbar>
            <NavButtonHolder isActive={false} onClick={() => setMenuOpen(!menuOpen)}>
              <Search size="3rem" />
            </NavButtonHolder>
            {floors.map((floor, index) => (
              <NavButtonHolder
                onClick={() => {
                  setViewMap(false);
                  setActiveImage(floor.image);
                  setImageIndex(index);
                }}
                isActive={imageIndex === index}
              >
                {floor.shorthand}
              </NavButtonHolder>
            ))}
          </Navbar>
          <MainContent>
            <ContentFilter menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>{children}</ContentFilter>
          </MainContent>
        </PageLayout>

        <Menu menuOpen={menuOpen}>
          <SearchElement
            setCenter={setCenter}
            setActiveLocation={setActiveLocation}
            closeMenu={() => setMenuOpen(false)}
          />
        </Menu>
      </MenuHolder>
    </>
  );
}

const NavButtonHolder = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  padding: 0.75rem 0;

  font-size: 1.75rem;
  font-weight: 800;

  border-right: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "4px solid black" : "4px solid transparent"};

  transition: 0.1s ease background-color;

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const MenuHolder = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: ${({ menuOpen }: { menuOpen: boolean }) => (menuOpen ? "0" : "-80%")};

  height: 100%;
  width: 80%;

  background-color: #f0f0f0;

  transition: 0.2s ease left;
`;

const MainHeaderSafeArea = styled.div`
  height: 5rem;
  border-bottom: 1px solid #bbb;
`;

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 5rem calc(100% - 5rem);
`;

const MainContent = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 5rem - 1px);
  width: 100%;

  overflow: hidden;
`;

const ContentFilter = styled.div`
  height: 100%;
  width: 100%;

  transition: 0.2s ease filter;

  filter: blur(
      ${({ menuOpen }: { menuOpen: boolean }) => (menuOpen ? "3px" : "0px")}
    )
    brightness(${({ menuOpen }: { menuOpen: boolean }) => (menuOpen ? 0.2 : 1)});
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 1rem 0;

  background-color: #e0e0e0;
  border-right: 1px solid #bbb;
`;

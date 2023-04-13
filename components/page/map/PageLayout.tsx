import styled from "styled-components";
import { Search } from "tabler-icons-react";
import { useState } from "react";
import { locationType } from "@/temp/locationData";
import SearchElement from "./Search";

export default function MapLayout({
  setCenter,
  setActiveLocation,
  children,
}: {
  setActiveLocation: React.Dispatch<React.SetStateAction<locationType>>;
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MainHeaderSafeArea />

      <MenuHolder>
        <PageLayout>
          <Navbar onClick={() => setMenuOpen(!menuOpen)}>
            <Search size="3rem" />
          </Navbar>
          <MainContent>
            <ContentFilter menuOpen={menuOpen}>{children}</ContentFilter>
          </MainContent>
        </PageLayout>

        <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <SearchElement
            setCenter={setCenter}
            setActiveLocation={setActiveLocation}
          />
        </Menu>
      </MenuHolder>
    </>
  );
}

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
`;

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 5rem calc(100% - 5rem);
`;

const MainContent = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 5rem);
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
  padding: 1rem 0;

  background-color: #e0e0e0;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "@/styles/styleConstants";
import { Menu2 } from "tabler-icons-react";
import Link from "next/link";

export default function Header() {
  const [headerTransparent, setHeaderTransparent] = useState(true);

  useEffect(() => {
    const checkScrollHeight = () => {
      const scrollY = window.pageYOffset;
      if (headerTransparent != scrollY < 10) {
        setHeaderTransparent(scrollY < 10);
      }
    };

    window.addEventListener("scroll", checkScrollHeight); // add event listener
    return () => {
      window.removeEventListener("scroll", checkScrollHeight); // clean up
    };
  }, [headerTransparent]);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <UpperHeader
        isTransparent={headerTransparent}
        onMouseEnter={() => setHeaderTransparent(false)}
        onMouseLeave={() => {
          if (scrollY < 10) setHeaderTransparent(true);
        }}
      >
        <Link href="/">
          <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/North_Florida_Ospreys_logo.svg/800px-North_Florida_Ospreys_logo.svg.png" />
        </Link>
        <MenuButton
          size="3rem"
          strokeWidth={3}
          color={colors.unfBlue}
          onClick={() => setShowMenu(!showMenu)}
        />
      </UpperHeader>
      <Menu show={showMenu} closeMenu={() => {setShowMenu(false)}} />
    </>
  );
}

function Menu({ show, closeMenu }: { show: boolean, closeMenu: () => void }) {
  return (
    <>
      <MenuWrapper show={show}>
        <NavButton href="/calendar" onClick={closeMenu}>
          <NavText>Calendar</NavText>
        </NavButton>
      </MenuWrapper>
    </>
  );
}

const NavButton = styled(Link)`
  text-decoration: none;
`;

const NavText = styled.div`
  margin: 1rem;
  padding: 0.5rem;

  color: ${colors.nearBlack};

  font-size: 2rem;
  font-weight: 600;
  font-family: ${fonts.sansSerifMain};
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: ${(props: { show: boolean }) => (props.show ? "5rem" : "10rem")};
  left: 0;
  z-index: 99;

  padding: 1rem;

  width: 100vw;
  height: calc(100vh - 5rem);

  background-color: ${(props: { show: boolean }) =>
    props.show ? "#fffc" : "#0000"};
  backdrop-filter: ${(props: { show: boolean }) =>
    props.show ? "blur(10px)" : "blur(0px)"};

  transition: ${(props: { show: boolean }) =>
    props.show
      ? "0.3s ease all, 0.8s ease backdrop-filter"
      : "0.3s ease all, 0.2s ease backdrop-filter"};

  opacity: ${(props: { show: boolean }) => (props.show ? "1" : "0")};
  visibility: ${(props: { show: boolean }) =>
    props.show ? "visible" : "hidden"};
`;

const MenuButton = styled(Menu2)`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100px;
`;

const UpperHeader = styled.header<{ isTransparent: boolean }>`
  position: fixed;
  z-index: 99;

  height: 5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem;

  color: ${colors.nearBlack};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s ease all;

  backdrop-filter: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "none" : "blur(3px)"};

  background-color: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "transparent" : colors.translucentNearWhite};

  a {
    color: ${colors.nearBlack};
    text-decoration: none;
    font-size: 2.25rem;
    font-weight: 600;

    display: flex;
    align-items: center;
  }
`;

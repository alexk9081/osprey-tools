import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { colors, fonts, screen } from "@/styles/styleConstants";
import { Menu2, X } from "tabler-icons-react";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  //Makes header background transparent or frosted glass when user scrolls down past 10px
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

  //Shows menu on click of top right button
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <UpperHeader
        isTransparent={headerTransparent && !showMenu}
        onMouseEnter={() => setHeaderTransparent(false)}
        onMouseLeave={() => {
          if (scrollY < 10 && !showMenu) setHeaderTransparent(true);
        }}
      >
        <Link
          href="/"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Image
            src="https://files.unfospreytools.com/file/Osprey-Productivity-Tools/logo.png"
            // src="logo.png" BACKUP
            alt=""
          />
        </Link>
        {showMenu ? (
          <CloseButton
            size="3rem"
            strokeWidth={3}
            color={colors.unfBlue}
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <MenuButton
            size="3rem"
            strokeWidth={3}
            color={colors.unfBlue}
            onClick={() => setShowMenu(!showMenu)}
          />
        )}

        <Menu
          show={showMenu}
          closeMenu={() => {
            setShowMenu(false);
          }}
        />
      </UpperHeader>
    </>
  );
}

const MenuButton = styled(Menu2)`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = styled(X)`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 90px;
`;

const UpperHeader = styled.header<{ isTransparent: boolean }>`
  position: fixed;
  z-index: 99;

  top: 0;

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

  box-shadow: ${(props: { isTransparent: boolean }) =>
    props.isTransparent ? "none" : "0 1px 12px rgba(0, 0, 0, 0.25)"};

  border-bottom: ${(props: { isTransparent: boolean }) =>
    props.isTransparent
      ? "1px solid transparent"
      : "1px solid rgba(255, 255, 255, 0.3)"};
`;

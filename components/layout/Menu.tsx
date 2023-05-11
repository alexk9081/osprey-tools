import { useContext, useEffect } from "react";
import { colors, fonts, screen } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";
import { UserContext } from "./LoginContext";
import { CalendarContext } from "./CalendarContext";
import data from "@/temp/calendarData";
import { UserAuthContext } from "./UserAuthContext";
import { getAuth } from "firebase/auth";

export default function Menu({ show, closeMenu }: { show: boolean; closeMenu: () => void }) {
  const { setEvents } = useContext(CalendarContext);
  const { userAuth } = useContext(UserAuthContext);
  const auth = getAuth();

  function addDefaultSrc(ev: any) {
    ev.target.src = "/anon-user.png";
  }

  return (
    <>
      <MenuWrapper show={show}>
        <MenuFlex>
          <NavButtons>
            <NavButton href="/calendar" onClick={closeMenu}>
              <NavText>Calendar</NavText>
            </NavButton>
            <NavButton href="/map" onClick={closeMenu}>
              <NavText>Map</NavText>
            </NavButton>
            <NavButton href="/notecards" onClick={closeMenu}>
              <NavText>Notecards</NavText>
            </NavButton>
          </NavButtons>

          {userAuth ? (
            <div>
              <UserInfoHolder href="/users/edit" onClick={closeMenu}>
                <UserImg
                  src={userAuth.photoURL ?? "/anon-user.png"}
                  onError={addDefaultSrc}
                  referrerPolicy="no-referrer"
                />
                <UserName>{userAuth.displayName}</UserName>
              </UserInfoHolder>
              <LogoutButton
                onClick={() => {
                  setEvents(data);
                  auth.signOut();
                }}
              >
                Logout
              </LogoutButton>
            </div>
          ) : (
            <LoginButton href="/users/register" onClick={closeMenu}>
              Login / Register
            </LoginButton>
          )}
        </MenuFlex>
      </MenuWrapper>
    </>
  );
}

const UserImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  transition: 150ms ease border;

  border: 5px solid ${colors.unfBlue};
`;

const UserInfoHolder = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;

  gap: 1rem;

  color: ${colors.unfBlue};
  text-decoration: none;

  transition: 150ms ease color;

  &:hover {
    color: ${colors.unfBlueLighter};

    ${UserImg} {
      border: 5px solid ${colors.unfBlueLighter};
    }
  }
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 2rem;
  height: 100%;
`;

const LogoutButton = styled.button`
  all: unset;
  background-color: #0a0927;
  color: white;

  width: max-content;
  padding: 1.5rem;
  margin: 2rem;

  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 800;

  display: flex;
  align-items: center;

  transition: 100ms ease background-color;

  cursor: pointer;

  &:hover {
    background-color: #2d2a4b;
  }

  &:focus {
    outline: 1px solid blue;
  }
`;

const LoginButton = styled(Link)`
  background-color: #0a0927;
  color: white;

  width: max-content;
  padding: 1.5rem;
  margin: 2rem;

  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 800;

  display: flex;
  align-items: center;

  transition: 100ms ease background-color;

  &:hover {
    background-color: #2d2a4b;
  }
`;

const MenuFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  @media (max-width: ${screen.tablet}) {
    padding-bottom: 5rem;
  }

  box-sizing: border-box;
`;

const NavButtons = styled.div`
  flex-direction: column;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  color: ${colors.nearBlack};
  text-decoration: none;

  transition: 100ms ease background-color;

  text-decoration: none;
  font-size: 2.25rem;
  font-weight: 600;

  display: flex;
  align-items: center;

  &:hover {
    background-color: #ddd;
  }
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

  width: 100vw;
  height: calc(100vh - 5rem);

  background-color: ${(props: { show: boolean }) =>
    props.show ? "#eee" : "#0000"};

  transition: ${(props: { show: boolean }) =>
    props.show
      ? "0.3s ease all, 0.8s ease backdrop-filter"
      : "0.3s ease all, 0.2s ease backdrop-filter"};

  opacity: ${(props: { show: boolean }) => (props.show ? "1" : "0")};
  visibility: ${(props: { show: boolean }) =>
    props.show ? "visible" : "hidden"};
`;
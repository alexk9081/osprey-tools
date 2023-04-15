import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ArrowBarLeft, Cards, List, Pencil } from "tabler-icons-react";

export default function NotecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const lastSlash = router.asPath.lastIndexOf("/");
  const currentRoute = router.asPath.substring(0, lastSlash);
  const relativeRoute = router.asPath.substring(lastSlash);

  return (
    <>
      <MainHeaderSafeArea />

      <PageLayout>
        <Navbar>
          <NavButtons>
            <StyledLink
              href={currentRoute + "/overview"}
              isActive={relativeRoute === "/overview"}
            >
              <List size="3rem" />
            </StyledLink>
            <StyledLink
              href={currentRoute + "/study"}
              isActive={relativeRoute === "/study"}
            >
              <Cards size="3rem" />
            </StyledLink>
            <StyledLink
              href={currentRoute + "/edit"}
              isActive={relativeRoute === "/edit"}
            >
              <Pencil size="3rem" />
            </StyledLink>
          </NavButtons>
          <NavButtons>
            <ExitLink href="/notecards">
              <ArrowBarLeft size="3rem" />
            </ExitLink>
          </NavButtons>
        </Navbar>
        <MainContent>{children}</MainContent>
      </PageLayout>
    </>
  );
}

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
  height: calc(100vh - 5rem);
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  background-color: #e0e0e0;
  border-right: 1px solid #bbb;
`;

const NavButtons = styled.div`
  display: grid;
  gap: 0.5rem;

  width: 100%;
`;

const StyledLink = styled(Link)`
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#000000" : "#777"};

  border-right: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "6px solid black" : "6px solid transparent"};

  box-sizing: border-box;

  transition: 0.15s ease color, 0.05s ease background-color;

  width: 100%;

  margin-left: 1px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  &:hover {
    background-color: #ccc;
    color: #000066;
  }
`;

const ExitLink = styled(Link)`
  color: #000000;

  box-sizing: border-box;

  transition: 0.15s ease color, 0.05s ease background-color;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  &:hover {
    background-color: #ccc;
    color: #000066;
  }
`;

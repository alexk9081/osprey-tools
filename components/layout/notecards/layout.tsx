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
            <StyledLink href={currentRoute + "/overview"} isActive={relativeRoute === "/overview"}>
              <List size="3rem" />
            </StyledLink>
            <StyledLink href={currentRoute + "/study"} isActive={relativeRoute === "/study"}>
              <Cards size="3rem" />
            </StyledLink>
            <StyledLink href={currentRoute + "/edit"} isActive={relativeRoute === "/edit"}>
              <Pencil size="3rem" />
            </StyledLink>
          </NavButtons>
          <NavButtons>
            <StyledLink href="/notecards" isActive>
              <ArrowBarLeft size="3rem" />
            </StyledLink>
          </NavButtons>
        </Navbar>
        <MainContent>{children}</MainContent>
      </PageLayout>
    </>
  );
}

const MainHeaderSafeArea = styled.div`
  height: 5rem;
`;

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 5rem calc(100% - 5rem);
`;

const MainContent = styled.div`
  padding: 1rem;

  box-sizing: border-box;
  height: calc(100vh - 5rem); 
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  background-color: #c7d0ff;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: ${(props: { isActive: boolean }) =>
      props.isActive ? "#000000" : "#666666"};;

  transition: 0.15s ease color;

  &:hover {
    color: #000066;
  }
`;

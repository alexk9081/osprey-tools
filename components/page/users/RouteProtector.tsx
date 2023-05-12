import { UserContext } from "@/components/layout/LoginContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Head from "next/head";
import { UserAuthContext } from "@/components/layout/UserAuthContext";
import styled, { keyframes } from "styled-components";
import { colors } from "@/styles/styleConstants";

export default function RouteProtector({
  pageName,
  isInverse,
  children,
}: {
  pageName: string;
  isInverse?: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { userAuth } = useContext(UserAuthContext);

  // Disallow logged in user from registering
  useEffect(() => {
    if (isInverse ? !userAuth : userAuth) {
      router.push("/");
    }
  }, [userAuth, router]);

  if (isInverse ? !userAuth : userAuth) {
    return (
      <>
        <Head>
          <title>{pageName}</title>
        </Head>
        <MainContent>
          <LoadingIcon />
          <LoadingMessage>Loading...</LoadingMessage>
        </MainContent>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{pageName}</title>
        </Head>
        {children}
      </>
    );
  }
}

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid ${colors.unfBlueLight}; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;

  animation: ${spin} 2s linear infinite;
`;

const LoadingMessage = styled.div`
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 2rem;
`;
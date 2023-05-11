import React, { useContext } from "react";
import styled from "styled-components";
import RegisterButton from "@/components/page/users/ChangePageButton";
import Image from "next/image";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { Store } from "react-notifications-component";
import { useRouter } from "next/router";
import { UserContext } from "@/components/layout/LoginContext";

export default function Services({ page }: { page?: string }) {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  function signInWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        // On register success
        const user = userCredential.user;

        setUser({
          imageUrl: user.photoURL ?? "",
          name: user.displayName ?? "Unknown User",
          nNumber: "",
        });

        router.push("/");
      })
      .catch((error) => {});
  }

  function signInWithFacebook() {
    signInWithPopup(auth, facebookProvider)
      .then((userCredential) => {
        // On register success
        const user = userCredential.user;

        setUser({
          imageUrl: user.photoURL ?? "",
          name: user.displayName ?? "Unknown User",
          nNumber: "",
        });

        router.push("/");
      })
      .catch((error) => {});
  }

  return (
    <ServicesWrapper>
      <ServiceLogin onClick={signInWithGoogle}>
        <Logo>
          <Image
            src={
              "https://files.unfospreytools.com/file/Osprey-Productivity-Tools/google.png"
            }
            alt=""
            width={32}
            height={32}
          />
        </Logo>

        <LoginText color="#4285F4">Sign in with Google</LoginText>
      </ServiceLogin>
      <ServiceLogin onClick={signInWithFacebook}>
        <Logo>
          <Image
            src={
              "https://files.unfospreytools.com/file/Osprey-Productivity-Tools/facebook.png"
            }
            alt=""
            width={32}
            height={32}
          />
        </Logo>

        <LoginText color="#4267B2">Sign in with Facebook</LoginText>
      </ServiceLogin>

      {page != "login" ? (
        <>
          <LoginMessage>Already have an account?</LoginMessage>
          <RegisterButton href="/users/login">Login</RegisterButton>
        </>
      ) : (
        <>
          <LoginMessage>Dont have an account?</LoginMessage>
          <RegisterButton href="/users/register">Register</RegisterButton>
        </>
      )}
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.div`
  background-color: #eee;
  padding: 1rem 2rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  border: 2px solid #e8e8e8;

  margin: 1rem;
`;

const ServiceLogin = styled.button`
  display: grid;
  grid-template-columns: 20% 80%;

  font-family: inherit;

  padding: 0;
  margin: 0.5rem 0;
  border: 1px solid #ccc;

  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.5rem;
`;

const LoginText = styled.div`
  background-color: ${(props) => props.color || "#555"};
  color: white;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  font-weight: 600;

  padding: 0.5rem;

  box-sizing: border-box;
`;

const LoginMessage = styled.div`
  margin: 1rem 0 0.5rem 0;
`;

import Form from "@/components/page/users/Form";
import FormTitle from "@/components/page/users/FormTitle";
import InputName from "@/components/page/users/InputName";
import StyledInput from "@/components/page/users/StyledInput";
import SubmitButton from "@/components/page/users/SubmitButton";
import { colors } from "@/styles/styleConstants";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MailFast } from "tabler-icons-react";

export default function Page() {
  const [resetSent, setResetSent] = useState(false);
  const auth = getAuth();
  type InputType = {
    email: string;
  };

  const {
    register,
    handleSubmit,
  } = useForm<InputType>();

  function onSubmit(data: InputType) {
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        setResetSent(true);
      })
      .catch(() => {});
  }

  return (
    <>
      <Head>
        <title>Forgot Password | UNF App</title>
      </Head>
      <MainContent>
        <Hero></Hero>

        {resetSent ? (
          <>
            <MailFast size="30vh" strokeWidth={1} />
            <SentMessage>Password reset email has sent</SentMessage>
            <SentSubMessage>
              Please wait at least a few minutes to recieve the email
            </SentSubMessage>
            <HomePageLink href="/">Return to Home</HomePageLink>
          </>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Forgot Password</FormTitle>

            <InputName>Enter your email</InputName>
            <StyledInput
              placeholder="Example@domain.com"
              type="email"
              {...register("email", {
                required: true,
              })}
            />

            <br />

            <SubmitButton type="submit" value="Submit" />
          </Form>
        )}
      </MainContent>
    </>
  );
}

const Hero = styled.div`
  height: 5rem;
  background-color: transparent;
`;

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SentMessage = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const SentSubMessage = styled.div`
  font-size: 1rem;
`;

const HomePageLink = styled(Link)`
  margin-top: 2rem;
  border-bottom: 1px solid ${colors.unfBlue};

  text-decoration: none;
  color: ${colors.unfBlueLight};
  font-weight: 600;
  
  cursor: pointer;
`;

import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Link from "next/link";
import { UserContext } from "@/components/layout/LoginContext";
import { useRouter } from "next/router";

type Inputs = {
  nNumber: string;
  name: string;
  imageUrl: string;
};

export default function Users() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { user, setUser } = useContext(UserContext);

  function onSubmit(data: Inputs): void {
    console.log(data);

    setUser({imageUrl: "", name: "Alex Keo", nNumber: "n01450313"});

    // if (isValid) {
    //   router.push(`/notecards/packs/${userInfo.name}/${fauxData.packName}`);
    // }
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Login User | UNF App</title>
      </Head>
      <ContentLayout>
        <Hero></Hero>

        <RegisterElement onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Login</FormTitle>
          <InputName>Username</InputName>
          <StyledInput
            placeholder="John Doe"
            {...register("name", {
              required: true,
              pattern: /^[\w\s]{1,20}$/i,
            })}
          />
          {errors.name && (
            <ErrorMessage>Alphanumeric characters only</ErrorMessage>
          )}

          <br />

          <InputName>N-Number</InputName>
          <StyledInput
            placeholder="n01234567"
            {...register("nNumber", {
              required: true,
              pattern: /^[nN][0-9]{8}$/i,
            })}
          />
          {errors.nNumber && <ErrorMessage>Invalid n-number</ErrorMessage>}

          <br />

          <Buttons>
            <SubmitButton type="submit" value="Login" />
            <RegisterButton href="/users/create">Register</RegisterButton>
          </Buttons>
        </RegisterElement>
      </ContentLayout>
    </>
  );
}

const RegisterButton = styled(Link)`
  all: unset;
  background-color: #2d2d2d;
  color: white;
  padding: 0.75rem;
  font-weight: 600;

  width: max-content;

  cursor: pointer;

  &:focus {
    outline: 1px solid blue;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: #c30000;
  font-weight: 600;
  margin: 0.25rem 0;
`;

const FormTitle = styled.div`
  color: black;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 800;
`;

const StyledInput = styled.input`
  width: 15rem;
`;

const InputName = styled.label`
  font-size: 1.25rem;
`;

const SubmitButton = styled.input`
  all: unset;
  background-color: #1c1cc1;
  color: white;
  padding: 0.75rem;
  font-weight: 600;

  width: max-content;

  cursor: pointer;

  &:focus {
    outline: 1px solid blue;
  }
`;

const Hero = styled.div`
  height: 5rem;
  background-color: white;
`;

const ContentLayout = styled.main`
  padding-top: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterElement = styled.form`
  background-color: #eee;
  padding: 3rem 2rem;
  padding-top: 1rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
`;

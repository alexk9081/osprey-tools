import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/components/layout/LoginContext";

type Inputs = {
  nNumber: string;
  name: string;
  imageUrl: string;
};

export default function Users() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { user, setUser } = useContext(UserContext);

  function onSubmit(data: Inputs): void {
    console.log(data);

    // if (isValid) {
    //   router.push(`/notecards/packs/${userInfo.name}/${fauxData.packName}`);
    // }
  }

  return (
    <>
      <Head>
        <title>Create User | UNF App</title>
      </Head>
      <ContentLayout>
        <Hero></Hero>

        <RegisterElement onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Register</FormTitle>
          <InputName>
            Username<RequiredStar>*</RequiredStar>
          </InputName>
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

          <InputName>
            N-Number<RequiredStar>*</RequiredStar>
          </InputName>
          <StyledInput
            placeholder="n01234567"
            {...register("nNumber", {
              required: true,
              pattern: /^[nN][0-9]{8}$/i,
            })}
          />
          {errors.nNumber && <ErrorMessage>Invalid n-number</ErrorMessage>}

          <br />

          <InputName>Profile Picture Url</InputName>
          <StyledInput
            placeholder="i.imgur.com/XtqOTWr"
            {...register("imageUrl", {
              required: false,
              pattern:
                /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
            })}
          />
          {errors.imageUrl && (
            <ErrorMessage>A valid url is required</ErrorMessage>
          )}

          <br />

          <RequiredMessage>*Required</RequiredMessage>

          <Buttons>
            <SubmitButton type="submit" value="Register" />
            <RegisterButton href="/users/login">Login</RegisterButton>
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

const RequiredStar = styled.span`
  color: #c30000;
`;

const RequiredMessage = styled.div`
  color: #c30000;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
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

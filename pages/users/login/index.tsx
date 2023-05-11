import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ErrorMessage from "@/components/page/users/Error";
import FormTitle from "@/components/page/users/FormTitle";
import Form from "@/components/page/users/Form";
import SubmitButton from "@/components/page/users/SubmitButton";
import StyledInput from "@/components/page/users/StyledInput";
import InputName from "@/components/page/users/InputName";
import RouteProtector from "@/components/page/users/RouteProtector";
import Services from "@/components/page/users/Services";
import PasswordField from "@/components/page/users/PasswordField";
import ShowPasswordButton from "@/components/page/users/ShowPasswordButton";
import { Eye, EyeOff } from "tabler-icons-react";
import { useState } from "react";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Store } from "react-notifications-component";

export default function Users() {
  const [passwordShown, setPasswordShown] = useState(false);
  const auth = getAuth();
  const router = useRouter();

  type InputType = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  function onSubmit(data: InputType) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        
        Store.addNotification({
          title: "Error",
          message: "Invalid email or password, ensure use of correct login service",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover: true,
            showIcon: true,
          },
        });
      });
  }

  return (
    <RouteProtector pageName="Login User | UNF App">
      <ContentLayout>
        <Hero></Hero>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Login</FormTitle>
          <InputName>Email</InputName>
          <StyledInput
            placeholder="Example@domain.com"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <ErrorMessage>Email is required</ErrorMessage>}

          <br />

          <InputName>Password</InputName>
          <PasswordField>
            <StyledInput
              placeholder="Password"
              type={passwordShown ? "text" : "password"}
              autoComplete="password"
              {...register("password", {
                required: true,
              })}
            />
            <ShowPasswordButton
              onClick={() => setPasswordShown((prev) => !prev)}
            >
              {passwordShown ? <Eye color="#444" /> : <EyeOff color="#444" />}
            </ShowPasswordButton>
          </PasswordField>
          <ForgotPassword href={"/users/login/forgot"}>
            Forgot password?
          </ForgotPassword>

          {errors.password && <ErrorMessage>Password is required</ErrorMessage>}

          <br />

          <SubmitButton type="submit" value="Login" />
        </Form>
        <Services page="login" />
      </ContentLayout>
    </RouteProtector>
  );
}

const ForgotPassword = styled(Link)`
  text-decoration: none;
  color: black;

  font-size: 0.8rem;
  margin: 0.1rem 0 0 0.25rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
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

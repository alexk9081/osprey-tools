import Services from "@/components/page/users/Services";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "@/components/layout/LoginContext";
import { useRouter } from "next/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import ErrorMessage from "@/components/page/users/Error";
import FormTitle from "@/components/page/users/FormTitle";
import Form from "@/components/page/users/Form";
import SubmitButton from "@/components/page/users/SubmitButton";
import StyledInput from "@/components/page/users/StyledInput";
import InputName from "@/components/page/users/InputName";
import RouteProtector from "@/components/page/users/RouteProtector";
import { Eye, EyeOff } from "tabler-icons-react";
import ShowPasswordButton from "@/components/page/users/ShowPasswordButton";
import PasswordField from "@/components/page/users/PasswordField";
import { Store } from "react-notifications-component";
import { FirebaseError } from "firebase/app";
import { UserAuthContext } from "@/components/layout/UserAuthContext";

export default function Users() {
  const { setUserAuth } = useContext(UserAuthContext);
  const auth = getAuth();
  const router = useRouter();

  const [passwordShown, setPasswordShown] = useState(false);

  // Form information
  type InputData = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>();

  // Form submission
  function onSubmit(data: InputData): void {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // On register success
        const user = userCredential.user;

        // Send email verification
        const emailVerificationPromise = sendEmailVerification(user);
        Store.addNotification({
          title: "Verify your email",
          message: `To use the app, you must verify your email`,
          type: "info",
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

        // Add user info
        const updatePromise = updateProfile(user, {
          displayName: data.displayName,
        }).catch((error) => {
          // On name addition error
          Store.addNotification({
            title: "Error",
            message: "Error updating diaplay name",
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

        // Redirect
        Promise.allSettled([emailVerificationPromise, updatePromise]).then(
          (res) => {
            // Change user state
            setUserAuth({ ...user, displayName: data.displayName });

            router.push("/");
          }
        );
      })
      .catch((error: FirebaseError) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/credential-already-in-use":
          case "auth/account-exists-with-different-credential":
          case "auth/email-already-in-use":
            Store.addNotification({
              title: "Error",
              message:
                "There already exists an account with that email address",
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
            break;

          default:
            Store.addNotification({
              title: "Error",
              message: "An error occured, plase try again",
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
            break;
        }
      });
  }

  return (
    <RouteProtector pageName="Create User | UNF App">
      <ContentLayout>
        <Hero></Hero>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Register</FormTitle>

          <InputName>Display name</InputName>
          <StyledInput
            placeholder="John Doe"
            {...register("displayName", {
              required: true,
              validate: (val: string) => {
                if (val.length < 3) {
                  console.log("Triggered");
                  return "Minimum 3 characters";
                }
                if (val.length > 30) {
                  return "Maximum 30 characters";
                }
                if (!/^[a-z0-9\s]{3,30}$/i.test(val)) {
                  return "Alphanumeric characters only";
                }
              },
            })}
          />
          {errors.displayName && (
            <ErrorMessage>
              {errors.displayName.message || "Name is required"}
            </ErrorMessage>
          )}

          <br />

          <InputName>Email</InputName>
          <StyledInput
            placeholder="example@gmail.com"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            type="email"
          />
          {errors.email && <ErrorMessage>Valid email required</ErrorMessage>}

          <br />

          <InputName>Password</InputName>
          <PasswordField>
            <StyledInput
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              type={passwordShown ? "text" : "password"}
              autoComplete="new-password"
            />
            <ShowPasswordButton
              onClick={() => setPasswordShown((prev) => !prev)}
            >
              {passwordShown ? <Eye color="#444" /> : <EyeOff color="#444" />}
            </ShowPasswordButton>
          </PasswordField>
          {errors.password && (
            <ErrorMessage>Minimum 6 characters long</ErrorMessage>
          )}

          <br />

          <InputName>Confirm Password</InputName>
          <StyledInput
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (val: string) => {
                if (!watch("password") || watch("password") != val) {
                  return "Your passwords do not match";
                }
              },
            })}
            type={passwordShown ? "text" : "password"}
            autoComplete="new-password"
          />
          {watch("password") != watch("confirmPassword") && (
            <ErrorMessage>Your passwords do not match</ErrorMessage>
          )}

          <br />

          <SubmitButton type="submit" value="Register" />
        </Form>
        <Services />
      </ContentLayout>
    </RouteProtector>
  );
}

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

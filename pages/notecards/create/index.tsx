import { colors, fonts } from "@/styles/styleConstants";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/components/layout/LoginContext";

import { Store } from "react-notifications-component";
import { NotecardSet } from "@/types/types";

export default function Create() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NotecardSet>();

  function onSubmit(data: NotecardSet): void {
    console.log(data);

    // const userInfo = { name: "Wall-E", image: "www.image.com/image.jpg" };
    // console.log(data);
    // console.log(userInfo);

    // const isValid = true;
    // const fauxData = { packName: "softwareEngineering" };

    // if (isValid) {
    //   router.push(`/notecards/packs/${userInfo.name}/${fauxData.packName}`);
    // }
  }

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      Store.addNotification({
        title: "User Not Logged In",
        message: "Log in to create notecards packs",
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

      router.push("/users/create");
    }
  }, [user]);

  if (user) {
    return (
      <>
        <Head>
          <title>Create Notecard Pack | UNF App</title>
        </Head>
        <main>
          <Hero></Hero>

          <FormTitle>Create Notecard</FormTitle>

          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <InputName>Display Title</InputName>
            <StyledInput
              placeholder="Display Title"
              {...register("name", {
                required: true,
                pattern: /^[\w]{3,30}$/i,
              })}
            />
            {errors.name && <ErrorMessage>This field is required</ErrorMessage>}

            <InputName>Description</InputName>
            <StyledTextArea
              placeholder="Description"
              {...register("description", { pattern: /^[\w]{0,300}$/i })}
            />
            {errors.description && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}

            <InputName>Public</InputName>
            <input type="checkbox" value="Public" {...register("isPublic")} />

            <InputName>Set Name</InputName>
            <StyledInput
              placeholder="Set Name"
              {...register("id", {
                required: true,
                pattern: /^[\w]{3,30}$/i,
              })}
            />
            {errors.id && <ErrorMessage>This field is required</ErrorMessage>}

            <SubmitButton type="submit" />
          </CustomForm>
        </main>
      </>
    );
  } else {
    return (
      <Head>
        <title>Create Notecard Pack | UNF App</title>
      </Head>
    );
  }
}

const FormTitle = styled.div`
  font-size: 2.25rem;
  font-weight: 800;

  color: ${colors.unfBlueWhite};
  background-color: ${colors.unfBlue};

  padding: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputName = styled.label`
  font-size: 1.25rem;
`;

const StyledTextArea = styled.textarea`
  border-radius: 1rem;
  padding: 0.5rem;

  font-size: 1rem;
  font-family: ${fonts.sansSerifMain};
  font-weight: 600;

  border: 2px solid ${colors.unfBlue};

  resize: vertical;
`;

const StyledInput = styled.input`
  border-radius: 1rem;
  padding: 0.5rem;

  font-size: 1rem;
  font-family: ${fonts.sansSerifMain};
  font-weight: 600;
  
  border: 2px solid ${colors.unfBlue};
`;

const ErrorMessage = styled.div`
  color: #c30000;
  font-weight: 600;
  margin: 0.25rem 0;
`;

const Hero = styled.div`
  height: 5rem;
  background-color: white;
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem 3rem;
`;

const SubmitButton = styled.input`
  flex-grow: 0;
  width: max-content;
`;

import { colors } from "@/styles/styleConstants";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/components/layout/LoginContext";

import { Store } from 'react-notifications-component';

type Inputs = {
  title: string;
  desc: string;
};

export default function Create() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs): void {
    const userInfo = { name: "Wall-E", image: "www.image.com/image.jpg" };
    console.log(data);
    console.log(userInfo);

    const isValid = true;
    const fauxData = { packName: "softwareEngineering" };

    if (isValid) {
      router.push(`/notecards/packs/${userInfo.name}/${fauxData.packName}`);
    }
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
        }
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

          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Title"
              {...register("title", {
                required: true,
                pattern: /^[\w]{3,30}$/i,
              })}
            />
            {errors.title && <span>This field is required</span>}
            <input
              placeholder="Description"
              {...register("desc", { pattern: /^[\w]{0,300}$/i })}
            />
            {errors.desc && <span>This field is required</span>}

            {/* <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}

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

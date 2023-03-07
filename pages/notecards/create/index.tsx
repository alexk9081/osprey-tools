import { colors } from "@/styles/styleConstants";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
  firstName: string;
  lastName: string;
  age: number;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <SubmitButton type="submit" />

          {errors.firstName && <span>This field is required</span>}
          {errors.lastName && <span>This field is required</span>}
          {errors.age && <span>This field is required</span>}


          {watch("firstName")}
        </CustomForm>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 40vh;
  background-color: ${colors.unfBlueWhite};
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
import { colors } from "@/styles/styleConstants";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRouter } from 'next/router'

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

  /**
   * Sends post requst to the database then reroutes user to the newly created pack
   * 
   * @param data Data from input fields in the form
   */
  function onSubmit(data: Inputs): void {
    const userInfo = { name: "Wall-E", image: "www.image.com/image.jpg" };
    console.log(data);
    console.log(userInfo);

    const isValid = true;
    const fauxData = {packName: "softwareEngineering"}

    if(isValid){
      router.push(`/notecards/packs/${userInfo.name}/${fauxData.packName}`)
    }
  }

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
            {...register("title", { required: true, pattern: /^[\w]{3,30}$/i })}
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
}

const Hero = styled.div`
  height: 5rem;
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

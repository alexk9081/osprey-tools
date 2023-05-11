import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserAuthContext } from "@/components/layout/UserAuthContext";
import RouteProtector from "@/components/page/users/RouteProtector";

export default function EditUser() {
  type InputType = {
    name: string;
    imageUrl: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const { userAuth } = useContext(UserAuthContext);

  const [userInfo, setUserInfo] = useState<any>(userAuth);

  function onSubmit(data: InputType): void {}

  return (
    <RouteProtector isInverse pageName="Edit User | UNF App">
      <ContentLayout>
        <Hero></Hero>

        <RegisterElement onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Edit User</FormTitle>
          <InputName>Username</InputName>
          <StyledInput
            placeholder="John Doe"
            {...register("name", {
              required: true,
            })}
            value={userInfo?.displayName ?? ""}
            onChange={(evt) =>
              setUserInfo({ ...userInfo, displayName: evt.target.value })
            }
          />
          {errors.name && (
            <ErrorMessage>Alphanumeric characters only</ErrorMessage>
          )}

          <br />

          <InputName>Profile Picture Url</InputName>
          <StyledInput
            placeholder="i.imgur.com/XtqOTWr"
            {...register("imageUrl", {
              required: false,
              maxLength: 150,
            })}
            value={userInfo?.photoURL ?? ""}
            onChange={(evt) =>
              setUserInfo({ ...userInfo, imageUrl: evt.target.value })
            }
          />
          {errors.imageUrl && (
            <ErrorMessage>
              A valid url is required, max characters: 150
            </ErrorMessage>
          )}

          <br />

          <Buttons>
            <SubmitButton
              disabled={
                userAuth?.displayName === userInfo?.displayName &&
                userAuth?.photoURL === userInfo?.photoURL
              }
              type="submit"
              value="Save"
            />
          </Buttons>
        </RegisterElement>
      </ContentLayout>
    </RouteProtector>
  );
}

const Buttons = styled.div`
  display: flex;
  justify-content: center;
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

  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.25rem;
  margin: 0.25rem 0;

  border: 2px solid #ccc;
  border-radius: 6px;
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

  border: 2px solid #13139a;

  &:focus {
    outline: 1px solid blue;
  }

  &:disabled {
    background-color: #8181e8;
    border: 2px solid #7272ce;
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

  border: 2px solid #e8e8e8;
`;

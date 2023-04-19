import NotecardLayout from "@/components/layout/notecards/layout";
import { colors } from "@/styles/styleConstants";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function EditCardsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <Head>
        <title>Edit Notecards | Alex Keo</title>
      </Head>
      <main>
        <Banner>Edit Notecards</Banner>
        <NotecardsGrid>
          <FieldTitles />
          <NotecardEdit />
          <NotecardEdit />
          <NotecardNew />
        </NotecardsGrid>
      </main>
    </>
  );
}

EditCardsPage.getLayout = function getLayout(page: any) {
  return <NotecardLayout>{page}</NotecardLayout>;
};

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  font-size: 2rem;
  font-weight: 600;

  background-color: #bbb;
  color: ${colors.unfBlue};
`;

const NotecardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4rem 4rem;
  grid-template-rows: 4rem;

  height: calc(100vh - 5rem - 4rem - 2rem);
  width: 100%;

  overflow-y: scroll;
`;

function NotecardEdit() {
  return (
    <>
      <InputField />
      <InputField />
      <SaveButton>Save</SaveButton>
      <DeleteButton>Delete</DeleteButton>
    </>
  );
}

function NotecardNew() {
  return (
    <>
      <InputField />
      <InputField />
      <SaveButton>Add</SaveButton>
      <DeleteButton>-</DeleteButton>
    </>
  );
}

const InputField = styled.textarea`
  padding: 0.5rem;
  font-family: inherit;
  font-size: 1rem;

  resize: vertical;

  min-height: 2rem;
`;

const SaveButton = styled.button`
  color: green;
  font-weight: 600;
`;

const DeleteButton = styled.button`
  color: red;
  font-weight: 600;
`;

function FieldTitles() {
  return (
    <>
      <InputFieldTitle>Question</InputFieldTitle>
      <InputFieldTitle>Answer</InputFieldTitle>
      <ButtonTitle>Save</ButtonTitle>
      <ButtonTitle>Delete</ButtonTitle>
    </>
  );
}

const InputFieldTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 2rem;
  padding: 0.5rem 0;

  border: 1px solid black;

  background-color: #ddd;
`;

const ButtonTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 1.25rem;
  padding: 0.5rem 0;

  border: 1px solid black;
  background-color: #ddd;
`;

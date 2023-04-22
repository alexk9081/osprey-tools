import { UserContext } from "@/components/layout/LoginContext";
import { NotecardSetContext } from "@/components/layout/notecards/NotecardSetContext";
import NotecardLayout from "@/components/layout/notecards/layout";
import FieldTitles from "@/components/page/notecards/edit/FieldTitles";
import NotecardEdit from "@/components/page/notecards/edit/NotecardEdit";
import NotecardNew from "@/components/page/notecards/edit/NotecardNew";
import { colors } from "@/styles/styleConstants";
import { Notecard } from "@/values/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import styled from "styled-components";

export default function EditCardsPage() {
  const { notecardSet, setNotecardSet } = useContext(NotecardSetContext);
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user || user.nNumber != notecardSet.creator.nNumber) {
      router.push(
        `/notecards`
      );
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Edit Notecards | Alex Keo</title>
      </Head>
      <main>
        <Banner>Edit Notecards</Banner>
        <NotecardsElements>
          <FieldTitles />
          {notecardSet.notecards?.map((notecard: Notecard) => (
            <NotecardEdit notecard={notecard} key={notecard.noteid} />
          ))}
          <NotecardNew />
        </NotecardsElements>
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

const NotecardsElements = styled.div`
  height: calc(100vh - 5rem - 4rem - 2rem);
  width: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9ba5a9;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    &:hover {
      background-color: #5c6568;
    }
  }
`;
import { NotecardSetContext } from "@/components/layout/notecards/NotecardSetContext";
import NotecardLayout from "@/components/layout/notecards/layout";
import { useContext } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function NotecardsOverviewPage() {
  const { notecardSet, setNotecardSet } = useContext(NotecardSetContext);

  return (
    <>
      <Head>
        <title>Notecards Overview | Alex Keo</title>
      </Head>
      <main>
        {/* <PackTitle>Notecard pack by {name}</PackTitle> */}
        <GridHolder>
          <StickyElement>
            <ColumnTitle>Question</ColumnTitle>
            <ColumnTitle>Answer</ColumnTitle>
          </StickyElement>
          <CardGrid>
            {/* {cards.map((card) => (
              <>
                <GridElement>
                  <QuestionElement>{card.question}</QuestionElement>
                  <AnswerElement>{card.answer}</AnswerElement>
                </GridElement>
                <HorizontalRule />
              </>
            ))} */}
          </CardGrid>
        </GridHolder>
      </main>
    </>
  );
}

const ColumnTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.75rem;
  font-weight: 700;
`;

const HorizontalRule = styled.hr`
  margin: 0 2rem;
`;

const GridHolder = styled.div`
  position: relative;
  padding-top: 4rem;
`;

const GridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StickyElement = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;

  box-sizing: border-box;

  padding-right: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: 4rem;

  width: 100%;
  color: white;
  background-color: #666;
`;

const QuestionElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 600;

  border-right: 1px solid black;
`;

const AnswerElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 600;
`;

const CardGrid = styled.div`
  height: calc(100vh - 5rem - 15rem - 4rem);
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

const PackTitle = styled.div`
  height: 15rem;
  background-color: #555566;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 2rem;
`;

NotecardsOverviewPage.getLayout = function getLayout(page: any) {
  return <NotecardLayout>{page}</NotecardLayout>;
};
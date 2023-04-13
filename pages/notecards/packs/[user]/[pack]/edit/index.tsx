import NotecardLayout from "@/components/layout/notecards/layout";
import Head from "next/head";
import styled from "styled-components";

export default function EditCardsPage() {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 90vh;
  background-color: white;
`;

EditCardsPage.getLayout = function getLayout(page:any) {
  return <NotecardLayout>{page}</NotecardLayout>;
};


function EditCards() {
  return (
    <div>
      {/* <div>
        <div>Edit notecards</div>
        <div>
          <div>
            {cards.map((card) => (
              <EditCard
                key={card.question}
                question={card.question}
                answer={card.answer}
              />
            ))}
            <EditCard question="" answer="" />
          </div>
        </div>
      </div> */}
    </div>
  );
}



function EditCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <input value={question} placeholder="Question" />
      <input value={answer} placeholder="Answer" />
      <input type="submit" />
      <button>Delete</button>
    </div>
  );
}
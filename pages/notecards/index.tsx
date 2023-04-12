import Hero from "@/components/page/notecards/Hero";
import Pack from "@/components/page/notecards/Pack";
import data from "@/temp/notecardPacksData";
import Head from "next/head";
import styled from "styled-components";

export default function NoteCardsPage() {
  return (
    <>
      <Head>
        <title>Notecards | UNF App</title>
      </Head>
      <main>
        <Hero />
        
        <CardSection title="Your Notecards">
          {data.slice(1, 2).map((cardCollection: any) => (
            <Pack
              title={cardCollection.title}
              desc={cardCollection.desc}
              img={cardCollection.img}
              link={cardCollection.link}
              creator={cardCollection.creator}
              key={cardCollection.creator.name + cardCollection.title}
            />
          ))}
          <Pack
            title="Add new collection"
            desc="Create your own note card collection"
            img="https://cdn-icons-png.flaticon.com/512/32/32339.png"
            link="/notecards/create"
            creator={{
              img: "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png",
              name: "Current User",
            }}
          />
        </CardSection>


        <CardSection title="Public Notecards">
          {data.map((cardCollection: any) => (
            <Pack
              title={cardCollection.title}
              desc={cardCollection.desc}
              img={cardCollection.img}
              link={cardCollection.link}
              creator={cardCollection.creator}
              key={cardCollection.creator.name + cardCollection.title}
            />
          ))}
        </CardSection>
      </main>
    </>
  );
}

function CardSection({ title, children }: { title: string; children: any }) {
  return (
    <SectionSet>
      <SectionName>
        {title}
        </SectionName>
    <NoteCardCollections>{children}</NoteCardCollections>
    </SectionSet>
  );
}

const SectionSet = styled.fieldset`
  margin: 3rem 2rem;
  padding: 1rem;

  border-radius: 2rem;
`;

const SectionName = styled.legend`
  font-weight: 600;
  font-size: 1.5rem;

  margin-left: 1rem;
  padding: 0 0.5rem;
`;

const NoteCardCollections = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: 2rem;
`;

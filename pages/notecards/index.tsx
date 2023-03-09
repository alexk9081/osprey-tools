import Pack from "@/components/page/notecards/Pack";
import { colors } from "@/styles/styleConstants";
import Head from "next/head";
import styled from "styled-components";

export default function NoteCardsPage() {
  const data = [
    {
      title: "Software Engineering",
      desc: "Study scrum concepts, unit testing, and how to break production",
      img: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "/notecards/packs/Wall-E/softwareEngineering",
      creator: {
        img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Wall-E",
      },
    },
    {
      title: "Construction of Language Transistors",
      desc: "Figure out how to make a compiler on your own",
      img: "https://images.unsplash.com/photo-1629706167922-f7d29bb50450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "/notecards/packs/Gradma/languageTransistors",
      creator: {
        img: "https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        name: "Gradma",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Notecards | UNF App</title>
      </Head>
      <main>
        <Hero>
          Put highlighted note card packs here or a call to action to make a new
          notecard pack
        </Hero>
        
        <CardSection title="Personal Packs">
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

        <SectionBreak />

        <CardSection title="Public Packs">
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

const Hero = styled.div`
  height: 40vh;
  background-color: ${colors.unfBlueWhite};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionBreak = styled.hr`
  margin: 0 4rem;
`;

function CardSection({ title, children }: { title: string; children: any }) {
  return (
    <CardSectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <NoteCardCollections>{children}</NoteCardCollections>
    </CardSectionWrapper>
  );
}

const CardSectionWrapper = styled.div`
  margin: 4rem 2rem;
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  margin-bottom: 1rem;
`;

const NoteCardCollections = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: 2rem;
`;

import Head from "next/head";
import styled from "styled-components";

export default function NoteCardsPage() {
  const data = [
    {
      title: "Software Engineering",
      desc: "Study scrum concepts, unit testing, and how to break production",
      img: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      creator: {
        img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Wall-E",
      },
    },
    {
      title: "Construction of Language Transistors",
      desc: "Figure out how to make a compiler on your own, idiot",
      img: "https://images.unsplash.com/photo-1629706167922-f7d29bb50450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      creator: {
        img: "https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        name: "Gradma",
      },
    },
    {
      title: "System Software",
      desc: "Sicxe, I guess",
      img: "https://images.unsplash.com/photo-1620247405684-8352d6d7ce09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      creator: {
        img: "https://preview.redd.it/pd2t6gxw9gf01.jpg?auto=webp&s=9e6a74d6d6da1375a29c36127285d6590888da44",
        name: "&̶̛̮̪̺̬̅̔̅̍͗̏̿́̑͐̽͗͝Î̷̧͖̙͔̰̟̰̻͇̗̔ͅ*̸̖͕͖̱̳̻͎̖̭̆̏̂̅̊̆̄͐̉̿̔̃̕^̸̥͎̗͓̪̰̩̖͕͚̮̯͍̒̀͑͑̀͜͝ͅo̵̟̳͙͎͕̙͗̈̉̚h̷̨̧̙̱̤̱̣͓͔͎̙̭̺̭͉͗b̶̜͇̤̤̬̙͚̗̌̊̔2̷̳̤̫̟̖͛̉̽u̵̧̧̝͇̥̺͉̒͋͋̊̋̈́̉̽^̶̤̘̗̼̩̗̻̐4̶̢̛͓̜͇̞̦̼̲͌́̾̾͐͌̉͐̅̔̅̓Ņ̷͇̬̞͕͕̮̞̭͚̣͇͕̣͓͋̔",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Notecards | UNF App</title>
      </Head>
      <main>
        <Hero></Hero>

        <NoteCardCollections>
          {data.map((cardCollection) => (
            <Collection
              title={cardCollection.title}
              desc={cardCollection.desc}
              img={cardCollection.img}
              creator={cardCollection.creator}
              key={cardCollection.creator.name + cardCollection.title}
            />
          ))}
          <Collection
            title="Add new collection"
            desc="Create your own note card collection"
            img="https://cdn-icons-png.flaticon.com/512/32/32339.png"
            creator={{
              img: "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png",
              name: "Current User",
            }}
          />
        </NoteCardCollections>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 40vh;
  background-color: #eee;
`;

const NoteCardCollections = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 4rem 1rem;
`;

function Collection({
  title,
  desc,
  img,
  creator,
}: {
  title: string;
  desc: string;
  img: string;
  creator: { img: string; name: string };
}) {
  return (
    <>
      <CollectionWrapper>
        <Image src={img} alt="" />
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Creator>
          <CreatorImg src={creator.img} alt="" />
          <CreatorName>{creator.name}</CreatorName>
        </Creator>
      </CollectionWrapper>
    </>
  );
}

const CollectionWrapper = styled.div`
  width: 300px;

  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 1rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.25rem 0;
`;

const Description = styled.div`
  line-height: 1rem;
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin-top: 1rem;
`;

const CreatorImg = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  object-fit: cover;
`;

const CreatorName = styled.span`
  font-size: 1.1rem;
`;

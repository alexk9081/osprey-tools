import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import data, { userType } from "@/temp/userData";

export default function Users() {
  return (
    <>
      <Head>
        <title>OPT</title>
      </Head>
      <main>
        <Hero></Hero>

        <div>
          <Title>List of users</Title>
          <UsersList>
            {data.map((user) => (
              <User name={user.name} img={user.img} key={user.name}/>
            ))}
          </UsersList>
        </div>

        <Link href="users/create">Create user</Link>
      </main>
    </>
  );
}

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;

const UsersList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  margin: 1rem;

  justify-items: center;
  align-items: center;
`;

const Hero = styled.div`
  height: 5rem;
  background-color: white;
`;

function User({ name, img }: userType) {
  return (
    <UserWrapper>
      <Image src={img} />
      <Name>{name}</Name>
    </UserWrapper>
  );
}

const UserWrapper = styled.div`
  background-color: #f8f8f8;

  padding: 1rem;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;

  object-fit: cover;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

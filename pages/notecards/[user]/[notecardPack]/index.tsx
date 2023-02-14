import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import NoteCard from "@/components/resuseable/NoteCard";

const Hero = styled.div`
  height: 40vh;
  background-color: wheat;
`;

export default function Pack() {
  const router = useRouter();
  const { user, notecardPack } = router.query;

  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        <Hero></Hero>
        <div>
          Notecard pack <b>{notecardPack}</b> by <b>{user}</b>
        </div>
        <NoteCard question="Test Question?" answer="Test Answer" />
      </main>
    </>
  );
}

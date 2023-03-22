import Head from "next/head";
import styled from "styled-components";

export default function Users() {
  return (
    <>
      <Head>
        <title>OPT</title>
      </Head>
      <main>
        <Hero></Hero>

        <form>
          <label>Username</label>
          <input type="text" />
          <br />
          <label>Image</label>
          <input type="text" />
          <br />
          <input type="submit" />
        </form>
      </main>
    </>
  );
}

const Hero = styled.div`
  height: 5rem;
  background-color: white;
`;
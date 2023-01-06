import Head from "next/head";
import styled from "styled-components";
import { LinkedinLogo } from "../components/LinkedinLogo";

const StyledMainContentArea = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #ce4b29;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 2rem;

  svg {
    margin-top: 4rem;
    width: 4rem;
    height: 4rem;
    fill: #f4f1de;

    :hover {
      fill: #0077b5;
    }
  }
`;

const StyledP = styled.p`
  margin-top: 2rem;
  width: 70%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Troy Budd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMainContentArea>
        <h1>Troy Budd</h1>
        <StyledP>
          Forward-thinking Software Engineer & Mentor with a background working
          productively in dynamic environments. Fluent in TypeScript and React
          and have found a real passion for being part of the full product
          lifecycle. Proud team player focused on achieving project objectives
          with speed and accuracy.
          <br />
          <br />I am currently at{" "}
          <a
            href="https://www.infogrid.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            InfoGrid
          </a>{" "}
          working on the Occupancy team delivering smart solutions based around
          building Occupancy. I am also a Mentor for{" "}
          <a
            href="https://academy.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            academy.tech
          </a>{" "}
          mentoring early stage juniors who have just been placed into new roles
          <br />
          <br />
          Based in London, I enjoy all things Climbing, Tech, Adventure.
        </StyledP>
        <a
          href="https://www.linkedin.com/in/troybudd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo />
        </a>
      </StyledMainContentArea>
    </>
  );
}

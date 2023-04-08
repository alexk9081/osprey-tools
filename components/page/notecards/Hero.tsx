import { colors } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";
import Button from "@/components/resuseable/button";

export default function NotecardsHero() {
  return (
    <HeroWrapper>
      <Description>
        Put highlighted note card packs here or a call to action to make a new
        notecard pack
      </Description>

      <CreateLink href="/notecards/create">
      <Button isDark isMain>
        Create your own notecards!
      </Button>
      </CreateLink>

    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  height: 40vh;
  background-color: ${colors.unfBlueWhite};
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Description = styled.div`
  font-size: 1.25rem;
`;

const CreateLink = styled(Link)`
  text-decoration: none;
`;

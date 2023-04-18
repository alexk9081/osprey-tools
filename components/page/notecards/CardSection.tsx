import { screen } from "@/styles/styleConstants";
import styled from "styled-components";

export default function CardSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: any;
}) {
  return (
    <SectionSet>
      <SectionName>{title}</SectionName>
      <SectionDescription>{description}</SectionDescription>
      <PackList>{children}</PackList>
    </SectionSet>
  );
}

const SectionSet = styled.div`
  margin: 3rem 3rem;
  border-radius: 2rem;
`;

const SectionName = styled.div`
  font-weight: 600;
  font-size: 2.5rem;

  @media (max-width: ${screen.mobile}) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.div`
  font-size: 1rem;
  @media (max-width: ${screen.mobile}) {
    font-size: 0.9rem;
  }
`;

const PackList = styled.div`
  margin-top: 2rem;
`;

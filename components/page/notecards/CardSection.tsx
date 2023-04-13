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
  font-weight: 800;
  font-size: 2.5rem;
`;

const SectionDescription = styled.div`
  font-size: 1rem;
`;

const PackList = styled.div`
  margin-top: 2rem;
`;

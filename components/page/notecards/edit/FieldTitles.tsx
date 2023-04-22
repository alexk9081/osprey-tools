import styled from "styled-components";

export default function FieldTitles() {
  return (
    <FieldTitlesWrapper>
      <InputFieldTitle style={{borderRight: "1px solid #ccc"}}>Question</InputFieldTitle>
      <InputFieldTitle style={{borderLeft: "1px solid #ccc"}}>Answer</InputFieldTitle>
    </FieldTitlesWrapper>
  );
}

const FieldTitlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 0 0.5rem;

  border: 2px solid #aaa;
`;

const InputFieldTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 2rem;
  padding: 0.5rem 0;

  background-color: #ddd;
`;

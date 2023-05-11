import styled from "styled-components";

const SubmitButton = styled.input`
  all: unset;
  background-color: #1c1cc1;
  color: white;
  padding: 0.75rem;
  font-weight: 600;

  width: max-content;

  cursor: pointer;

  margin: 0 auto;

  &:focus {
    outline: 1px solid blue;
  }
`;

export default SubmitButton
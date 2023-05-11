import styled from "styled-components";

const ShowPasswordButton = styled.div`
  height: max-content;
  margin-left: -2.25rem;

  display: flex;
  align-items: center;

  transition: 100ms ease background-color;

  cursor: pointer;

  svg {
    padding: 2px;
    border-radius: 50%;
    &:hover {
      background-color: #ddd;
    }
  }
`;

export default ShowPasswordButton;
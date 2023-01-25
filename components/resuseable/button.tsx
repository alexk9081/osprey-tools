import styled from "styled-components";
import { colors, fonts } from "@/styles/styleConstants";

export default styled.button`
  padding: 1rem;
  border: 4px solid
    ${(props: { isDark: boolean }) =>
      props.isDark ? colors.lightBlack : colors.darkWhite};

  font-size: 1rem;
  font-weight: 600;
  font-family: ${fonts.sansSerifMain};

  transition: 0.3s ease all;

  background-color: ${(props: { isMain: boolean; isDark: boolean }) => {
    if (!props.isMain) return "transparent";
    else return props.isDark ? colors.lightBlack : colors.darkWhite;
  }};

  color: ${(props: { isMain: boolean; isDark: boolean }) =>
    props.isMain != props.isDark ? colors.nearBlack : colors.nearWhite};

  &:hover {
    cursor: pointer;

    color: ${(props: { isDark: boolean }) =>
      props.isDark ? colors.nearWhite : colors.nearBlack};
    background-color: ${(props: { isDark: boolean }) =>
      props.isDark ? colors.nearBlack : colors.nearWhite};
    border: 4px solid
      ${(props: { isDark: boolean }) =>
        props.isDark ? colors.nearBlack : colors.nearWhite};
  }
`;

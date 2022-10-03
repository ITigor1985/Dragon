import styled from "@emotion/styled";
import { mediaTablet } from "../../functions";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 15px;
  color: white;
  background-color: black;

  ${mediaTablet(`
    grid-template-rows: none;
    grid-template-columns: repeat(2, 1fr);
    background-color: black;
    gap: 40px;
    padding: 20px;
  `)};
`;

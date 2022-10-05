import styled from "@emotion/styled";
import { mediaDesktop, mediaTablet } from "../../functions";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1);
  gap: 20px;
  padding: 10px;
  color: white;

  ${mediaTablet(`
    grid-template-rows: none;
    grid-template-columns: repeat(2, 1);
    
    gap: 40px;
    padding: 20px;
  `)};
  ${mediaDesktop(`
    grid-template-columns: repeat(2, 1fr);
  `)};
`;

export const WrapperDatails = styled.div`
  * {
    margin-bottom: 10px;
    ${mediaTablet(`
    margin-bottom: 15px;
    font-size:16px;
  `)};
    ${mediaDesktop(`
    margin-bottom: 20px;
    font-size:20px;
  `)};
  }
`;

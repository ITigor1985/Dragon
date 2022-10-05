import styled from "@emotion/styled";
import { mediaTablet } from "../../functions";

export const WrapperDragonsList = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  ${mediaTablet(`
    padding: 20px;
    font-size: 24px;
  `)};
`;
export const ImgWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

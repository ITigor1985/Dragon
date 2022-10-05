import styled from "@emotion/styled";

import { mediaTablet, mediaDesktop } from "../../functions/media";

export const ContainerBody = styled.div`
  min-width: 320px;
  margin: 0 auto;
  max-width: 420px;

  ${mediaTablet(`min-width: 768px;
  
  
  `)}

  ${mediaDesktop(`max-width: 1280px;
  padding: 0 16px;
  `)}
`;

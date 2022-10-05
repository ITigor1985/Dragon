import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mediaTablet } from "../../functions";

export const NavigationLink = styled(NavLink)`
  display: "inline-block";
  text-decoration: "none";
  padding: 12px;
  font-weight: 700;
  color: "white";
  font-size: 14px;

  &.active {
    color: #e84a5f;
  }

  ${mediaTablet(`max-width: 768px;
  padding: 12px 32px;
  font-size: 20px;
  
  `)}
`;

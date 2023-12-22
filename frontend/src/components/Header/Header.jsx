import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 40px;
  margin-right: 40px;
`;

const Header = ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>;
};

export default Header;

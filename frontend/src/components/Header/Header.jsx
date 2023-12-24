import React from "react";
import styled from "styled-components";
import person from "../../images/person.svg";
import place from "../../images/place.svg";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  height: 80px;
  box-shadow: 4px 4px 26px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 30px;
  padding-right: 30px;
`;

const HDrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 36px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const AppWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Images = styled.img`
  height: 28px;
  width: 28px;
  background-size: cover;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;

const ImagesLogo = styled.img`
  height: 42px;
  width: 42px;
  background-size: cover;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 12px;
  color: #18315f;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <StyledMenu>
      <Link to="/"><ImagesLogo src={Logo} /></Link>
      <HDrow>
        <Link to="/place">
          <AppWraper>
            <Images src={place} />
            <Text>Открытия</Text>
          </AppWraper>
        </Link>
        <Link to="/authorization">
          <AppWraper>
            <Images src={person} />
            <Text>Войти</Text>
          </AppWraper>
        </Link>
      </HDrow>
    </StyledMenu>
  );
};

export default Header;

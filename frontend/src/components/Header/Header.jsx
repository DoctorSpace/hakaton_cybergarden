import React from "react";
import styled from "styled-components";
import person from "../../images/person.svg"
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  height: 80px;
  box-shadow: 4px 4px 26px 0px rgba(0, 0, 0, 0.20);


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

  gap:20px;
`

const AppWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 12px;
`;

const Images = styled.img`
  height: 28px;
  width: 28px;
  background-size: cover;
  object-fit: cover;
`;

const Header = () => {
  return (
    <StyledMenu>
      <Link to="/">Куда?</Link>
      <HDrow>
        <Link to="/place">Интересные места</Link>
        <Link to="/authorization">
          <AppWraper>
            <Images src={person} />
            <p>Авторизоваться</p>
          </AppWraper>
        </Link>
      </HDrow>
    </StyledMenu>
  );
};

export default Header;

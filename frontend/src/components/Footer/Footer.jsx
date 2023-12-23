import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -4px -4px 26px 0px rgba(0, 0, 0, 0.20);

  padding: 0 30px 0 30px;
  height: 100px;
`;

const Footer = (props) => {

  return (
    <>
      <FooterInfo>
        <div>
          <h4>Нашли отличное место?</h4>
          <p>Добавьте его на карту</p>
        </div>

        {props.isAuth ? (
          <Link to="/create">Разместить место</Link>
        ) : (
          <Link to="/authorization">Разместить место</Link>
        )}
      </FooterInfo>
    </>
  );
};

export default Footer;

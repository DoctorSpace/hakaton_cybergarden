import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -4px -4px 26px 0px rgba(0, 0, 0, 0.2);

  padding: 0 30px 0 30px;
  height: 100px;
`;

const FontH4 = styled.h4`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const FontP = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const Footer = (props) => {
  return (
    <>
      <FooterInfo>
        <div>
          <FontH4>Нашли отличное место?</FontH4>
          <FontP>Добавьте его на карту</FontP>
        </div>

        {props.isAuth ? (
          <Link to="/create">
            <FontP>Разместить место</FontP>
          </Link>
        ) : (
          <Link to="/authorization">
            <FontP>Разместить место</FontP>
          </Link>
        )}
      </FooterInfo>
    </>
  );
};

export default Footer;

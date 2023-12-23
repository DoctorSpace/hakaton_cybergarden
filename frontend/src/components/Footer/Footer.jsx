import React from "react";
import styled from "styled-components";

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 30px 0 30px;
  height: 100px;
`;

const Footer = () => {
  return (
    <>
      <FooterInfo>
        <div>
          <h4>Нашли отличное место?</h4>
          <p>Добавьте его на карту</p>
        </div>

        <button>Разместить место</button>
      </FooterInfo>
    </>
  );
};

export default Footer;

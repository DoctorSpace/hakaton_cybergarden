import React from 'react';
import styled from "styled-components";

const styleBtn = styled.div`
    cursor: pointer;
    border: 0;
    background-color: #00ff48;
`;

const headerBtn = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default headerBtn;
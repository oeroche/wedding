import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-family: 'Mr De Haviland', cursive;
    font-size: 4em;
    text-align: center;
`;

const Img = styled.img`
    margin: auto;
`;

const SeparatorComponent = () => (
    <div style={{ textAlign: 'center' }}>
        <Img src="/logo.png" alt="logo" width="550px" />
    </div>
);

export default SeparatorComponent;

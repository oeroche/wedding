import react from 'react';
import styled, { keyframes } from 'styled-components';

const FadeInKeyframe = keyframes`
    0% {
        opacity: 0
    }
    80% {
        opacity: 0
    }
    100%{
        opacity: 1
    }
`;

const FadeIn = styled.div`
    animation: ${FadeInKeyframe} 800ms ease-in;
`;

export default FadeIn;

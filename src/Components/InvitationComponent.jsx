import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import styled, { keyframes, css } from 'styled-components';

const appear = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px) scale(1)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }

`;

const float = keyframes`
    0% {
        transform: translateY(0)
    }

    50%{
        transform: translateY(10px)
    }

    100% {
        transform: translateY(0)
    }
`;

const turn = keyframes`
    0%{
        transform: rotate3d(0,1,0,0deg) scale(1)
    }

    20% {
        transform: rotate3d(0,1,0,0deg) scale(1.1)
    }

    80%{
        transform: rotate3d(0,1,0,180deg) scale(1.1)
    }

    100% {
        transform: rotate3d(0,1,0,180deg) scale(1)
    }
`;

const glow = keyframes`
    0% {
        box-shadow: 1px 1px 20px #d2c8b3
    }

    20% {
        box-shadow: 1px 1px 50px #DCB33A
    }

    50% {
        box-shadow: 1px 1px 20px #d2c8b3
    }

    80% {
        box-shadow: 1px 1px 50px #DCB33A
    }

    100%{
        box-shadow: 1px 1px 20px #d2c8b3
    }
`;

// const up = keyframes`
//     0% {
//         transform: scale(1)
//     }

//     50% {
//         transform: scale(1.1)
//     }
//     100% {
//         transform: scale(1)
//     }
// `;

const animationStyle = css`
    animation: ${appear} 2000ms ease-in-out, ${float} 4000ms 2s ease-in-out infinite;
`;

const turnAround = css`
    animation: ${glow} 3s ease-in-out, ${turn} 3000ms 3s ease-in;
`;

const Invitation = styled.div`
    width: 500px;
    max-width: 90%;
    height: 80vh;
    border-radius: 40px;
    background-image: url('/bg.jpg');
    background-size: contain;
    margin: auto;
    margin-top: 50px;
    box-shadow: 1px 1px 20px #d2c8b3;
    border: 1px solid #dcb33a;
    transform: ${props => (props.isNavigation ? 'translateY(-75vh)' : 'none')};

    &.signup-enter {
        ${turnAround}
    }

    &.signup-enter-done {
        transform: rotate3d(0, 1, 0, 180deg);
    }

    &.signup-leave {
        ${turnAround}
    }
`;

const InvitationComponent = ({ initialState } = { initialState: 'WAITING_FOR_CODE' }) => {
    const [currentStatus, setCurrentStatus] = useState(initialState);

    return (
        <div style={{ perspective: 100 }}>
            <Transition>
                <CSSTransition in={currentStatus === 'SIGNUP'} classNames="signup" timeout={6000}>
                    <Invitation isNavigation={currentStatus === 'NAVIGATION'} onClick={() => setCurrentStatus('SIGNUP')} />
                </CSSTransition>
            </Transition>
        </div>
    );
};

export default InvitationComponent;

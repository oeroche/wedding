import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RED } from '../@style/colors';
import NavLink from '../Components/NavLink';

const NavWrapper = styled.section`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Roboto Mono';
    font-size: 20px;
    font-weight: lighter;
`;

const LinkGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
`;

class NavigationContainer extends Component {
    render() {
        return (
            <NavWrapper>
                <LinkGroup>
                    <NavLink href="/accueil">Accueil</NavLink>
                    <NavLink href="/informations">Informations</NavLink>
                </LinkGroup>
                {/* <span>
                    <img src="/logo2.jpg" width="240px" />
                </span> */}
                <LinkGroup>
                    <NavLink href="/photos">Les photos</NavLink>
                    <NavLink href="/faq">faq</NavLink>
                    <NavLink href="/rsvp">rsvp</NavLink>
                </LinkGroup>
            </NavWrapper>
        );
    }
}

NavigationContainer.propTypes = {};

export default NavigationContainer;

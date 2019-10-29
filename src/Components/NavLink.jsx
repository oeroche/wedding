import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContent = styled.div`
    font-family: 'Roboto Mono';
    font-weight: lighter;
    font-size: 20px;
    ${({ isActive }) => isActive && 'font-weight: bold;'}

    &:hover {
        font-weight: normal;
    }
`;

const NavLink = ({ href, children }) => (
    <Link to={href}>
        <LinkContent>{children}</LinkContent>
    </Link>
);

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node,
};

NavLink.defaultProps = {
    children: null,
};

export default NavLink;

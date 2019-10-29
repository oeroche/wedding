import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { RED } from '../@style/colors';

const Button = styled.div`
    padding: 10px;
    background-color: ${RED};
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Roboto mono';
    color: #fff;
    cursor: pointer;
    ${({ isNextToField }) => isNextToField && 'border-radius: 0 5px 5px 0; display: inline-block'}
`;

const ButtonComponent = ({
    label, isLoading, isNextToField, style, onClick, ...props
}) => (
    <Button isNextToField={isNextToField} style={style} {...props} onClick={onClick}>
        {isLoading ? 'loading' : label}
    </Button>
);

ButtonComponent.propTypes = {
    label: propTypes.string.isRequired,
    isLoading: propTypes.bool,
    isNextToField: propTypes.bool,
    onClick: propTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    style: propTypes.object,
};

ButtonComponent.defaultProps = {
    isLoading: false,
    isNextToField: false,
    style: {},
    onClick: () => null,
};

export default ButtonComponent;

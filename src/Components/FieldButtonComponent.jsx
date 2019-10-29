import React from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';
import { RED } from '../@style/colors';

const Input = styled.input`
    display: inline-block;
    height: 50px;
    border: 1px solid #adadad;
    border-width: 1px 0px 1px 1px;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    padding: 10px;
    min-width: 200px;
    font-family: 'Roboto Mono';
    font-size: 20px;
    &:focus {
        border: 1px solid ${RED};
    }
`;

const buttonSpecialStyle = {
    height: 50,
    verticalAlign: 'top',
    border: '1px solid',
    borderColor: RED,
    lineHeight: 1.6,
};

const FieldButtonComponent = ({
    ctaLabel, value, onChange, onSubmit, ...props
}) => (
    <div>
        <Input type="text" value={value} onChange={onChange} {...props} />
        <ButtonComponent label={ctaLabel} isNextToField style={buttonSpecialStyle} onClick={onSubmit} />
    </div>
);

FieldButtonComponent.propTypes = {
    ctaLabel: proptypes.string.isRequired,
    value: proptypes.string.isRequired,
    onChange: proptypes.func.isRequired,
    onSubmit: proptypes.func.isRequired,
};

export default FieldButtonComponent;

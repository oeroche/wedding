import React from 'react';
import styled from 'styled-components';
import proptypes from 'prop-types';
import { RED } from '../@style/colors';

const Input = styled.input`
    display: inline-block;
    height: 50px;
    border: 1px solid #adadad;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    font-family: 'Roboto Mono';
    font-size: 20px;
    &:focus {
        border: 1px solid ${RED};
    }
    &[type='text'] {
        min-width: 200px;
    }
    &[type='checkbox'] {
        height: 20px;
    }
    &[type='submit'] {
        background-color: ${RED};
        color: #fff;
        border: 1px solid ${RED};
    }
`;

const TextArea = styled.textarea`
    border: 1px solid #adadad;
    border-radius: 5px;
    width: 80%;
    height: 200px;
    font-family: 'Roboto Mono';
    font-size: 20px;
    padding: 20px;
    resize: none;
`;

const Wrapper = styled.div`
    ${({ inline }) => inline && 'display: inline-block; margin-right: 20px;'}
`;

const Title = styled.div`
    color: #fff;
    margin-bottom: 1em;
`;

const FieldComponent = ({
    inline, title, type, wrapperStyle, ...rest
}) => (
    <Wrapper inline={inline} style={wrapperStyle}>
        {title && <Title>{title}</Title>}
        {type === 'textarea' ? <TextArea {...rest} /> : <Input type={type} {...rest} />}
        <br />
        <br />
    </Wrapper>
);

FieldComponent.propTypes = {
    inline: proptypes.bool,
    title: proptypes.string,
    type: proptypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    wrapperStyle: proptypes.any,
};

FieldComponent.defaultProps = {
    inline: false,
    title: '',
    type: 'text',
    wrapperStyle: {},
};

export default FieldComponent;

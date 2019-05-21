import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { dismissError } from '../actions';

const ErrorWrapper = styled.div`
  background-color: ${props => setAlertType(props.alertType)};
  min-height: 40px;
  padding: 10px;
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10%;
  right: 10%;
  z-index: 1000;
  border-radius: 10px;
`;

const ErrorText = styled.p`
  color: #ffffff;
`;

const setAlertType = (type) => {
	if (type === 'ERROR'){
        return '#dc3545';
    } else if (type === 'WARNING'){
        return '#ffc107';
    } else if (type === 'SUCCESS'){
        return '#28a745';
    }
}

class ErrorsDisplayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
        };
    }

    handleDismiss = () => {
        const { dismissError, errors } = this.props;
        dismissError(errors.list.length - 1);
    };

    render() {
        const { errors } = this.props;
        if (errors.list.length > 0) {
            return (
                <ErrorWrapper alertType={errors.list[0].type} onClick={this.handleDismiss}>
                    <ErrorText>{errors.list[0].message}</ErrorText>
                </ErrorWrapper>
            );
        }
        return null;
    }
}

const mapStateToProps = ({ errorsReducer }) => ({ errors: errorsReducer });

export default connect(
    mapStateToProps,
    { dismissError },
)(ErrorsDisplayContainer);

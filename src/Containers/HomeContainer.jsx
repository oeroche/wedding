/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { requestAlert, logout, update } from '../actions';
import InvitationComponent from '../Components/InvitationComponent';

const Title = styled.p`
    width: 100vw;
    text-align: center;
    margin-top: 10%;
    font-size: 26px;
`;

const UserContainer = styled.div`
    text-align: center;
    margin: 20px;
    padding: 15px;
    background-color: lightgrey;
    border-radius: 5px;
`;

const ErrorContainer = styled.div`
    text-align: center;
    margin: 20px;
    padding: 15px;
    background-color: lightgrey;
    border-radius: 5px;
`;

const signupSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
class HomeContainer extends React.Component {
    addAlert = (type, message) => () => {
        this.props.requestAlert(type, message);
    };

    logout = () => {
        const { logout } = this.props;
        logout();
        this.props.history.push('/login');
    };

    render() {
        const {
            error, user, isLoggedIn, updateUser,
        } = this.props;
        return (
            <div>
                {/* <Title>Welcome to Possible Future’s Boilerplate!</Title> */}
                <InvitationComponent />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer.user,
    isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = {
    requestAlert,
    logout,
    updateUser: update,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);

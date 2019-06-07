/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { requestAlert, logout, update } from '../actions';


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
                <Title>
                    Welcome to Possible Future’s Boilerplate!
                </Title>
                {isLoggedIn && user && (
                    <UserContainer>
                        Congratulations, you are logged in !

                        <Formik
                            initialValues={{
                                firstName: user.lastName, lastName: user.lastName, email: user.email,
                            }}
                            validationSchema={signupSchema}
                            onSubmit={(values) => {
                                updateUser({
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    email: values.email,
                                });
                            }}
                        >
                            {() => (
                                <Form>
                                    <label htmlFor="firstName">
                                    First Name
                                        <Field type="text" name="firstName" placeholder="Your first name" />
                                        <ErrorMessage name="firstName" component="div" />
                                    </label>
                                    <br />
                                    <label htmlFor="lastName">
                                    Last Name
                                        <Field type="text" name="lastName" placeholder="Your last name" />
                                        <ErrorMessage name="lastName" component="div" />
                                    </label>
                                    <br />
                                    <label htmlFor="email">
                                    Email
                                        <Field type="email" name="email" placeholder="Your email" />
                                        <ErrorMessage name="email" component="div" />
                                    </label>
                                    <br />
                                    <button type="submit">
										Submit my changes
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        <button type="button" onClick={this.logout}>Logout</button>
                    </UserContainer>
                )}
                <ErrorContainer>
                    <p>Generate alerts !</p>
                    <button type="button" onClick={this.addAlert('ERROR', 'This is an Error alert')}>Add Error Alert</button>
                    <button type="button" onClick={this.addAlert('WARNING', 'This is a Warning alert')}>Add Warning Alert</button>
                    <button type="button" onClick={this.addAlert('SUCCESS', 'This is a Success alert')}>Add Success Alert</button>
                </ErrorContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import { login, requestAlert } from '../actions';

const Container = styled.div`
	text-align: center;
`;
const Title = styled.p`
	width: 100vw;
    margin-top: 10%;
    font-size: 26px;
`;

class LoginContainer extends React.Component {
    render() {
        const { isLoggedIn, login, loginLoading } = this.props;
        if (isLoggedIn) {
            return <Redirect to="/home" />;
        }

        return (
            <Container>
                <Title>Login</Title>

                <Formik
                    initialValues={{ email: 'test11@test.com', password: 'test' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, actions) => {
                        login(values);
                        actions.setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            {loginLoading ? (
                                <p>Loading</p>
                            ) : (
                                <button type="submit" disabled={isSubmitting}>
										Submit
                                </button>
                            )}
                        </Form>
                    )}
                </Formik>
                <Link to="/forgotpassword">I forgot my password</Link>
                <br />
				New to the Boilerplate ?
                {' '}
                <Link to="/signup">Create an account.</Link>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    loginLoading: state.actionStateReducer.loginLoading,
    isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = {
    login,
    requestAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

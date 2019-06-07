import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { signup } from '../actions';


const Container = styled.div`
	text-align: center;
`;
const Title = styled.p`
	width: 100vw;
    margin-top: 10%;
    font-size: 26px;
`;

const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .oneOf([Yup.ref('confirmPassword'), null])
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null])
        .required('Password confirm is required'),
});

// eslint-disable-next-line react/prefer-stateless-function
class signupContainer extends React.Component {
    render() {
        const {
            error, isLoggedIn, signup, signupLoading, user,
        } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/home" />;
        }
        return (

            <Container>
                <Title>Sign Up</Title>

                <Formik
                    initialValues={{
                        firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
                    }}
                    validationSchema={signupSchema}
                    onSubmit={(values, actions) => {
                        signup({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            password: values.password,
                        });
                    }}
                >
                    {({ isSubmitting, isValid }) => (
                        <Form>
                            <Field type="text" name="firstName" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="div" />
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <Field type="password" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" component="div" />
                            {signupLoading ? (
                                <p>Loading</p>
                            ) : (
                                <button type="submit" disabled={!isValid || isSubmitting}>
										Submit
                                </button>
                            )
                            }

                        </Form>
                    )}
                </Formik>
                {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
				Already have an account ?
                {' '}
                <Link to="/login">Login to your account.</Link>
            </Container>

        );
    }
}
const mapStateToProps = state => ({
    signupLoading: state.actionStateReducer.signupLoading,
    user: state.userReducer.user,
    error: state.userReducer.error,
    isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = {
    signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(signupContainer);

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import { getResetPwdUrl } from '../actions';


const Container = styled.div`
	text-align: center;
`;
const Title = styled.p`
	width: 100vw;
    margin-top: 10%;
    font-size: 26px;
`;


class ForgotPasswordContainer extends React.Component {
    render() {
        const { resetPwd } = this.props;
        return (
            <Container>
                <Title>Fill in your email to reset your password</Title>

                <Formik
                    initialValues={{ email: 'test19@test.com' }}
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
                    onSubmit={(values) => {
                        resetPwd(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />

                            <button type="submit" disabled={isSubmitting}>
                                Send me the email
                            </button>
                            <br />
                            <Link to="/login">Go back to Log In</Link>
                        </Form>
                    )}
                </Formik>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    resetPwd: getResetPwdUrl,
};

export default connect(null, mapDispatchToProps)(ForgotPasswordContainer);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUp } from '../actions';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom'

const Container = styled.div`
	text-align: center;
`;
const Title = styled.p`
	width: 100vw;
    margin-top: 10%;
    font-size: 26px;
`;

const signUpSchema = Yup.object().shape({
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
		.required('Password confirm is required')
});

class SignUpContainer extends React.Component {
	render() {
		const {
			error, isLoggedIn, signUp, signUpLoading
		} = this.props

		if (isLoggedIn) {
			return <Redirect to='/home' />
		}

		return (

			<Container>
				<Title>Sign Up</Title>

				<Formik
					initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
					validationSchema={signUpSchema}
					onSubmit={(values, actions) => {
						signUp({
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
							{signUpLoading ? (
								<p>Loading</p>
							) : (
									<button disabled={!isValid || isSubmitting}>
										Submit
									</button>
								)
							}

						</Form>
					)}
				</Formik>
				{error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
				Already have an account ? <Link to='/login'>Login to your account.</Link>
			</Container>

		)
	}
}
const mapStateToProps = (state) => ({
	signUpLoading: state.actionStateReducer.signUpLoading,
	user: state.userReducer.user,
	error: state.userReducer.error,
	isLoggedIn: state.userReducer.isLoggedIn
})

const mapDispatchToProps = {
	signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
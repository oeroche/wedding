/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { requestAlert, logout } from '../actions';

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

class HomeContainer extends React.Component {

    addAlert = (type, message) => () => {
        this.props.requestAlert(type, message)
    }

    logout = () => {
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        const {
            error, user, isLoggedIn
        } = this.props;
        return (
            <div>
                <Title>
                    Welcome to Possible Future’s Boilerplate!
                </Title>
                {isLoggedIn && user && (
                    <UserContainer>
                        Congratulations, you're logged in ! <br />
                        First Name: {user.firstName} <br />
                        Last Name: {user.lastName} <br />
                        Email: {user.email} <br />
                        <button onClick={this.logout}>Logout</button>
                    </UserContainer>
                )}
                <ErrorContainer>
                    <p>Generate alerts !</p>
                    <button onClick={this.addAlert('ERROR', 'This is an Error alert')}>Add Error Alert</button>
                    <button onClick={this.addAlert('WARNING', 'This is a Warning alert')}>Add Warning Alert</button>
                    <button onClick={this.addAlert('SUCCESS', 'This is a Success alert')}>Add Success Alert</button>
                </ErrorContainer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer.user,
    isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = {
    requestAlert,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

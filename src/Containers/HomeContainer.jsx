import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resetState, updateState } from '../actions';

const Title = styled.p`
    width: 100vw;
    text-align: center;
    margin-top: 10%;
    font-size: 26px;
`;

const StateContainer = styled.div`
    text-align: center;
`;

class HomeContainer extends React.Component {
    handleUpdateStateButton = () => {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.updateState('Me updated state !');
    }

    handleResetStateButton = () => {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.resetState();
    }

    render() {
        const { test } = this.props;
        return (
            <div>
                <Title>
                    Welcome to Possible Future’s Boilerplate!
                </Title>
                <StateContainer>
                    <button type="button" onClick={this.handleUpdateStateButton}>Update State</button>
                    <button type="button" onClick={this.handleResetStateButton}>Reset State</button>

                    <p>State value: {test}</p>
                </StateContainer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    test: state.baseReducer.test,
});

const mapDispatchToProps = {
    resetState,
    updateState,
};

HomeContainer.propTypes = {
    test: PropTypes.string.isRequired,
    updateState: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

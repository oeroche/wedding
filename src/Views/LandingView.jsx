import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import * as userActions from '../actions/userActions';
import TitleComponent from '../Components/TitleComponent';
import CtaComponent from '../Components/CtaComponent';
import FieldButtonComponent from '../Components/FieldButtonComponent';
import H3 from '../Components/H3';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: stretch;
`;

const LeftHero = styled.aside`
    flex: 1;
    background-color: #ca764f;
`;

const RightHero = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

class LandingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    static propTypes = {
        login: proptypes.func.isRequired,
    };

    onCodeChange = (e) => {
        this.setState({ code: e.target.value });
    };

    onCodeSubmit = () => {
        const { login } = this.props;
        login({ code: this.state.code });
    };

    render() {
        const { code } = this.state;
        return (
            <Wrapper>
                <LeftHero />
                <RightHero>
                    <TitleComponent />
                    <div>
                        <H3>Votre code</H3>
                        <FieldButtonComponent ctaLabel="Accéder" onChange={this.onCodeChange} value={code} onSubmit={this.onCodeSubmit} />
                    </div>
                </RightHero>
            </Wrapper>
        );
    }
}

export default connect(
    state => state,
    userActions,
)(LandingView);

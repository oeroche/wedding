import React from 'react';


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p style={{
                width: '100vw', textAlign: 'center', marginTop: '10%', fontSize: '26px',
            }}
            >

                Welcome to Possible Future{" Future's "}s Boilerplate!
            </p>
        );
    }
}

export default HomeContainer;

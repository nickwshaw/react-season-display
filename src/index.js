import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { latitude : null, errorMessage : '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({ latitude : position.coords.latitude })
            },
            (error) => this.setState({ errorMessage : error.message })
        );
    }

    render() {
        if (!this.state.latitude && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (this.state.latitude && !this.state.errorMessage) {
            return <div>Lattitude: {this.state.latitude}</div>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
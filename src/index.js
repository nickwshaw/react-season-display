import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    state = { latitude : null, errorMessage : '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude : position.coords.latitude }),
            error => this.setState({ errorMessage : error.message })
        );
    }

    componentDidUpdate() {
        console.log('updated');
    }

    render() {
        if (!this.state.latitude && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (this.state.latitude && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.latitude}/>
        }

        return <div>Loading..</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
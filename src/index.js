import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // Initiaze state
        this.state = { lat: null, errorMessage: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})                
            }       
            
        );
    };
    render() {        
        return (
            <div>
                <div>Latitude: {this.state.lat}</div>
                <br />
                <div>Error: {this.state.errorMessage}</div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


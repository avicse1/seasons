import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // Initiaze state
    //     this.state = { lat: null, errorMessage: null };
        
    // };
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})                     
        );
        
    }
    componentDidUpdate() {
        console.log('component just updated');
        
    }

    renderBody() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept the location"/>;
    }
    render() {        
        return( 
            <div className="border red">
                {this.renderBody()}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


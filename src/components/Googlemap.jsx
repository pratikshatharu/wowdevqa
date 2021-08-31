import React, { Component } from 'react';
import Body from './Body';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


/*function Googlemap(props) {
    return (
        <>
            <Body />
            <div className="App">
                <header className="App-header" >
                    <h1 className="App-title">Map</h1>

                </header>

                <Map google={props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'kathmandu'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>


            </div>

        </>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD84AwVi4_7y23nGfdMjOo4jml5Ql - HJjc')
})(Googlemap)*/

export class Googlemap extends Component {
    render() {
        return (
            <>
                <Body />
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Kathmandu'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD84AwVi4_7y23nGfdMjOo4jml5Ql-HJjc")
})(Googlemap)

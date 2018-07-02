import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';


export class MapContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            width: '900px',
            height: '900px',
            float: 'right'
          }
        return(
            <div className="map" style={style}> 
                <Map google={this.props.google} zoom={4.5}
                    // style={style}
                    initialCenter={{
                        lat: 36.850033,
                        lng: -87.6500523
                    }}
                >
                    <Marker onClick={() => (console.log('clicked'))}
                    name={'Current location'}
                    position={{lat: 37.778519, lng: -122.405640}}
                    />
                    
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC7BNr_kr7G686S432xcRQVjtaZzdOUPGs')
})(MapContainer)
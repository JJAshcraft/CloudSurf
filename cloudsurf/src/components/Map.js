import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';


class MapContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            width: '300px',
            height: '300px',
          }
        return(
            <div className="map" style={{float: "right"}}> 
                <Map google={this.props.google} zoom={4.5}
                    initialCenter={{
                        lat: 36.850033,
                        lng: -87.6500523
                    }}
                    style={style}
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

import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';


class MapContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            width: '600px',
            height: '300px',
          }
          const drop = [];
          for(let x in this.props.dropzone){
            drop.push(this.props.dropzone[x])
          }
         
          
        return(
            <div className="map" > 
                <Map google={this.props.google} zoom={3.5}
                    initialCenter={{
                        lat: 36.850033,
                        lng: -87.6500523
                    }}
                    style={style}
                >
                    { drop.map(zone => { 
                        return  <Marker onClick={() => (console.log('clicked'))}
                                    position={{lat: zone.lat, lng: zone.lng}}
                                    key={zone.id}
                                />
                        })
                    }
                    
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC7BNr_kr7G686S432xcRQVjtaZzdOUPGs')
})(MapContainer)

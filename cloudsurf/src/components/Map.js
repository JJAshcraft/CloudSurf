import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import {Link} from 'react-router-dom';

class MapContainer extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick = (id) =>{
        this.props.history.push(`/dropzone/${id}`)

    }
    render(){
        const style = {
            width: '100%',
            position: 'absolute',
            top: '100px',
            overflow: 'hidden'
            
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
                    { this.props.dropzone.map(zone => {

                        return <Marker onClick={() => this.handleClick(zone[0])}
                                            position={{lat: zone[1].lat, lng: zone[1].lng}}
                                            key={zone[0]}
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

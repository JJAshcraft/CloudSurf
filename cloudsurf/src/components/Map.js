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
position:'absolute',
top:'40px',
            height: '95vh',
            bottom: '0',
  
          }
          const drop = [];
        //   console.log(this.props.dropzone)
          for(let x in this.props.dropzone){
            drop.push({id: x, data:this.props.dropzone[x] })
          }
          
          
        return(
            <div className="map" > 
                <Map google={this.props.google} zoom={5}
                    initialCenter={{
                        lat: 36.850033,
                        lng: -87.6500523
                    }}
                    style={style}
                >
                    { drop.map(zone => {

                        return <Marker onClick={() => this.handleClick(zone.id)}
                                            position={{lat: zone.data.lat, lng: zone.data.lng}}
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

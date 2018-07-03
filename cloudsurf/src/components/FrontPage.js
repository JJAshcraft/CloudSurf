import React, { Component } from 'react';


class FrontPage extends Component {
    
    render() {
        return (
            <div>
                <video id="background-video" loop autoPlay>
                    <source src="https://streamable.com/7ua1i" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}



export default FrontPage;
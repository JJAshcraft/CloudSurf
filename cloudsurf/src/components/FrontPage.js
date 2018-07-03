import React, { Component } from 'react';
import '../frontpage.css';
import {Link} from 'react-router-dom';

class FrontPage extends Component {

    render() {
        return ( 
            <div class='bg'>
                {/* <video autoPlay loop id="video-background" muted plays-inline>
                 < source src = "https://vimeo.com/user61060427/review/278179280/b16eff9043" /> type = "video/mp4" >
</video> */}
            
            <div class='login-box'>
            <img src="/images/login.svg" alt=""/>
                    <button name='facebook' onClick ={this.props.SignIn} class="loginBtn loginBtn--facebook">
  Login with facebook
</button>

<button name='google' onClick ={this.props.SignIn}  class="loginBtn loginBtn--google">
  Login with Google
</button><br/><br/>
<span>Not a member? <br/></span> <Link to='/'> Click Here to Sign Up.</Link>

            </div>
          </div>
        );
    }
}



export default FrontPage;
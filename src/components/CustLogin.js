import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import login1 from '../img/login1.png';
import login2 from '../img/login2.png';
import login3 from '../img/login3.png';

class Overview extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Customer Registeration</h2>
                <br></br>
                <Container>
                    <h3>Step 1: On home page click on Login button</h3>
                    <img src={login1} alt="login1" width="800px"></img>
                    <br></br>
                    <h3>Step 2: Fill the form with the right credentials</h3>
                    <img src={login2} alt="login2" width="800px"></img>
                    <br></br><br></br>
                    <h3>Step 3: Click on submit button.</h3>
                    <img src={login3} alt="signup3" width="800px"></img>
                    <br></br><br></br>
                    <h3>You will be redirected to the login page if the credentials are correct. <br></br> Otherwise An error page will get displayed</h3>
                </Container>
                <br></br>
                <a className="goback" href="/">Back to Home</a>
            </div>
        );
    }
}

export default Overview;
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import reg1 from '../img/signup1.png';
import reg2 from '../img/signup2.png';
import reg3 from '../img/signup3.png';

class Overview extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Customer Registeration</h2>
                <br></br>
                <Container>
                    <h3>Step 1: On home page click on Sign Up button</h3>
                    <img src={reg1} alt="signup1" width="800px"></img>
                    <br></br>
                    <h3>Step 2: Fill the form with the right credentials</h3>
                    <img src={reg2} alt="signup2" width="800px"></img>
                    <br></br><br></br>
                    <h3>Step 3: Click on submit button.</h3>
                    <img src={reg3} alt="signup3" width="800px"></img>
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
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import selllogin1 from '../img/selllogin1.png';
import selllogin2 from '../img/selllogin2.png';
import selllogin3 from '../img/selllogin3.png';

class SellerLogin extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Seller Registeration</h2>
                <br></br>
                <Container>
                    <h3>Step 1: On seller's home page click on Login button</h3>
                    <img src={selllogin1} alt="login1" width="800px"></img>
                    <br></br>
                    <h3>Step 2: Fill the form with the right credentials.</h3>
                    <img src={selllogin2} alt="login2" width="800px"></img>
                    <br></br><br></br>
                    <h3>Step 3: Click on submit.</h3>
                    <img src={selllogin3} alt="login3" width="800px"></img>
                    <br></br><br></br>
                    <h3>You will be redirected to the login page if the credentials are correct. <br></br> Otherwise An error page will get displayed</h3>
                </Container>
                <br></br>
                <a className="goback" href="/">Back to Home</a>
            </div>
        );
    }
}

export default SellerLogin;
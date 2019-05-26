import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import atc1 from '../img/atc1.png';
import atc2 from '../img/atc2.png';
import atc3 from '../img/atc3.png';

class SellerLogin extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Seller Registeration</h2>
                <br></br>
                <Container>
                    <h3>Step 1: On seller's home page click on Login button</h3>
                    <img src={atc1} alt="atc1" width="800px"></img>
                    <br></br>
                    <h3>Step 2: Fill the form with the right credentials.</h3>
                    <img src={atc2} alt="atc2" width="800px"></img>
                    <br></br><br></br>
                    <h3>Step 3: Click on submit.</h3>
                    <img src={atc3} alt="atc3" width="800px"></img>
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
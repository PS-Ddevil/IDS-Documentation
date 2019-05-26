import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import selreg1 from '../img/selreg1.png';
import selreg2 from '../img/selreg2.png';
import selreg3 from '../img/selreg3.png';

class SellerReg extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Seller Registeration</h2>
                <br></br>
                <Container>
                <h3>Step 1: On home page click on Click Here button of "Are you a seller?" section</h3>
                    <img src={selreg1} alt="sekreg1" width="800px"></img>
                    <br></br>
                    <h3>Step 2: Click on the Signup option of the seller's front page.</h3>
                    <img src={selreg2} alt="selreg2" width="800px"></img>
                    <br></br><br></br>
                    <h3>Step 3: Fill the form with the right credentials and click on submit button.</h3>
                    <img src={selreg3} alt="selreg3" width="800px"></img>
                    <br></br><br></br>
                    <h3>You will be redirected to the login page if the credentials are correct. <br></br> Otherwise An error page will get displayed</h3>
                </Container>
                <br></br>
                <a className="goback" href="/">Back to Home</a>
            </div>
        );
    }
}

export default SellerReg;
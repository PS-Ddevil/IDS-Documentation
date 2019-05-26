import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import selllogout from '../img/sellsignout.png';

class SellerLogout extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Seller Registeration</h2>
                <br></br>
                <Container>
                    <h3>Step 1: On seller's home page click on Logout button</h3>
                    <img src={selllogout} alt="logout" width="800px"></img>
                    <br></br>
                </Container>
                <br></br>
                <a className="goback" href="/">Back to Home</a>
            </div>
        );
    }
}

export default SellerLogout;
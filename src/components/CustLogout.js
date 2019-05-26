import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import logout1 from '../img/logout1.png';

class Overview extends Component{

    render(){
        return(
            <div id="page-wrap">
                <h2 id="overview-head">Customer Registeration</h2>
                <br></br>
                <Container>
                    <h3>Step 1: On home page click on Logout button</h3>
                    <img src={logout1} alt="logout1" width="800px"></img>
                    <br></br>
                </Container>
                <br></br>
                <a className="goback" href="/">Back to Home</a>
            </div>
        );
    }
}

export default Overview;
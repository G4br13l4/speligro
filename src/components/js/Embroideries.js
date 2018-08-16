import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';
import {Footer} from './Footer';

class Embroideries extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <h1>Projects</h1>
            <Footer/>
        </Grid>  
    );
  }
}

export default Embroideries;
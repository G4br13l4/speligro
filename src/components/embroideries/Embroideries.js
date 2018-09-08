import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {Footer} from '../shared/Footer';

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
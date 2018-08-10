import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';

class Embroideries extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <h1>Projects</h1>
        </Grid>  
    );
  }
}

export default Embroideries;
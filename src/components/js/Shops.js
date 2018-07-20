import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';

class Shops extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <h1>Shops</h1>
        </Grid>  
    );
  }
}

export default Shops;
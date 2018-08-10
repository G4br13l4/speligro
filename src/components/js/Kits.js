import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from './NavBar';
 
class Kits extends Component {
    render() {
      return (
          <Grid fluid>
              <NavBar/>
              
              <h1>History</h1>
              
          </Grid>  
      );
    }
}

export default Kits;


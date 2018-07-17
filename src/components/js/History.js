import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';

export class History extends Component {
    render() {
      return (
          <Grid fluid>
              <NavBar/>
              <h1>History</h1>
          </Grid>  
      );
    }
}
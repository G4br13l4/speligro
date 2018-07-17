import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';

export class Projects extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <h1>Projects</h1>
        </Grid>  
    );
  }
}
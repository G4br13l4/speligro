import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from './NavBar';
 
class Club extends Component {
    render() {
      return (
          <Grid fluid>
              <NavBar/>
              
              <h1>Ckub de Bordado</h1>
              
          </Grid>  
      );
    }
}

export default Club;


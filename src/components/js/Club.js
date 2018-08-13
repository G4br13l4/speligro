import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from './NavBar';
import {InstagramFeed} from './InstagramFeed';
 
class Club extends Component {
    render() {
      return (
          <Grid fluid>
              <NavBar/>
              
              <h1>Club de Bordado</h1>
              <InstagramFeed
              userId='7757577536'
              clientId='2cc36afa67a54c2db3cbe423e21b932a'
              accessToken='7757577536.2cc36af.65b6c484ed5442ed8fb34d25fe4cff78'
              />
          </Grid>  
      );
    }
}

export default Club;


import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';

class News extends Component {
    render() {
      return (
          <Grid>
              <NavBar/>
              <h1>News</h1>
          </Grid>  
      );
    }
}

export default News;
import React, { Component } from 'react';
import {NavBar} from './NavBar';
import { Grid } from 'react-bootstrap';
import {InstagramFeed} from './InstagramFeed';

class News extends Component {
    render() {
      return (
          <Grid>
              <NavBar/>
              <h1>News</h1>
              <InstagramFeed
              userId='7757577536'
              clientId='2cc36afa67a54c2db3cbe423e21b932a'
              accessToken='7757577536.2cc36af.65b6c484ed5442ed8fb34d25fe4cff78'
            />
          </Grid>  
      );
    }
}

export default News;
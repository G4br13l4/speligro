import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from './NavBar';
import {CustomCarousel} from './Carousel';
import {Footer} from './Footer';
import {InstagramFeed} from './InstagramFeed';

class Home extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <CustomCarousel/>
            <InstagramFeed
              userId='200766832'
              clientId='65b3795a54284f08ad8f893042b7fc0c'
              accessToken='200766832.65b3795.64650c8e74eb4c4fbf714c8bca5b7de2'
            />
            <Footer/>
        </Grid>  
    );
  }
}

export default Home;
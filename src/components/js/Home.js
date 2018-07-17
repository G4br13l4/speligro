import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from './NavBar';
import {CustomCarousel} from './Carousel';
import {Footer} from './Footer';

export class Home extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <CustomCarousel/>
            <Footer/>
        </Grid>  
    );
  }
}
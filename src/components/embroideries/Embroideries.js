import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {OrderForm} from './OrderForm';
import {Footer} from '../shared/Footer';
import {CustomCarousel} from '../shared/Carousel';

class Embroideries extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar
              margin={{marginBottom:"15vh"}}
            />
            <CustomCarousel 
              height={{height:"55vh"}}
              firPhoto="assets/order1.jpg"
              secPhoto="assets/order2.jpg" 
              thiPhoto="assets/order3.jpg" 
            />
            
            <Footer/>
        </Grid>  
    );
  }
}

export default Embroideries;
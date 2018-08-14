import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {NavBar} from './NavBar';
import {CustomCarousel} from './Carousel';
import {Footer} from './Footer';
import {InstagramFeed} from './InstagramFeed';
import {Mailing} from './Mailing';

class Home extends Component {
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
      let scrollPtge = (window.scrollY/(document.getElementById("root").offsetHeight - window.innerHeight))*100;
      
      if(scrollPtge>80){
        let pics = document.querySelectorAll(".insta-box");
        pics.forEach(function(element) {
          element.classList.add("animate");
        });
      }else{
        let pics = document.querySelectorAll(".insta-box");
        pics.forEach(function(element) {
          element.classList.remove("animate");
        });
      }
  }
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <CustomCarousel height={{height:"60vh"}}/>
            <Row>
              <Col className="col-xs-12 subtitle">
                    <h2>Lo último en Instagram</h2>
                    <h4>Ir a <img className="icon" src="assets/instagram.png"/></h4>
              </Col>
            </Row>
            <InstagramFeed ref="feed"
              userId='200766832'
              clientId='65b3795a54284f08ad8f893042b7fc0c'
              accessToken='200766832.65b3795.64650c8e74eb4c4fbf714c8bca5b7de2'
            />
            <Mailing/>
            <Footer/>
        </Grid>  
    );
  }
}

export default Home;
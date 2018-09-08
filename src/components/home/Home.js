import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {CustomCarousel} from '../shared/Carousel';
import {Footer} from '../shared/Footer';
import {InstagramFeed} from '../shared/InstagramFeed';
import {Mailing} from '../shared/Mailing';

class Home extends Component {
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
      let scrollPtge = (window.scrollY/(document.getElementById("root").offsetHeight - window.innerHeight))*100;
      
      if(scrollPtge>65){
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
            <CustomCarousel 
              height={{height:"60vh"}}
              firPhoto="assets/calendar.jpg"
              secPhoto="assets/anuncio.jpg" 
              thiPhoto="assets/pedido.jpg" 
            />
            <Row>
              <Col className="col-xs-12 subtitle">
                    <h2>Lo último en Instagram</h2>
                    <h4>Ir a <a href="https://www.instagram.com/speligro/"><img className="icon" src="assets/instagram.png"/></a></h4>
              </Col>
            </Row>
            <InstagramFeed ref="feed"
              userId='200766832'
              clientId='65b3795a54284f08ad8f893042b7fc0c'
              accessToken='200766832.65b3795.64650c8e74eb4c4fbf714c8bca5b7de2'
            />
            <Mailing
              text="¿Te gustaría recibir info sobre últimas noticias?"
            />
            <Footer/>
        </Grid>  
    );
  }
}

export default Home;
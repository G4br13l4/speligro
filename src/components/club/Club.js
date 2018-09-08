import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {InstagramFeed} from '../shared/InstagramFeed';
import {Footer} from '../shared/Footer';

class Club extends Component {
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
      let scrollPtge = (window.scrollY/(document.getElementById("root").offsetHeight - window.innerHeight))*100;
      if(scrollPtge>68){
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
            <Row className="h-center">
                <h3>Club de Bordado</h3>
                <Col xs={12} className="no-pad">
                  <img src="assets/insignia.jpg"/>
                </Col>
                <Col xs={11} className="justified" id="club-benefits">
                  <p className="bold">Beneficios para miembros del Club:</p>
                  <ul>
                      <li>Podrás asistir a las reuniones mensuales (CDMX)</li>
                      <li>Precio especial en todos los talleres impartidos en el Club </li>
                      <li>Tendrás descuentos en compras directas ( compras físicas)</li>
                  </ul>
                  <p className="bold">Síguenos en <a href="https://www.instagram.com/clubdebordadomx/"><img className="icon" src="assets/instagram.png"/> @clubdebordadomx</a></p>
                </Col>
                <Col xs={12}>
                  <InstagramFeed
                    userId='7757577536'
                    clientId='2cc36afa67a54c2db3cbe423e21b932a'
                    accessToken='7757577536.2cc36af.65b6c484ed5442ed8fb34d25fe4cff78'
                  />
                </Col>
                <Col xs={11} id="buy-insignia">
                  <p className="bold">¿Cómo puedo formar parte del Club?</p>
                  <p>¡Consigue tu insignia aquí! </p>
                </Col>
                <Col xs={9} className="logo-store">
                  <a href="https://www.kichink.com/buy/1703331/silviapeligro/pin-metalico-club-de-bordado"><img src="assets/kichink.png"/></a>
                </Col>
                <Col xs={11} className="mail-cost">
                  <p>*El costo de envío se calcula en la tienda en línea</p>
                </Col>
            </Row>
            <Footer/>
        </Grid>  
    );
  }
}

export default Club;


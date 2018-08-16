import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {NavBar} from './NavBar';
import {InstagramFeed} from './InstagramFeed';
import {Footer} from './Footer';

class Club extends Component {
    render() {
      return (
          <Grid fluid>
              <NavBar/>
              <h1>Club de Bordado</h1>
              <Row className="h-center">
                  <Col xs={10} className="no-pad">
                    <img src="assets/insignia.jpg"/>
                  </Col>
                  <Col xs={11}>
                    <h3>Beneficios para miembros del Club:</h3>
                    <ul>
                        <li>Podrás asistir a las reuniones mensuales (CDMX)</li>
                        <li>Precio especial en todos los talleres impartidos en el Club </li>
                        <li>Tendrás descuentos en compras directas ( compras físicas)</li>
                    </ul>
                    <h3>Síguenos en Instagram</h3>
                    <p><a href="https://www.instagram.com/clubdebordadomx/"><img className="icon" src="assets/instagram.png"/>@clubdebordadomx</a></p>
                  </Col>

                  <InstagramFeed
                    userId='7757577536'
                    clientId='2cc36afa67a54c2db3cbe423e21b932a'
                    accessToken='7757577536.2cc36af.65b6c484ed5442ed8fb34d25fe4cff78'
                  />
                  <Col xs={11}>
                    <h3>¿Cómo puedo formar parte del Club?</h3>
                    <p>Consigue tu insignia aquí (da clic en la imagen)</p>
                  </Col>
                  <Col xs={8}>
                    <a href="https://www.kichink.com/buy/1703331/silviapeligro/pin-metalico-club-de-bordado"><img src="assets/kichink.png"/></a>
                  </Col>
                  <Col xs={11}>
                    <p>*El costo de envío se calcula en la tienda en línea</p>
                  </Col>
              </Row>
              <Footer/>
          </Grid>  
      );
    }
}

export default Club;


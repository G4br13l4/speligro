import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {Footer} from '../shared/Footer';
import {KitCard} from './KitCard';
 
class Kits extends Component {
    render() {
      return (
          <Grid fluid>
              <NavBar
                margin={{marginBottom:"13vh"}}
              />
              <h3>¿Quieres aprender a bordar desde casa?</h3>
              <p>Ahora tengo varias opciones de clases en vídeo</p>
              <KitCard
                img="./assets/kit1.png"
                name="Bordado Básico"
                summary="En este taller básico te enseñare sobre cada uno de los materiales necesarios que se utlizan para bordar a mano"
                basicEtsy=""
                basicKichink="https://www.kichink.com/buy/1813160/silviapeligro/taller-de-bordado-basico-kit-basico"
                deluxeEtsy="https://www.etsy.com/mx/listing/608756018/taller-de-bordado-basico-deluxe-clase-en?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=silvia%20peligro&ref=sr_gallery-1-1"
                deluxeKichink="https://www.kichink.com/buy/1812006/silviapeligro/taller-de-bordado-basico-deluxe"
                basic={(
                    <ul>
                        <li>Acceso ilimitado a una clase en vídeo con explicación de los materiales necesarios para bordar a mano y 10 puntadas paso a paso para completar tu patrón impreso</li>
                        <li>
                            <p>Materiales:</p>
                            <ul>
                                <li>Bastidor plástico de 8 pulgadas</li>
                                <li>Bastidor de bambú de 8 pulgadas</li>
                                <li>10 madejas de colores variados ( cada madeja contiene 8 metros de hilo)</li>
                                <li>Patrón impreso con las puntadas básicas </li>
                                <li>Set de agujas</li>
                                <li>Pegamento ( 25 ml)</li>
                            </ul>
                        </li>
                    </ul>
                )}
                
                deluxe={(
                    <ul>
                        <li>Acceso ilimitado a una clase en vídeo</li>
                        <li>
                            <p>PDF con 2 patrones imprimibles:</p>
                            <ul>
                                <li>Métodos de transferencia</li>
                                <li>Instrucciones y tips sobre las puntadas</li>
                                <li>Instrucciones para montar las piezas terminadas</li>
                            </ul>
                        </li>
                        <li>
                            <p>Materiales:</p>
                            <ul>
                                <li>Bastidor plástico de 8 pulgadas</li>
                                <li>Bastidor de bambú de 8 pulgadas</li>
                                <li>15 madejas de colores variados ( cada madeja contiene 8 metros de hilo)</li>
                                <li>Patrón impreso con las puntadas básicas</li>
                                <li>1 cuadro de tela de 35 x 35 cm </li>
                                <li>Set de agujas</li>
                                <li>Pluma Transfer</li>
                                <li>Pegamento (25 ml)</li>
                                <li>2 marcos circulares de 10 cm para montar bordados</li>
                            </ul>
                        </li>
                    </ul> 
                )}
              />
              <KitCard
              img="./assets/kit2.jpg"
              name="Muñequita María"
              summary="El kit incluye los materiales necesarios para que puedas bordar este diseño asi como acceso ilimitado a un videotutorial donde te enseñare paso a paso las puntadas que aplique en este diseño súper mexicano"
              basicEtsy=""
              basicKichink="https://www.kichink.com/buy/1508513/silviapeligro/kit-de-bordado-diy-videotutorial-munequita-maria"
              deluxeEtsy=""
              deluxeKichink="https://www.kichink.com/buy/1508471/silviapeligro/kit-de-bordado-diy-videotutorial-munequita-maria-deluxe"
              basic={(
                  <ul>
                      <li>Acceso privado al videotutorial</li>
                      <li>Bolsita de tela</li>
                      <li>Patrón impreso en tela algodón (medida total de la tela 30x30 cm)</li>
                      <li>2 agujas</li>
                      <li>Hilos para bordar (algodón) de los colores mostrados en las fotos </li>
                      <li>1 Aro de plástico 8 pulgadas (20 cm)</li>
                  </ul>
              )}
              
              deluxe={(
                  <ul>
                      <li>Acceso privado al videotutorial</li>
                      <li>Estuche de tela con compartimentos para que lleves tus herramientas contigo (20 x 12.5 cm cerrado / 20 x 25.5 cm abierto)</li>
                      <li>Patrón impreso en tela algodón (medida total de la tela 30x30 cm)</li>
                      <li>2 agujas</li>
                      <li>Hilos para bordar (algodón) de los colores mostrados en las fotos </li>
                      <li>Tijeras de garza</li>
                      <li>1 Aro de plástico 8 pulgadas (20 cm)</li>
                      <li>1 Aro de madera bambú 8 pulgadas (20 cm)</li>
                      <li>Envase con pegamento de 10 ml</li>
                  </ul> 
              )}
              />
              <Footer/>
          </Grid>  
      );
    }
}

export default Kits;


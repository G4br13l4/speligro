import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {Title} from '../shared/Title';
import {Mailing} from '../shared/Mailing';
import {Footer} from '../shared/Footer';
import {WorkshopCard} from './WorkshopCard';

class Workshops extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar
                margin={{marginBottom:"12vh"}}
            />
            <Title title="Próximos Talleres"/>
            <p></p>
            <WorkshopCard 
                img= "assets/"
                title="Taller de Bordado Básico"
                teacher="Silvia Peligro"
                dates={
                    <ul>
                        <li>Noviembre
                            <ul>
                                <li>Miércoles 7 y Viernes 9</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="8 horas"
                sessions="2 sesiones"
                timeday="11 am a 3:00 pm"
                description="Durante la primera sesión crearás un muestrario con 10 puntadas básicas y en la segunda sesión crearas una pieza con un diseño de tu elección"
                normalCost="$900"
                memberCost="$810"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />

            <WorkshopCard 
                img= "assets/"
                title="Taller de Bordado Avanzado"
                teacher="Silvia Peligro" 
                dates={
                    <ul>
                        <li>Octubre
                            <ul>
                                <li>Miércoles 24</li>
                            </ul>
                        </li>
                        <li>Noviembre
                            <ul>
                                <li>Domingo 11</li>
                            </ul>
                        </li>
                        <li>Diciembre
                            <ul>
                                <li>Viernes 7</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="5 horas"
                sessions="1 día"
                timeday="11 am a 4:00 pm"
                description="Durante el taller crerás un muestrario de 10 puntadas de nivel intermedio y avanzado, para este taller es necesario tener nociones básicas de bordado o costura"
                normalCost="$650"
                memberCost="$585"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />
            
            <WorkshopCard 
                img= "assets/"
                title="Taller de Bordado Miniatura"
                teacher="Silvia Peligro" 
                dates={
                    <ul>
                        <li>Octubre
                            <ul>
                                <li>Viernes 12</li>
                            </ul>
                        </li>
                        <li>Diciembre
                            <ul>
                                <li>Miércoles 5</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="4 horas"
                sessions="1 día"
                timeday="11 am a 3:00 pm"
                description="Durante el taller aprenderás las puntadas que más utilizo en mis bordados y crearás una pieza miniatura ( 5 cm)"
                normalCost="$600"
                memberCost="$540"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />

            <WorkshopCard
                img= "assets/"
                title="Taller de Costura Básica"
                teacher="Mar Pendás" 
                dates={
                    <ul>
                        <li>Octubre
                            <ul>
                                <li>Viernes 26 (proyecto por definir)</li>
                            </ul>
                        </li>
                        <li>Noviembre
                            <ul>
                                <li>Martes 13 ( bolsa estilo tote)</li>
                                <li>Martes 27 (proyecto por definir)</li>
                            </ul>
                        </li>
                        <li>Diciembre
                            <ul>
                                <li>Sábado 8 (proyecto por definir)</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="5 horas"
                sessions="1 día"
                timeday="11 am a 4:00 pm"
                description="En este taller aprenderás sobre los materiales y conceptos básicos de costura a máquina que necesitas conocer para confeccionar el proyecto de clase ( va cambiando dependiendo la fecha)"
                normalCost="$1,200"
                memberCost="$1,080"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />
            
            <WorkshopCard
                img= "assets/"
                title="Taller de Parches Bordados"
                teacher="Pawabe" 
                dates={
                    <ul>
                        <li>Octubre
                            <ul>
                                <li>Miércoles 31</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="4 horas"
                sessions="1 día"
                timeday="11 am a 3:00 pm"
                description="En este taller aprenderás sobre los materiales y 5 puntadas básicas para crear parches, el proyecto de la clase será un parche con diseño de tu elección"
                normalCost="$800"
                memberCost="$720"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />
            
            <WorkshopCard
                img= "assets/"
                title='Taller de Bordado Básico edición especial Día de Muertos"'
                teacher="Silvia Peligro" 
                dates={
                    <ul>
                        <li>Noviembre
                            <ul>
                                <li>Viernes 2</li>
                                <li>Sábado 3</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="5 horas"
                sessions="1 día"
                timeday="11 am a 4:00 pm"
                description="Durante el taller aprenderás 9 puntadas diferentes de nivel básico e intermedio sobre un patrón de calaverita de azúcar"
                normalCost="$650"
                memberCost="$585"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />
            
            <WorkshopCard
                img= "assets/"
                title='Taller de Punto de Cruz'
                teacher="Cristina (Comemoscas)" 
                dates={
                    <ul>
                        <li>Noviembre
                            <ul>
                                <li>Viernes 30 (tarjetas navideñas)</li>
                            </ul>
                        </li>Diciembre
                            <ul>
                                <li>Sábado 1 (esferas navideñas)</li>
                            </ul>
                    </ul>
                }
                duration="4 horas"
                sessions="1 día"
                timeday="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica en cuadrille y realizarás un diseño de tu elección de una variedad de patrones"
                normalCost="$850"
                memberCost="$765"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />

            <WorkshopCard
                img= "assets/"
                title='Taller de Amigurumi'
                teacher="Lucila" 
                dates={
                    <ul>
                        <li>Octubre
                            <ul>
                                <li>Sábados 6 y 13 (calaverita de azúcar)</li>
                                <li>Martes 16 y Viernes 19 (calaverita de azúcar)</li>
                            </ul>
                        </li>
                        <li>Noviembre
                            <ul>
                                <li>Lunes 12 y Miércoles 14 (cactus arbolito de navidad)</li>
                            </ul>
                        </li>
                        <li>Diciembre
                            <ul>
                                <li>Domingos 2 y 9(cactus arbolito de navidad)</li>
                            </ul>
                        </li>
                    </ul>
                }
                duration="8 horas"
                sessions="2 días"
                timeday="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica de tejido con gancho de crochet y crearás un muñeco tejido"
                normalCost="$1,090"
                memberCost="$980"
                firPhoto="assets/"
                secPhoto="assets/"
                thiPhoto="assets/"
            />

            <Footer/>
        </Grid>  
    );
  }
}

export default Workshops;
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
            <Title title="Pròximos Talleres"/>
            <WorkshopCard 
                img= "assets/taller1.jpg"
                title="Taller de Amigurumi"
                teacher="Lucila"
                duration="8 horas"
                sessions="2 sesiones"
                time="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica de tejido con gancho de crochet y crearás un muñeco tejido"
                normalCost="1,090 pesos"
                memberCost="980 pesos"
                firPhoto="assets/1.jpg"
                secPhoto="assets/2.jpg"
                thiPhoto="assets/3.jpg"
                firstDate="Julio: Domingos 15 y 22"
                secDate="Agosto: Miércoles 8 y Viernes 10"
            />
            <WorkshopCard 
                img= "assets/taller2.jpg"
                title="Taller de Amigurumi"
                teacher="Lucila"
                duration="8 horas"
                sessions="2 sesiones"
                time="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica de tejido con gancho de crochet y crearás un muñeco tejido"
                normalCost="1,090 pesos"
                memberCost="980 pesos"
                firPhoto="assets/1.jpg"
                secPhoto="assets/2.jpg"
                thiPhoto="assets/3.jpg"
                firstDate="Julio: Domingos 15 y 22"
                secDate="Agosto: Miércoles 8 y Viernes 10"
            />
            <WorkshopCard 
                img= "assets/taller3.jpg"
                title="Taller de Amigurumi"
                teacher="Lucila"
                duration="8 horas"
                sessions="2 sesiones"
                time="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica de tejido con gancho de crochet y crearás un muñeco tejido"
                normalCost="1,090 pesos"
                memberCost="980 pesos"  
                firPhoto="assets/1.jpg"
                secPhoto="assets/2.jpg"
                thiPhoto="assets/3.jpg"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            />
            <Mailing
              text="¿Te gustaría recibir info sobre nuevos talleres?"
            />
            <Footer/>
        </Grid>  
    );
  }
}

export default Workshops;
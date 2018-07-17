import React, { Component } from 'react';
import {NavBar} from './NavBar';
import {Title} from './Title';
import {WorkshopCard} from './WorkshopCard';
import {Grid} from 'react-bootstrap';

export class Workshops extends Component {
  render() {
    return (
        <Grid fluid>
            <NavBar/>
            <Title title="Pròximos Talleres"/>
            <WorkshopCard 
                title="Taller de Amigurumi"
                teacher="Lucila"
                duration="8 horas"
                sessions="2 sesiones"
                time="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica de tejido con gancho de crochet y crearás un muñeco tejido"
                normalCost="1,090 pesos"
                memberCost="980 pesos"
                firstDate="Julio: Domingos 15 y 22"
                secDate="Agosto: Miércoles 8 y Viernes 10"
            />
            <WorkshopCard 
                title="Taller de Amigurumi"
                teacher="Lucila"
                duration="8 horas"
                sessions="2 sesiones"
                time="11 am a 3:00 pm"
                description="Durante el taller aprenderás la técnica básica de tejido con gancho de crochet y crearás un muñeco tejido"
                normalCost="1,090 pesos"
                memberCost="980 pesos"
                firstDate="Julio: Domingos 15 y 22"
                secDate="Agosto: Miércoles 8 y Viernes 10"
            />
        </Grid>  
    );
  }
}
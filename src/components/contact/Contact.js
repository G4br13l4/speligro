import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {Title} from '../shared/Title';
import {ContactForm} from './ContactForm';
import {Footer} from '../shared/Footer';

class Contact extends Component {
    render() {
      return (
          <Grid fluid>
            <NavBar/>
            <Title title="Contacto"/>
            <ContactForm/>
            <Footer/>
          </Grid>  
      );
    }
}

export default Contact;
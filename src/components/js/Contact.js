import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import {NavBar} from './NavBar';
import {Title} from './Title';
import {ContactForm} from './ContactForm';
import {Footer} from './Footer';

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
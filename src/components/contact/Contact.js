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
            <NavBar
              margin={{marginBottom:"13vh"}}
            />
            <Title title="Contacto"/>
            <img
                src="https://dummyimage.com/600x400/ab9fab/ffffff&text=En+construcci%C3%B3n"
                // autoPlay="true"
            />
            {/* <ContactForm/> */}
            <Footer/>
          </Grid>  
      );
    }
}

export default Contact;
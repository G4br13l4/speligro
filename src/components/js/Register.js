import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import {NavBar} from './NavBar';
import {Title} from './Title';
import {RegisterForm} from './FormRegister';
import {Footer} from './Footer';

class Register extends Component {
    render() {
      return (
          <Grid fluid>
            <NavBar/>
            <Title title="Registro a taller"/>
            <RegisterForm/>
            <Footer/>
          </Grid>  
      );
    }
}

export default Register;
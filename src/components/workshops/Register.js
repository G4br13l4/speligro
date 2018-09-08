import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {Title} from '../shared/Title';
import {Footer} from '../shared/Footer';
import {RegisterForm} from './FormRegister';

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
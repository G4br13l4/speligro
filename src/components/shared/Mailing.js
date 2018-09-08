import React, { Component } from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Form, Button} from 'react-bootstrap';

export class Mailing extends Component {
     
    render() {      
      return (
            <Row id="mailing" className="h-center">
                <Col className="col-xs-3">
                    <img src="assets/bird.png"/>
                </Col>
                <Col className="col-xs-11">
                    <Form inline className="h-center">
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>{this.props.text}</ControlLabel>{' '}
                            <FormControl type="email" placeholder="Escribe tu correo aquí" />
                        </FormGroup>{' '}
                        <Button type="submit">Subscribir</Button>
                    </Form> 
                </Col>
            </Row>                
      );
    }
  }


import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../App.css';

export class Footer extends Component {
    render() {
      return ( 
          <Row className="row_footer">
            <Col xs={2} md={2} >
                <img src="assets/instagram.png"/> 
            </Col>
            <Col xs={2} md={2} >
                <img src="assets/facebook.png"/> 
            </Col>
            <Col xs={2} md={2} >
                <img src="assets/email.png"/> 
            </Col>
          </Row>            
      );
    }
  }
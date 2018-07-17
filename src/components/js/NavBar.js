import React, { Component } from 'react';
import {MenuItem, Row, Col,ButtonToolbar, DropdownButton, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './../css/NavBar.css';

export class NavBar extends Component {
    render() {
      return ( 
          <Row className="nav">
            <Col xs={4} md={4} className="box_lang">
              <Button>ES</Button><Button>EN</Button>
            </Col>
            <Col xs={4} md={4} className="box_logo">     
              <Link to="/"><img className="logo" src="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-9/29136779_2001682956712515_3936918627269214208_n.jpg?_nc_cat=0&oh=6a4291e64540759cdf0e0b518d043656&oe=5BEA2103"/></Link>
            </Col>
            <Col xs={4} md={4} className="box_menu">
              <ButtonToolbar>
                <DropdownButton pullRight title="Menu">
                  <MenuItem eventKey="1" href="/">Home</MenuItem>
                  <MenuItem eventKey="2" href="/historia">Historia</MenuItem>
                  <MenuItem eventKey="3" href="/proyectos">Proyectos</MenuItem>
                  <MenuItem eventKey="4" href="/talleres">Talleres</MenuItem>
                  <MenuItem eventKey="5" href="/tiendas">Compra aquí</MenuItem>
                  <MenuItem eventKey="6" href="/noticias">Noticias</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="7" href="/contacto">Contacto</MenuItem>
                </DropdownButton>
              </ButtonToolbar>     
            </Col>
          </Row>            
      );
    }
  }
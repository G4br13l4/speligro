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
                  <MenuItem eventKey="1" ><Link to="/">Home</Link></MenuItem>
                  <MenuItem eventKey="2" ><Link to="/historia">Historia</Link></MenuItem>
                  <MenuItem eventKey="3" ><Link to="/proyectos">Proyectos</Link></MenuItem>
                  <MenuItem eventKey="4" ><Link to="/talleres">Talleres</Link></MenuItem>
                  <MenuItem eventKey="5" ><Link to="/tiendas">Compra aquí</Link></MenuItem>
                  <MenuItem eventKey="6" ><Link to="/noticias">Noticias</Link></MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="7" ><Link to="/contacto">Contacto</Link></MenuItem>
                </DropdownButton>
              </ButtonToolbar>     
            </Col>
          </Row>            
      );
    }
  }
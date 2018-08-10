import React, { Component } from 'react';
import {MenuItem, Row, Col,Button, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './../css/NavBar.css';

export class NavBar extends Component {
  constructor(props,context){
    super(props,context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }  
  
  handleHide(){
    this.setState({show:false});
  }

  render() {
      return ( 
          <Row className="nav">
            <Col xs={4} md={4} className="box_lang">
              <Button>ES</Button><Button>EN</Button>
            </Col>
            <Col xs={4} md={4} className="box_logo">     
              <Link to="/"><img className="logo" src="assets/logo.jpg"/></Link>
            </Col>
            <Col xs={4} md={4} className="box_menu">
              <Button onClick={() => this.setState({show:true})}>
                Menu
              </Button>     
            </Col>

            <Modal
                show={this.state.show}
                onHide={this.handleHide}
                container={this}
                aria-labellledby="container-modal-title"
              >
                <Modal.Header closeButton>
                    <Modal.Title id="container-modal-title">
                      <Link to="/" onClick={() => this.setState({show:false})}>Menu</Link>
                    </Modal.Title>
                </Modal.Header>
                <ListGroup onClick={() => this.setState({show:false})}>
                  <ListGroupItem className="menu-op"><Link to="/talleres">Talleres</Link></ListGroupItem>
                  <ListGroupItem className="menu-op"><Link to="/bordados">Bordados Personalizados</Link></ListGroupItem>
                  <ListGroupItem className="menu-op"><Link to="/kits">Kits de Bordado</Link></ListGroupItem>
                  <ListGroupItem className="menu-op"><Link to="/club">Club de Bordado</Link></ListGroupItem>
                  <ListGroupItem className="menu-op"><Link to="/contacto">Contacto</Link></ListGroupItem>
                </ListGroup>                           
              </Modal>
          </Row>            
      );
    }
  }
import React, { Component } from 'react';
import { Row, Col, Grid, Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CustomCarousel} from './Carousel';
import './../css/WorkshopCard.css';

export class WorkshopCard extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    render() {
      return (
            <Row>
                <Col xs={12} className="workshop-card">
                    <img src={this.props.img}/>
                    <div>
                        <h3>{this.props.title}</h3>
                    </div>
                    <Button className="btn" onClick={this.handleShow}>Ver más</Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="workshop-modal" closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header >
                    <Modal.Body className="workshop-modal">
                        <p>Impartido por {this.props.teacher}</p>
                        <p>Duración: {this.props.duration} (divididas en {this.props.sessions}) </p>
                        <p>Horario: {this.props.time}</p> 
                        <p>Lugar: {this.props.place}</p>
                        <p>Descripción: {this.props.description}</p>
                        <p>Costo: {this.props.normalCost} (incluye material)</p>
                        <p>Costo para miembros del Club de Bordado: {this.props.memberCost} (incluye material)</p>
                        <p><Link to="/club">¿Aún no eres parte del club? ¿Quieres saber más?</Link></p>
                        <CustomCarousel 
                            height={{height:"45vh"}}
                            firPhoto={this.props.firPhoto}
                            secPhoto={this.props.secPhoto} 
                            thiPhoto={this.props.thiPhoto}
                        />
                        
                        <h4>¿Cómo me inscribo? <Link to="/registro">da click aquí</Link></h4>
                    </Modal.Body>
                    <Modal.Footer className="workshop-modal">
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
      );
    }
}
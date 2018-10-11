import React, { Component } from 'react';
import { Row, Col, Grid, Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CustomCarousel} from '../shared/Carousel';
import '../../App.css';

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
                        <p>Impartido por {this.props.teacher}</p>
                    </Modal.Header >
                    <Modal.Body className="workshop-modal"> 
                        <p><span className="bold">Duración: </span>{this.props.duration} (en {this.props.sessions}) </p>
                        <p><span className="bold">Horario: </span>{this.props.timeday}</p> 
                        <p><span className="bold">Lugar: </span>Club de Bordado ( Colonia del Valle Norte, CDMX)</p>
                        <p><span className="bold">Descripción: </span>{this.props.description}</p>
                        <p><span className="bold">Próximas fechas: </span></p> 
                        {this.props.dates} 
                        <p><span className="bold">Costo: </span>{this.props.normalCost} (incluye material)</p>
                        <p><span className="bold">Costo para miembros del Club de Bordado: </span>{this.props.memberCost} (incluye material)</p>
                        <p><Link to="/club">¿Aún no eres parte del club? ¿Quieres saber más?</Link></p>
                        <CustomCarousel 
                            height={{height:"45vh"}}
                            firPhoto={this.props.firPhoto}
                            secPhoto={this.props.secPhoto} 
                            thiPhoto={this.props.thiPhoto}
                        />
                        <h4>¿Cómo me inscribo? <a href="mailto:hola@silviapeligro.com" target="_blank">da click aquí</a></h4>
                    </Modal.Body>
                    <Modal.Footer className="workshop-modal">
                        <Button onClick={this.handleClose}>Cerrar</Button>
                    </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
      );
    }
}
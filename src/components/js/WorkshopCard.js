import React, { Component } from 'react';
import { Row, Col, Grid, Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
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
    const popover = (
            <Popover id="modal-popover" title="Sólo miembros">
              {this.props.memberCost} ( incluye material)
            </Popover>
    );
      return (
            <Row>
                <Col xs={12}>
                    <img src={this.props.img}/>
                    <div>
                        <h3>{this.props.title}</h3>
                        <span>impartido por {this.props.teacher}</span>
                    </div>
                    <Button className="btn" onClick={this.handleShow}>+ Info</Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>
                        impartido por {this.props.teacher}
                        </span>
                        <p>Duración: {this.props.duration} (divididas en {this.props.sessions}) </p>
                        <p>Horario: {this.props.time}</p> 
                        <p>Descripción: {this.props.description}</p>
                        <p>Costo: {this.props.normalCost} (incluye material)</p>
                        <p>{' '}
                        <OverlayTrigger overlay={popover}>
                            <a href="#popover">*Costo</a>
                        </OverlayTrigger>{' '}
                            para miembros del Club de Bordado
                        </p>

                        <span>Fechas:</span>
                        <ul>                            
                            <li>{this.props.firstDate}</li>
                            <li>{this.props.secDate}</li>
                        </ul>

                        <span>¿Cómo puedes inscribirte?</span>
                        <p>Para inscribirte a los talleres impartidos en el Club de Bordado, solo necesitas hacer un depósito bancario (Banorte, OXXO, SevenEleven) por el total o el 50% del costo del taller</p>
                        <p>Envía un correo a silviapeligro@gmail.com para pedir los datos bancarios</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
      );
    }
}
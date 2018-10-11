import React, { Component } from 'react';
import { Row, Col, Grid, Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class KitCard extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.showBasic = this.showBasic.bind(this);
        this.closeBasic = this.closeBasic.bind(this);
        this.showDeluxe = this.showDeluxe.bind(this);
        this.closeDeluxe = this.closeDeluxe.bind(this);
    
        this.state = {
          basic: false,
          deluxe: false
        };
    }

    closeDeluxe() {
        this.setState({ deluxe: false });
    }
    
    showDeluxe() {
        this.setState({ deluxe: true });
    }
    
    closeBasic() {
        this.setState({ basic: false });
    }
    
    showBasic() {
        this.setState({ basic: true });
    }

    render() {
      return (
            <Row>
                <Col xs={12} className="kitcard">
                    <div>
                        <img src={this.props.img}/>
                    </div>
                    <h4 className="bold">{this.props.name}</h4>
                    <p>{this.props.summary}</p>
                    <Row>
                        <Col xs={3}>
                            <Button className="btn bold" onClick={this.showBasic}>Kit Básico</Button>
                        </Col>
                        <Col xs={3}>
                            <Button className="btn bold" onClick={this.showDeluxe}>Kit Deluxe</Button>
                        </Col>
                    </Row>
                    
                    <Modal show={this.state.basic} onHide={this.closeBasic}>
                    <Modal.Header className="workshop-modal" closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                        <p className="kit-title">Kit Básico</p>
                    </Modal.Header >
                    <Modal.Body className="workshop-modal kit-modal">
                        <Row className="h-center">
                            <Col xs={12} className="kit-video">
                                <img
                                    src="https://dummyimage.com/600x400/ab9fab/ffffff&text=En+construcci%C3%B3n"
                                    // autoPlay="true"
                                />
                                
                            </Col>
                            <Col xs={12}>
                                <div>
                                    <p>Este kit incluye :</p>
                                    {this.props.basic}
                                </div>
                            </Col>
                            <Col xs={8} className="logo-store">
                                <a href={this.props.basicKichink}><img src="assets/kichink.png"/></a>
                            </Col>
                            <Col xs={12} className="mail-cost">
                                <p>*El costo de envío se calcula en la tienda en línea</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="workshop-modal">
                        <Button onClick={this.closeBasic}>Close</Button>
                    </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.deluxe} onHide={this.closeDeluxe}>
                    <Modal.Header className="workshop-modal" closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                        <p className="kit-title">Kit Deluxe</p>
                    </Modal.Header >
                    <Modal.Body className="workshop-modal kit-modal">
                        <Row className="h-center">
                            <Col xs={12} className="kit-video">
                                <video 
                                    src="https://media.giphy.com/media/dYx2NhLGY8LPBKZapw/giphy.mp4"
                                    autoPlay="true"
                                >
                                </video>
                            </Col>
                            <Col xs={12}>
                                <div>
                                    <p>Este kit incluye :</p>
                                    {this.props.deluxe}
                                </div>
                            </Col>
                            <Col xs={8} className="logo-store">
                                <a href={this.props.deluxeKichink}><img src="assets/kichink.png"/></a>
                            </Col>
                            <Col xs={12} className="mail-cost">
                                <p>*El costo de envío se calcula en la tienda en línea</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="workshop-modal">
                        <Button onClick={this.closeDeluxe}>Close</Button>
                    </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
      );
    }
}
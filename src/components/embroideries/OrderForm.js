import React, { Component } from 'react';
import { Row, Col, FormControl, ControlLabel, Checkbox, Radio, FormGroup, HelpBlock, Button} from 'react-bootstrap';
import { Redirect } from 'react-router';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

export class OrderForm extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});   
    }

    async handleSubmit(e){
        e.preventDefault();
        const {name, email, message} = this.state;
        <Redirect to='/gracias' /> 
        
    }

    render() {
      return (
            <Row>
                <Col xs={11}>
                    <h3>¿Quieres hacer un pedido personalizado?</h3>
                    <p>Por favor llena este formulario y pronto me comunicaré contigo</p>
                </Col>
    
                <Col xs={11}>
                <form onSubmit={this.handleSubmit}>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        name="name"
                        label="Nombre"
                        placeholder="Escribe tu nombre"
                        onChange = {this.handleChange}
                    />
                   
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                        <ControlLabel>Correo</ControlLabel>
                        <FormControl 
                            type="email"
                            name="email"
                            placeholder="Escribe tu correo"
                            onChange = {this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    
                    <FormGroup>
                        <Row>
                            <Col xs={12}>
                                <span>Tamaño</span>
                            </Col>
                            <Col xs={4}>
                            <div className="h-center">
                                <Radio name="radioGroup">
                                </Radio>
                                <div id="s-size">
                                    <p>Medidas</p>
                                </div>
                            </div>
                            </Col>
                            <Col xs={4}>
                            <div className="h-center">
                                <Radio name="radioGroup">
                                </Radio>
                                <div id="m-size">
                                    <p>Medidas</p>
                                </div>
                            </div>
                            </Col>
                            <Col xs={4}>
                                <div className="h-center"> 
                                    <Radio name="radioGroup">
                                    </Radio>
                                    <div id="l-size">
                                        <p>Medidas</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Cuéntame que te gustaría que te bordara</ControlLabel>
                        <FormControl id="order-textarea"
                            componentClass="textarea" 
                            placeholder="..."
                            name="message"
                            onChange = {this.handleChange} 
                        />
                    </FormGroup>
                
                    <Button type="submit">Enviar</Button>
                    </form>
                </Col>
            </Row>
      );
    }
}

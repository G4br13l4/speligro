import React, { Component } from 'react';
import { Row, Col, FormControl, ControlLabel, Checkbox, Radio, FormGroup, HelpBlock, Button} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

export class ContactForm extends Component {
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

        
    }

    render() {
      return (
            <Row>
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
                    
                    <FormGroup controlId="formControlsTextarea" bsSize="large">
                        <ControlLabel>Mensaje</ControlLabel>
                        <FormControl 
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

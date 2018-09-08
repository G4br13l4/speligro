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

export class RegisterForm extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            workshop: '',
            date: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
        if(e.target.name =="date")
        this.setState({[e.target.name]: this.textInput.value});
         
    }

    async handleSubmit(e){
        e.preventDefault();

        const {name, workshop, date, email} = this.state;  
    }

    render() {
      return (
            <Row>
                <Col xs={11}>
                <p>Para inscribirte a alguno de los talleres, solo necesitas hacer un depósito bancario (Banorte, OXXO, SevenEleven) por el total o el 50% del costo del taller</p>
                <p>Envía un correo desde aquí o directamente a silviapeligro@gmail.com para pedir los datos bancarios</p>
                <form onSubmit={this.handleSubmit}>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        name="name"
                        label="Nombre"
                        placeholder="Escribe tu nombre"
                        onChange = {this.handleChange}
                    />

                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        name="workshop"
                        label="Taller"
                        placeholder="Nombre del taller"
                        onChange = {this.handleChange}
                    />

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Fecha</ControlLabel>
                        <FormControl name="date" inputRef={input => this.textInput = input} componentClass="select" onChange = {this.handleChange}>
                            <option>Elige una fecha</option>
                            <option value="Fecha1">Fecha 1</option>
                            <option value=" Fecha2">Fecha 2</option>
                        </FormControl>
                    </FormGroup>

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
                
                    <Button type="submit" href="/gracias" >Enviar</Button>
                    </form>
                </Col>
            </Row>
      );
    }
}

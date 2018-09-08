import React, { Component } from 'react';
import { Row, Col, Grid} from 'react-bootstrap';

export class Title extends Component {
    render() {
      return (
            <Row className="after-nav">
                <Col xs={12}>
                    <h2>{this.props.title}</h2>
                </Col>
            </Row>
      );
    }
}
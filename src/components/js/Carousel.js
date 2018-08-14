import React, { Component } from 'react';
import { Carousel , Row, Col} from 'react-bootstrap';

let styles = {
    height:"100%",
}

export class CustomCarousel extends Component {
    render() {
      return (
            <Row>
                <Col xs={12} md={8} className="box_carousel no-pad">
                <Carousel>
                    <Carousel.Item style={this.props.height}>
                        <img style={styles} src="assets/calendar.jpg" />
                    </Carousel.Item>
                    <Carousel.Item style={this.props.height}>
                        <img style={styles} src="assets/anuncio.jpg" />
                    </Carousel.Item>
                    <Carousel.Item style={this.props.height}>
                        <img style={styles} src="assets/pedido.jpg" />
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
      );
    }
}
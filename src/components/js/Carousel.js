import React, { Component } from 'react';
import { Carousel , Row, Col} from 'react-bootstrap';
import './../css/Carousel.css';

let styles = {
    height:"60vh",
}
export class CustomCarousel extends Component {
    render() {
      return (
            <Row>
                <Col xs={12} md={8} className="box_carousel no-pad">
                <Carousel>
                    <Carousel.Item>
                        <img style={styles} src="assets/calendar.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={styles} src="assets/anuncio.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={styles} src="assets/pedido.jpg" />
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
      );
    }
}
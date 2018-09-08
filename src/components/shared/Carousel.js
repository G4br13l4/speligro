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
                        <img style={styles} src={this.props.firPhoto} />
                    </Carousel.Item>
                    <Carousel.Item style={this.props.height}>
                        <img style={styles} src={this.props.secPhoto}/>
                    </Carousel.Item>
                    <Carousel.Item style={this.props.height}>
                        <img style={styles} src={this.props.thiPhoto}/>
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
      );
    }
}
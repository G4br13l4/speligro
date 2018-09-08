import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import {NavBar} from '../shared/NavBar';
import {Footer} from '../shared/Footer';

class ThankYouPage extends Component {
    render() {
      return (
            <Grid fluid>
                <NavBar/>
                <Row>
                    <Col xs={12}>
                        <h2>¡Gracias!</h2>
                        <h4>Pronto me pondré en contacto contigo</h4>
                    </Col>
                    <Col xs={12}>
                        <img src="https://lh3.googleusercontent.com/LJVdsZZBC2Tr-Zf3RLzE1Kwv6LuMF62jfEyz-Cf1OR5KqnPRGXIL-j4-c4bvmVCca4rQ_hWklm5wlN0GwCb67Zwt9YW8TjEFINGeLvkl8ftvaTOQdibXFSEkDI8mLJeIHq4nGtei7rt1SrAQEUSIPNg8Ixe3kyvGV_eC5tX55VfJONNpiekx3H-yZYv1u3mWIyPeZ4xLhlfOno0E6XQdi6mfdTCYT-6p0HRAZeRxUqLekQMmYGfJUxUd2lZ8BfFKpT-D18RhF-qyVwW7lGhO6cxxqKoEZO-GH-NWgPkmCdCmNgciUXDLr2roKn85NrTJIkIWBWp8JXADRaJr5-uUakLnHk6hlNKo7rd3BG-9gPvlzIT635c2GxBOSIHaqr9kSW4N7UcA91mj63tu8-6UmuLmJcf58mwNzlj9NLlG_IKMBeUunyGyWkFLnUgzBNMoA69hy2tQOqzbbpEwTcug4PKrcs3eN5RaDqVtLeoX82o_4ownp307LVK66Gr1-akug3ImerTPV8qK2rkvNKZydCvp6p4lCarFn_geYn-9Fx2UxQpZ59AZYDcdLvm-Kmv_ptrc8ztqLZf8xkkCX11Rsw9joDK87HY5ejemay4s=w1052-h789-no"/>
                    </Col>
                </Row>
                <Footer/>
            </Grid> 
      );
    }
}

export default ThankYouPage;
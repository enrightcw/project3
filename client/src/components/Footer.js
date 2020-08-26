import React from 'react';
import {Container} from '@material-ui/core';
import Row from '@material-ui/core/';
import Col from '@material-ui/core';

function Footer()  {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                {/* <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm= {12}>
                        Grubble
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by the Lost Souls 
                    </Col>
                </Row> */}
            </Container>
        </footer>
    )
}

export default Footer;
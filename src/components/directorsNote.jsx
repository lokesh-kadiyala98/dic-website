import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';

const DirectorsNote = () => {
    return ( 
        <section className="container">
            <Row className="text-center">
                <Col>
                    <h1 className="underlined-h1">Directors Note</h1>
                </Col>
            </Row>
            <div className="directors-note">
                <Media>
                    <Row>
                        <Col xs={12} md={2}>
                            <img
                                className="directors-note-img"
                                src={require('../resources/img/director.png')}
                                alt="Generic placeholder"
                            />
                        </Col>
                        <Col xs={12} md={10}>
                            <Media.Body>
                                <blockquote className="directors-note-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                </blockquote>
                            </Media.Body>
                        </Col>
                    </Row>
                </Media>
            </div>
        </section>
    );
}
 
export default DirectorsNote;
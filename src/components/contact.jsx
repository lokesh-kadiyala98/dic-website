import React from 'react';
import { Breadcrumb, Container, Accordion, Card, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return ( 
        <Container>
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">Managing Director</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col>Address:</Col>
                                <Col>Hospet Rd, <br />Narayanappa Compound, <br />Fort, <br />Ballari, <br/>Karnataka 583104</Col>
                            </Row>
                            <Row>
                                <Col>Mobile:</Col>
                                <Col><a href="tel:+91 8392242370">+91 8392242370</a></Col>
                            </Row>
                            <Row>
                                <Col>Email:</Col>
                                <Col><a href="mailto:lokesh.pandu1998@gmail.com?Subject=Web%20Project" target="_top">srujan@dicballari.com</a></Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">Developers</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Row>
                                <Col md={{ span: 4, offset: 1 }} className="mb-3">
                                    <Card>
                                        <Card.Img className="developer-img" src={require('../resources/img/Lokesh K.jpg')}/>
                                        <Card.Body>
                                            <Card.Title>Lokesh Kadiyala</Card.Title>
                                            <Card.Text>
                                                <a href="mailto:lokesh.pandu1998@gmail.com?Subject=Web%20Project" target="_top">lokesh.pandu1998@gmail.com</a><br />
                                                <a href="tel:+91 9959659129">+91 9959656129</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={{ span: 4, offset: 2}} className="mb-3">
                                    <Card>
                                        <Card.Img className="developer-img" src={require('../resources/img/Kiran C.jpeg')}/>
                                        <Card.Body>
                                            <Card.Title>Kiran C</Card.Title>
                                            <Card.Text>
                                                <a href="tel:+91 9206668485">+91 9206668485</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
     );
}
 
export default Contact;
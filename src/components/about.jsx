import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import LinkBox from './misc/linkBox';
import { NavLink } from 'react-router-dom';

const About = () => {
    return ( 
        <Container>
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <NavLink to="/ebiz" ><LinkBox body="eBiz Karnataka" /></NavLink>
                </Col>
                <Col>
                    <NavLink to="/udyogMitra" ><LinkBox body="Karnataka Udyog Mitra" /></NavLink>
                </Col>
                <Col>
                    <NavLink to="/deptOfIndustriesAndCommerce" ><LinkBox body="Department of Industries and Commerce" /></NavLink>
                </Col>
            </Row>

        </Container>
     );
}
 
export default About;
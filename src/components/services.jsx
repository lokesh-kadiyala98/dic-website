import React from "react";
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import LinkBox from './misc/linkBox';

const Services = () => {
  return (
    <Container>
      <Breadcrumb className="mb-5">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Services</Breadcrumb.Item>
      </Breadcrumb>
      <section>
        <Row>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <LinkBox body="PMEGP ~ Prime Minister's Employment Generation Programme" />
          </Col>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <LinkBox body="CMEGP ~ Chief Minister's Employment Generation Programme" />
          </Col>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <LinkBox body="I &amp; C ~ Incentives and Concessions" />
          </Col>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <LinkBox body="KIADB ~ Karnataka Industrail Area Development Board" />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Services;

import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Aim = () => {
    return ( 
        <div className="container-fluid  aim-container">
            <Row className="text-center">
                <Col>
                    <h1 className="underlined-h1">Our Aims</h1>
                </Col>
            </Row>
            <Row>
                <Col className="aim" lg={3}>
                    <span className="aim-number">1</span> 
                    <span className="aim-text">Creating conducive atmosphere for setting up new industries in the district and to enhance the business competency of the existing industries.</span>
                </Col>
                <Col className="aim" lg={3}>
                    <span className="aim-number">2</span> 
                    <span className="aim-text">Under “Wings to Fly”, New concept of entrepreneurship, encourage the Start ups in the district.</span>
                </Col>
                <Col className="aim" lg={3}>
                    <span className="aim-number">3</span> 
                    <span className="aim-text">Disseminating information of potential of investment in various sectors in the district.</span>
                </Col>
                <Col className="aim" lg={3}>
                    <span className="aim-number">4</span> 
                    <span className="aim-text">To understand the problems faced by the existing industrialists and try to find the solutions as far as possible at the district level. District administration is also encouraging new Start ups to set up industries under “Wings to Fly”.</span>
                </Col>    
            </Row>
        </div>
    );
}
 
export default Aim;
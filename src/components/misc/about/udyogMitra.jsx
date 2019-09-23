import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';

const UdyogMitra = () => {
    return ( 
        <Container>
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="../about">About</Breadcrumb.Item>
                <Breadcrumb.Item active>Udyog Mitra</Breadcrumb.Item>
            </Breadcrumb>
            
            <p>KARNATAKA UDYOG MITRA is a Government of Karnataka organization. Constituted under the aegis of the Commerce &amp; Industries Department, KARNATAKA UDYOG MITRA is an initiative from the State to promote and facilitate investments, and assist investors.</p>
            <p>Setting out to make an investment is akin to embarking upon an important journey. Quite naturally, your concerns revolve around how to prepare for the journey, the paraphernalia required and most importantly, achieving the objectives that you aimed for.</p>
            <p>At KARNATAKA UDYOG MITRA, we understand your need for a well chalked out plan and a clear road map to reach your destination with precise and user-friendly directions. We have been providing the crucial direction and guidance for crores of investors for the last 15 years.</p>
            <p>KARNATAKA UDYOG MITRA is a 'single point of contact’ for all investors who are looking at setting up businesses in Karnataka. As the nodal agency, our role is to facilitate investments and execute initiatives to enable a smooth transition, from receiving an investment proposal to the eventual implementation of the project.</p>
            <p>As the investment promotion and facilitation agency of the State Government, KARNATAKA UDYOG MITRA is the Secretariat for grant of approvals and sanction of infrastructure facilities for approved projects.</p>
        </Container>
    );
}
 
export default UdyogMitra;
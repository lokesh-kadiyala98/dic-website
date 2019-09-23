import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';

const EBiz = () => {
    return ( 
        <Container>
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="../about">About</Breadcrumb.Item>
                <Breadcrumb.Item active>EBiz</Breadcrumb.Item>
            </Breadcrumb>
            <h5 className="font-weight-bold">Welcome to Karnataka - Welcome to the future.</h5>
            <p>Focused efforts by the State, investor friendly initiatives, adequate natural resources, enabling infrastructure, 
                quality manpower and entrepreneurial spirit of investors have helped Karnataka take pride of place in terms of the rapid strides it has made in the diverse domains.</p>
            
            <h5 className="font-weight-bold">Karnataka - surging forward with leadership</h5>
            <p>Today, the State is driving domestic growth, crafting careers and creating wealth through a potent mix of resource based, skill based, technology and knowledge based products and services. Karnataka has an enduring tradition of tapping technology to trace a steady growth curve across diverse sectors of the economy - earning the enviable tag of being the most technology savvy State.</p>
            
            <h5 className="font-weight-bold">KUM-Karnataka Udyog Mitra</h5>
            <p>Karnataka Udyog Mitra(KUM), A Government of Karnataka undertaking, appointed as a “single point contact” for Project proposal. Project proponent with investment more than INR 15 crores need to contact Karnataka Udyog Mitra to understand the salient features of Karnataka, its unique advantages and discuss about project identification, suitable location, human resources, approvals required, procedures involved etc..</p>
            <p>KUM works on the model of a Single Window Clearance mechanism. Karnataka Udyog Mitra will liaise between your organization and the various government departments for assistance in land identification, land allocation, power, water, environmental clearance, etc. to ensure smooth and timely implementation of your projects. You no longer need to go from department to department or wait in line or hop multiple websites for information and services.</p>
            <p> Projects with investments between INR 15 to 500 crores, will be cleared by the State Level Single Window Clearance Committee (SLSWCC), chaired by the Minister for Large and Medium Scale Industries, Government of Karnataka.</p>
            <p> If the investment is above INR 500 crores it will be cleared by the State High Level Clearance Committee (SHLCC), chaired by the Chief Minister, Govt. of Karnataka.</p>
            
            <h5 className="font-weight-bold">All you need to do is to just follow a simple and structured plan to start your business:</h5>
            <ol>
                <li>Register &amp; Apply online for New Investment or Amend the Earlier projects Approved;</li>
                <li>Login with the User Credentials;</li>
                <li>Fill in the information;</li>
                <li>Upload Digitally Signed Documents;</li>
                <li>Make electronic payments towards statutory (processing) fees;</li>
                <li>Track status of the application online;</li>
                <li>Receive alerts via email and SMS on the progress of submitted application;</li>
                <li>Interact online with the Karnataka Udyog Mitra such as responding to queries/clarifications, submit additional documentary artifacts;</li>
                <li>Obtain electronic copies of Approval letter;</li>
            </ol>
        </Container>
    );
}
 
export default EBiz;
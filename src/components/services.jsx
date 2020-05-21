import React, { Component } from "react";
import jwtDecode from 'jwt-decode'
import ReactModal from 'react-modal'
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import LinkBox from './misc/linkBox';
import Login from './misc/login';

class Services extends Component {
  state = { 
    showModal: false
  }

  componentDidMount() {
    this.updateAdminCookie()
  }

  updateAdminCookie = () => {
    try {
      const adminToken = localStorage.getItem('admin-token')
      const { admin } = jwtDecode(adminToken)
      this.setState({ admin })
    } catch(ex) { }
  } 

  closeModal = () => {
    this.updateAdminCookie()
    this.setState({ showModal: false })
    toast.success('Logged in as Admin')
  }

  render() { 
    return (  
      <Container>
        <ToastContainer autoClose={5000} />
        <Breadcrumb className="mb-5">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Services</Breadcrumb.Item>
        </Breadcrumb>
        
        <Row>
          <Col sm={12} md={4} lg={3} className="mb-3">
            <NavLink to="/traineeProfileForm"><LinkBox body="Trainee Profile" /></NavLink>
          </Col>
          {this.state.admin ?
            <Col sm={12} md={4} lg={3} className="mb-3">
              <NavLink to="/adminDashboard">
                <LinkBox body="Admin Dashboard" />
              </NavLink>
            </Col>
            :
            <Col sm={12} md={4} lg={3} className="mb-3" onClick={() => {this.setState({ showModal: true })}}>
              <LinkBox body="Admin Dashboard" />
            </Col>
          }
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
        <ReactModal 
          id="user-report"
          ariaHideApp={false}
          isOpen={this.state.showModal}
          contentLabel="Admin Login">
          <button className="close" onClick={() => {this.setState({ showModal: false })}}><i className="fas fa-times"></i></button>
          <div className="center">
            <Login finally={this.closeModal} />
          </div>
        </ReactModal>
      </Container>
    );
  }
}

export default Services;

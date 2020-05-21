import React, { Component } from 'react';
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Breadcrumb, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

import config from '../../config.json'
import Login from './login';
import TraineeDetails from './traineeDetails';

class AdminDashboard extends Component {
    state = { 
        showModal: false,
        modalId: '',
        admin: {},
        data: []
    }

    async componentDidMount() {
        try {
            this.updateAdminCookie()

            const { data } = await axios.get(config.apiEndpoint + '/trainee_profile_data')
            this.setState({ data: data.items })
        } catch(ex) {
            if(!ex.response) {
                toast.error('Reported Developer: Unknown Error')
            } else if(ex.response.status === 400 && ex.response.data) {
                toast.error(ex.response.data)
            }
        }
    }

    updateAdminCookie = () => {
        try {
            const adminToken = localStorage.getItem('admin-token')
            const { admin } = jwtDecode(adminToken)
            this.setState({ admin })
        } catch(ex) { }
    } 

    closeModal = () => {
        this.setState({ showModal: false, modalId: "" })
    }

    render() { 
        const { admin, data, showModal, modalId } = this.state
        
        //if admin cookie is not set, restrict access and allow for login
        if(!admin)
            return (
                <Container>
                    <h1 className="text-center mt-5">Access Restricted</h1>
                    <Login finally={this.updateAdminCookie}/>
                </Container>
            )
        
        if(showModal) {
            const profile = data.filter(e => e._id === modalId)
            return (
                <TraineeDetails details={profile} onclick={this.closeModal} />
            )
        }
        
        return ( 
            <Container>
                <Breadcrumb className="mb-3">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="services">Services</Breadcrumb.Item>
                    <Breadcrumb.Item active>Admin Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                
                <h2 className="text-center mb-5">Trainee Profile Submissions</h2>
                {data && data.length > 0?
                    data.map((e) => 
                        <li onClick={() => {this.setState({ showModal: true, modalId: e._id })}} className="trainee-profile-data mb-2" key={e._id}>
                            <b>Candidate Name:</b> {e.name}<br/>
                            <b>Address:</b> {e.address || 'NA'}<br/>
                            <b>Mobile:</b> {e.mobile || 'NA'}<br/>
                            <b>Email:</b> {e.emailId || 'NA'}<br/>
                        </li>
                    )
                    :
                    <div className="text-center">
                        <div className="spinner-grow text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p>This might take a while. <span role="img" aria-label="smiley">&#128578;</span></p>
                    </div>
                }
            </Container>    
        );
    }
}
 
export default AdminDashboard;
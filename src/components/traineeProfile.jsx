import React from 'react';
import Joi from 'joi-browser';
import Form from './misc/form/form';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TraineeProfile extends Form {
    
    constructor(props) {
        super(props)
        //save initial state to reset inputs
        this.baseState = this.state    

        this.apiEndPoint = 'http://localhost:5000/submit_profile'
    }

    state = {
        data: {
            image: '',
            name: '', 
            individualIdentityNumber: '', 
            fatherOrHusbandName: '', 
            motherName: '',
            guardianName: '',
            address: '',
            grama: '',
            gramaPanchayat: '',
            taluk: '',
            district: '',
            mobile: '',
            emailId: '',
            phone: '',
            alternativeMobile: '',
            age: '',
            educationQualification: '',
            religion: '',
            gender: '',
            category: '',
            yearlyIncome: ''
        },
        errors: { },
    };
    
    //schema is an object used by the Joi library to validate input 
    schema = {
        image: Joi.allow('').label('Image'),
        name: Joi.string().allow('').label('Name'),
        individualIdentityNumber: Joi.number().allow('').label('Individual Identity Number'),
        fatherOrHusbandName: Joi.string().allow('').label('Father/ Husband Name'),
        motherName: Joi.string().allow('').label('Mother Name'),
        guardianName: Joi.string().allow('').label('Guardian Name'),
        address: Joi.string().allow('').label('Address'),
        grama: Joi.string().allow('').label('grama'),
        gramaPanchayat: Joi.string().allow('').label('gramaPanchayat'),
        taluk: Joi.string().allow('').label('taluk'),
        district: Joi.string().allow('').label('district'),
        mobile: Joi.number().allow('').label('Mobile Number'),
        emailId: Joi.string().allow('').email({ minDomainAtoms: 2 }).label('Email'),
        phone: Joi.number().allow('').label('Phone'),
        alternativeMobile: Joi.number().allow('').label('Alternative Mobile'),
        age: Joi.number().allow('').label('Age'),
        educationQualification: Joi.string().allow('').label('Education Qualification'),
        religion: Joi.string().allow('').label('Religion'),
        gender: Joi.string().allow('').label('Gender'),
        category: Joi.string().allow('').label('Category'),
        yearlyIncome: Joi.number().allow('').label('Yearly Income')
    };
    
    //server code
    doSubmit = async () => {
        //call the server
        const formData =  new FormData()
        formData.append('image', this.state.data.image)

        const { image, ...stateData } = this.state.data

        var esc = encodeURIComponent;
        var query = Object.keys(stateData)
            .map(k => esc(k) + '=' + esc(this.state.data[k]))
            .join('&');

        const response = await axios.post(this.apiEndPoint + '?' + query, formData)
        console.log(response)
        if(response.data.error)
            toast.error(response.data.error)
        else
            toast.success('Success! Submitted')
        
        return;
        
    };

    render() { 

        const genderOptions = [
            [{_id: 'male', name: 'Male'}],
            [{_id: 'female', name: 'Female'}],
            [{_id: 'transgender', name: 'transgender'}],
        ]

        const categoryOptions = [
            [{_id: 'sc', name: 'SC'}],
            [{_id: 'male', name: 'ST'}],
            [{_id: 'minority', name: 'Minority'}],
            [{_id: 'pwd', name: 'PWD'}],
        ]

        return ( 
            <div className="container form-group mt-5" id="traineeProfile">
                
                <ToastContainer autoClose={5000}/>
                
                <Row className="text-center">
                    <Col><h1>ಅಭ್ಯರ್ಥಿ ವಿವರ / Trainee Profile</h1></Col>
                </Row>
                
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    {this.renderImageUpload('image', 'ಫೋಟೋ')}
                    {this.renderInput('name', 'ಅಭ್ಯರ್ಥಿಯ ಹೆಸರು', 'Name of the Candidate', 'Enter Name of the Candidate')}
                    {this.renderInput('individualIdentityNumber', 'ವೈಯಕ್ತಿಕ ಗುರುತಿನ ಸಂಖ್ಯೆ', 'Individual Identity Number', 'Enter Individual ID Number', 'number')}
                    {this.renderInput('fatherOrHusbandName', 'ತಂದೆ / ಗಂಡನ ಹೆಸರು', 'Father/ Husband Name', 'Enter Father/Husband Name')}
                    {this.renderInput('motherName', 'ತಾಯಿಯ ಹೆಸರು', 'Mother Name', 'Enter Mother Name')}
                    {this.renderInput('guardianName', 'ಪಾಲಕರ ಹೆಸರು', 'Guardian Name', 'If candidate is not dependent on parents')}
                    {this.renderInput('address', 'ವಿಳಾಸ', 'Address', 'Enter Address')}
                    {this.renderInput('grama', 'ಗ್ರಾಮ', 'Grama', 'Enter Grama')}
                    {this.renderInput('gramaPanchayat', 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ', 'Grama Panchayat', 'Enter Grama Panchayat')}
                    {this.renderInput('taluk', 'ತಾಲ್ಲೂಕು', 'Taluk', 'Enter Taluk')}
                    {this.renderInput('district', 'ಜಿಲ್ಲೆ', 'District', 'Enter District')}
                    <div className="group-form-elements mb-2 p-3">
                        <p>
                            ಸಂಪರ್ಕ ವಿವರಗಳು
                            <br/>
                            Contact Deatils
                        </p>
                        {this.renderInput('mobile', 'ಮೊಬೈಲ್', 'Mobile', 'Enter Contact Number', 'number')}
                        {this.renderInput('emailId', 'ಇಮೇಲ್ ಐಡಿ', 'Email', 'Enter Email')}
                    </div>
                    <div className="group-form-elements mb-2 p-3">
                        <p>
                            ಪರ್ಯಾಯ ಸಂಪರ್ಕ ವಿವರಗಳು
                            <br/>
                            Alternative Contact Details
                        </p>
                        {this.renderInput('phone', 'ಪರ್ಯಾಯ ಫೋನ್', 'Alternative Phone', 'Enter Alternative Phone', 'number')}
                        {this.renderInput('alternativeMobile', 'ಪರ್ಯಾಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ', 'Mobile No', 'Enter Contact Number', 'number')}
                    </div>
                    {this.renderInput('age', 'ವಯಸ್ಸು', 'Age', 'Enter Age')}
                    {this.renderInput('educationQualification', 'ಶಿಕ್ಷಣ ಅರ್ಹತೆ', 'Education Qulaification', 'Enter Education Qualificatioin')}
                    {this.renderInput('religion', 'ಧರ್ಮ', 'Religion', 'Enter Religion')}
                    {/* {this.renderInput('gender', 'ಲಿಂಗ', 'Gender', 'Enter Gender')} */}
                    {this.renderSelect('gender', 'ಲಿಂಗ', 'Gender', genderOptions)}
                    {this.renderSelect('category', 'ವರ್ಗ', 'Category', categoryOptions)}
                    {this.renderInput('yearlyIncome', 'ವಾರ್ಷಿಕ ಆದಾಯ', 'Yearly Income Rs.', 'Enter Yearly Income in Rs', 'number')}
                    {this.renderButton('Send It!!')}
                </form>
            </div>
         );
    };
}
 
export default TraineeProfile;
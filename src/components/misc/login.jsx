import React from 'react';
import Joi from 'joi-browser';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import Form from './form/form';
import config from '../../config.json'

class Login extends Form {

    constructor(props) {
        super(props)
    
        this.baseState = this.state
    }

    state = { 
        data: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    schema = {
        username: Joi.string().label('Username').min(3).max(30).required(),
        password: Joi.string().label('Password').min(4).max(15).required()
    }

    doSubmit = async () => {
        this.setState({ loading: true })
        try {
            var res = await axios.get(config.apiEndpoint + '/admin_login', { 
                params: {
                    username: this.state.data.username, 
                    password: this.state.data.password 
                }
            })
            localStorage.setItem('admin-token', res.data.token)
            this.setState({ loading: false })

            //execute finally function after login is successful
            this.props.finally()
        } catch (ex) {
            if(!ex.response) {
                toast.error('Reported Developer: Unknown Error')
            } else if(ex.response.status === 400 && ex.response.data) {
                const errors = {...this.state.errors}
                errors.username = ex.response.data.error
                this.setState({ errors, loading: false })
            }
        }
    }

    render() { 
        
        return ( 
            <div className="rounded">
                <p className="lead">Admin Login</p>
                {this.renderInput('username', 'Username', null, 'Enter Username', )}
                {this.renderInput('password', 'Password', null, 'Enter Password', 'password')}                
                {this.state.loading?
                    this.renderLoadingButton(' Loading')
                    :
                    this.renderButton('Login')
                }

            </div>
        );
    }
}
 
export default Login;
import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import TextArea from './textArea';
import Select from './select';
import UploadImage from './uploadImage';

class Form extends Component {
    state = { 
        data: {},
        errors: {},
    };

    //Validates an individual property. Called when a change occurs in input fields.
    handleChange = e => {

        const errors = {...this.state.errors};
        
        //currentTarget holds the field being changed
        const errorMessages = this.validateProperty(e.currentTarget);

        //currentTarget.name is the name given to input field that is being changed
        if(errorMessages) errors[e.currentTarget.name] = errorMessages;
        else delete errors[e.currentTarget.name];

        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        
        //for every key pressed in input field, call setState to update the state object.
        this.setState({ data, errors });
        
    };

    handleFileChange = e => {
        const data = {...this.state.data}
        data.image = e.target.files[0]
        this.setState({data})
    }
    
    //called by handleChange method to validate individual fields
    validateProperty = input => {
        const obj = { [input.name]: input.value };
        const schema = { [input.name]: this.schema[input.name] };
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    //called by handleSubmit method 
    validate = () => {
        //Joi.validate returns an object that has error details
        const results = Joi.validate(this.state.data, this.schema, { abortEarly: false });
        
        if(!results.error) return null;

        const errors = {}; 
        for (let item of results.error.details)
            errors[item.path[0]] = item.message;

        return errors;
    };

    //called when the form is submitted
    handleSubmit = e => {
        e.preventDefault();
        
        const errors = this.validate();
        //if there are errors then set the state with errors. 
        //Else set it with an empty object.
        this.setState({ errors: errors || {} });

        if (errors) return;
    
        this.doSubmit();
    };

    renderImageUpload(name, kannadaLabel, type='file', className='custom-file mb-3') {
        const { data, errors } = this.state;

        return (
            <UploadImage
                type={type}
                name={name}
                value={data[name].name}
                onChange={this.handleFileChange}
                kannadaLabel={kannadaLabel}
                className={className}
                error={errors[name]}
            />
        )
    }

    renderInput(name, kannadaLabel, label, placeholder, type='text', className='form-group') {
        const { data, errors } = this.state;

        return (
            <Input 
                type={type}
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                kannadaLabel={kannadaLabel}
                label={label}
                className={className}
                placeholder={placeholder}   
                error={errors[name]} 
            />
        )
    };

    renderSelect(name, kannadaLabel, label, options) {
        const { data, errors } = this.state;

        return (
            <Select 
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                kannadaLabel={kannadaLabel}
                options={options}
                label={label}   
                error={errors[name]} 
            />
        )
    };

    renderTextArea(name, label) {
        const { data , errors } = this.state;

        return (
            <TextArea
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                label={label}
                error={errors[name]}
            />
        )
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} type="submit" onClick={(e) => this.handleSubmit(e)} className="btn btn-outline-black form-group float-right">
                {label}
            </button>
        );
    };

    renderLoadingButton(label) {
        return (
            <button className="btn btn-outline-black form-group float-right" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {label}
            </button>
        )
    }
}
 
export default Form;
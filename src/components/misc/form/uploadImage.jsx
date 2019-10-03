import React from 'react';

const UploadImage = ({ type, name, kannadaLabel, label, value, onChange, error, placeholder, className }) => {
    console.log(className)
    return ( 
        <div className={className}>
            <input
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                id={name}
                className="custom-file-input mb-3"
            />
            <label className="custom-file-label" htmlFor={name}>{value || kannadaLabel}</label>
                {/*Truesy Notation. If there are errors show an info box.*/}
                {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default UploadImage;
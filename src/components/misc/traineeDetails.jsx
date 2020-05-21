import React from 'react';

import ReactModal from 'react-modal';

const TraineeDetails = ({ details, onclick }) => {
    console.log(details)
    return ( 
        <React.Fragment>
            <ReactModal 
                id="trainee-details"
                ariaHideApp={false}
                isOpen={true}
                contentLabel="Admin Login">
                        
                <button className="close" onClick={onclick}><i className="fas fa-times"></i></button>
                <div className="p-5">
                    HI
                </div>
            </ReactModal>
        </React.Fragment>
    );
}
 
export default TraineeDetails;
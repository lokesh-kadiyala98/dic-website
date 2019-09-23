import React from 'react';

const LinkBox = (props) => {
    return ( 
        <div className="card bg-dark text-white p-3 shine">
            <blockquote className="card-bodyquote">
                <p>{props.body}</p>
            </blockquote>
        </div>
    );
}
 
export default LinkBox;
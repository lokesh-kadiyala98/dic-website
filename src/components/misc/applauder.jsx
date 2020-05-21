import React, { Component } from 'react';

class Applauder extends Component {
    render() { 
        return (     
            <section className="container text-center">
                <p className="lead">If you like this website. Please, give us a heart.</p>
                <i onClick={this.props.onclick} className="fas fa-hand-holding-heart icon-big"></i>
                <p className="applauds-count">{this.props.applaudes}</p>
            </section>
        );
    }
}
 
export default Applauder;

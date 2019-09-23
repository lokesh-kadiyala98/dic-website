import React, { Component } from 'react';

class Applauder extends Component {
    state = { 
        applaudes: 0
    }

    incrementApplaudeCount() {
        this.setState( {applaudes: this.state.applaudes + 1} )
    }


    render() { 
        return (     
            <section className="container text-center">
                <p className="lead">If you like this website. Please, give us a heart.</p>
                <i onClick={() => this.incrementApplaudeCount()} className="fas fa-hand-holding-heart icon-big"></i>
                <p className="applauds-count">{this.state.applaudes}</p>
            </section>
        );
    }
}
 
export default Applauder;

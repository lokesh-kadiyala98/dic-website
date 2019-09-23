import React, { Component } from 'react';
import Carousel from './misc/carousel';
import Aims from './misc/aim';
import DirectorsNote from './directorsNote';
import Applauder from './misc/applauder';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Carousel />
                <Aims />
                <DirectorsNote />
                <Applauder />
            </div>
        );
    }
}
 
export default Home;
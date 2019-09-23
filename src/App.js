import React, { Component } from 'react';
import './resources/js/helperScript';
import './ext_resources/animate.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import EBiz from './components/misc/about/ebiz';
import UdyogMitra from './components/misc/about/udyogMitra';
import DeptOfIndustriesAndCommerce from './components/misc/about/deptOfIndustriesAndCommerce';
import Contact from './components/contact';
import Services from './components/services';
import NotFound from './components/notFound';
import Footer from './components/footer';

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/ebiz" component={EBiz} />
          <Route path="/udyogMitra" component={UdyogMitra} />
          <Route path="/deptOfIndustriesAndCommerce" component={DeptOfIndustriesAndCommerce} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="not-found" />
        </Switch>
        <Footer />
      </div>
    )
  }

}

export default App;

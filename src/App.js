import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import axios from 'axios';
import NavBar from './components/navbar';
import { toast, ToastContainer } from 'react-toastify';

import Home from './components/home';
import About from './components/about';
import EBiz from './components/misc/about/ebiz';
import UdyogMitra from './components/misc/about/udyogMitra';
import DOIC from './components/misc/about/deptOfIndustriesAndCommerce';
import Contact from './components/contact';
import Services from './components/services';
import TraineeProfile from './components/traineeProfile';
import NotFound from './components/notFound';
import Footer from './components/footer';
import AdminDashboard from './components/misc/adminDashboard';
import Logout from './components/logout';
import './resources/css/style.css';
import './resources/js/helperScript';
import './ext_resources/animate.css';
import config from './config.json';

class App extends Component {
  state = { 
    applaudes: 0,
  }

  async componentDidMount() {

    this.updateAdminCookie()
    try {
      const results = await axios(config.apiEndpoint)
      if (results.status === 200) {
        toast.info(results.data.message)
      }
    } catch {
      toast.error("APIEndpoint Error: Reported to DEV.")
    }
  }

  updateAdminCookie = () => {
    try {
      const adminToken = localStorage.getItem('admin-token')
      const { admin } = jwtDecode(adminToken)
      this.setState({ admin })
    } catch(ex) { }
  }

  onHeartClick = () => {
    this.setState({ applaudes: this.state.applaudes+1 })
  }

  render() {
    return(
      <div>
        <NavBar admin={this.state.admin} />
        <ToastContainer autoClose={5000} />
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/about" component={About} />
          <Route path="/ebiz" component={EBiz} />
          <Route path="/udyogMitra" component={UdyogMitra} />
          <Route path="/deptOfIndustriesAndCommerce" component={DOIC} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/traineeProfileForm" component={TraineeProfile} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={() => <Home onclick={this.onHeartClick} applaudes={this.state.applaudes} />}  />
          <Redirect to="not-found" />
        </Switch>
        <Footer />
      </div>
    )
  }

}

export default App;

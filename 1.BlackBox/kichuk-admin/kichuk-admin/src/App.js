import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Ads from './Components/main/Ads';
import Booking from './Components/main/Booking';
import Complaints from './Components/main/Complaints';
import Customer from './Components/main/Customer';
import Finance from './Components/main/Finance';
import Hr from './Components/main/Hr';
import Promocode from './Components/main/Promocode';
import Rating from './Components/main/Rating';
import Refferal from './Components/main/Refferal';
import Setting from './Components/main/Setting';
import Tracking from './Components/main/Tracking';
import Navbar from './Components/Navbar.js'
import Sidebar from './Components/Sidebar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="col-12">
          <Navbar/>
          </div>
        </div>
        <div className="row">
          <div className="col-2 p-0">
            <Sidebar/>  
          </div>
          
          <div className="col-10 d-flex justify-content-center align-items-center"> 
            <Switch>
              <Route path="/Customer" component={Customer} />
              <Route path="/Booking" component={Booking} />
              <Route path="/Rating" component={Rating} />
              <Route path="/Finance" component={Finance} />
              <Route path="/Promocode" component={Promocode} />
              <Route path="/Refferal" component={Refferal} />
              <Route path="/Ads" component={Ads} />
              <Route path="/Complaints" component={Complaints} />
              <Route path="/Hr" component={Hr} />
              <Route path="/Tracking" component={Tracking} />
              <Route path="/Setting" component={Setting} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

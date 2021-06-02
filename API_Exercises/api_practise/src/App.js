import React, { Component } from 'react';
import './App.css';
import './/bootstrap/css/bootstrap.min.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      userName: '',
      email: '',
      password: ''
    }
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitDetails = this.submitDetails.bind(this);
  }

  changeFullName = (event) => {
    this.setState({
      fullName: event.target.value
    })
  }
  changeUserName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  changePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submitDetails = (event) => {
      event.preventDefault()

      const registered = {
        fullName: this.state.fullName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      }
      console.log(registered)

      axios.post("http://localhost:4000/app/signup", registered)
      .then(res => console.log(res.data))

      this.setState({
        fullName: '',
        userName: '',
        email: '',
        password: '' 
      })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitDetails} className="form-div">
          <input 
            type="text" 
            placeholder="Full name"
            onChange={this.changeFullName}
            value={this.state.fullName}
            className="form-control form-group"
          />
  
          <input 
            type="text" 
            placeholder="Username"
            onChange={this.changeUserName}
            value={this.state.userName}
            className="form-control form-group"
          />
  
          <input 
            type="email" 
            placeholder="Email"
            onChange={this.changeEmail}
            value={this.state.email}
            className="form-control form-group"
          />
  
          <input 
            type="password" 
            placeholder="Password"
            onChange={this.changePassword}
            value={this.state.password}
            className="form-control form-group"
          />
  
          <input type="submit" className="btn btn-danger btn-block" value="submit" />
  
        </form>
      </div>
    );
  }
}
  export default App
import React, {Component} from 'react';


import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    destination:
  };
  this.state = this.state.bind(this)
}
handleChange (event => {

}) 

  
  render () {
return (
    <div className="App">
      <label>First Name:
        <input 
        type="text" 
        name="firstName" 
        value={this.state.firstName}
        onChange={this.handleChange}/>
      </label>
      <br />
      <label>Last Name:
        <input 
        type="text" 
        name="lastName" 
        value={this.state.lastName}
        onChange={this.handleChange}/>
      </label>
      <br />
      <label>Age:
        <input 
        type="text" 
        name="age" 
        value={this.state.age}
        onChange={this.handleChange}/>
      </label>
      <br />
      <label> Male
        <input Male
        type="radio" 
        name="gender" 
        value={this.state.gender}
        onChange={this.handleChange}/>
        </label>
        <br/>
        <label> Female
        <input 
        type="radio" 
        name="gender" 
        value={this.state.gender}
        onChange={this.handleChange}/>
        </label>
      <br />
      <select name="destination" value={this.state.destination}
        onChange={this.handleChange}>
        <option>Norway</option>
        <option>Nigeria</option>
        <option>Namibia</option>
        <option>North Darkota</option>
      </select>
      <br />
      <hr/>
      <p>Your name: {this.state.firstName} {this.state.lastName}</p>
      <p>Your age: {this.state.age}</p>
      <p>Gender: {this.state.gender}</p>
      
    </div>
  );
  }
  
}

export default App;

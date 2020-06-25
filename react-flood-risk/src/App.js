import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  state = {
    
  }

  render(){
    return (
      <div className="App">
        <h1>Flood Risk By Postcode</h1>
        <Form></Form>
      </div>
    );
  }
}

export default App;

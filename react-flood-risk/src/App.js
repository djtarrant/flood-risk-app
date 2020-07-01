import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import FloodRisk from "./components/FloodRisk";

class App extends Component {
  state = {
    
  }

  render(){
    return (
      <div className="App">
        <h1>Flood Risk By Postcode</h1>
        <Form></Form>
        <FloodRisk></FloodRisk>
      </div>
    );
  }
}

export default App;

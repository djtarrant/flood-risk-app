import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import FloodRisk from "./components/FloodRisk";

class App extends Component {
  state = {
    postcode: "CB42UP"
  }

  handleChange(newPostcode) {
    this.setState({
        postcode: newPostcode
    });
  };

  render(){
    return (
      <div className="App">
        <h1>Flood Risk By Postcode</h1>
        <Form changePostcode={this.handleChange.bind(this)} initialPostcode={this.state.postcode}></Form>
        <FloodRisk postcode={this.state.postcode}></FloodRisk>
      </div>
    );
  }
}

export default App;

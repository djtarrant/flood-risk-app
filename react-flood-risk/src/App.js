import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import FloodRisk from "./components/FloodRisk";

class App extends Component {
  state = {
    postcode: "M11AE"//example postcode
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
        <br/><br/>
        <em>Contains Environment Agency data licensed under the <a href = "http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>.</em>
      </div>
    );
  }
}

export default App;

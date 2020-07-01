import React from 'react';
import '../index.css';



class FloodRisk extends React.Component{
  state = {
    loading: false,
    postcode: "CB42UP",
    data: []
  }

componentDidMount(){
    this.setState({loading:true});
    let url = `http://localhost:5000/floodRisk/${this.state.postcode}`;
    console.log(url);
    fetch(url)
    .then((response) => {
        // Add this check and throw an error if it fails
        if (!response.ok) {
            throw Error(response.statusText);
        }
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        this.setState({
        data,
        loading: false
        })
    })
    .catch((error) => console.log(error));
}
  
render(){
    const { loading, data, postcode } = this.state;
    return(
      <div>
        {
        loading
          ? "Loading..."
          : <div>
              <h2>Postcode: {postcode}</h2>
                  <div className="location">
                    <strong>Flood Risk: {data.floodRisk}</strong><br/>
                    <em>Risk Date: {data.riskDate}</em><br/>
                  </div>
            </div>
        }
      </div>
    )
  }
}

export default FloodRisk

import React from 'react';
import '../index.css';



class FloodRisk extends React.Component{
  
    constructor(props){
        super();
        this.state = {
            loading: false,
            data: []
        }
    }

    callAPI(postcode){
        this.setState({loading:true});
        let url = `http://localhost:5000/floodRisk/${postcode}`;
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

    componentDidMount(){
        console.log("Mounted Component");
        this.callAPI(this.props.postcode);
    }

    componentDidUpdate(prevProps) {
        if(this.props.postcode !== prevProps.postcode) // Check if it's a new postcode
        {
            console.log(this.props.postcode, prevProps.postcode)
            this.callAPI(this.props.postcode);
        }
    } 
  
    render(){
        const { loading, data } = this.state;
        const { postcode } = this.props;
        return(
        <div>
            {
            loading
            ? "Loading..."
            : <div>
                <h2>Information about Postcode: {postcode}</h2>
                    <div className="location">
                        <strong>Co-ordinates: Lat: {data.latitude}, Long: {data.longitude}</strong><br/>
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

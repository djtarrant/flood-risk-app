import React from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            postcode: "",
            postcodeError: ""
        }
    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    validate = () => {
        let postcodeError = "";

        if(this.state.postcode < 1){
            postcodeError = 'Postcode empty';
        }

        if(postcodeError){
            this.setState({postcodeError});
            return false;
        }

        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            //clear form
            this.setState({postcodeError: ""});
            console.log(this.state); // seems to log before above setState - not sure why
        }else{
            console.log("There was a validation error");
        }
    }

    render(){
        const {postcode} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Postcode is: {postcode}</p>
                <div>
                    <label>Enter Postcode:</label>
                    <input 
                    name = "postcode"
                    value={this.state.postcode}
                    onChange={this.handleChange}
                    />
                </div>
                { this.state.postcodeError ? (
                <div style = {{ color: "red"}}>{this.state.postcodeError}</div>
                ) : null
                }
                <button type = "submit">Submit</button>
            </form>
        )
    }
}
import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            postcode: props.initialPostcode,
            postcodeError: ""
        }
    }

    handleChange = event => {
        this.handleSubmit(event);
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
        console.log(this.state, event.target.value);
        const isValid = this.validate();
        if(isValid){
            console.log("Input is valid");
            this.props.changePostcode(this.state.postcode);
            //clear error
            this.setState({postcodeError: ""});
            this.setState({
                postcode: event.target.value
            });
            console.log(this.state, event.target.value);
        }else{
            console.log("There was a validation error");
        }
    }

    render(){
        const {postcode, postcodeError} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Enter Postcode:</label>
                    <input 
                    name = "postcode"
                    value={postcode}
                    onChange={this.handleChange}
                    />
                </div>
                { postcodeError ? (
                <div style = {{ color: "red"}}>{postcodeError}</div>
                ) : null
                }
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form
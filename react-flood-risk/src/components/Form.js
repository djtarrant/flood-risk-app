import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            postcode: "",
            postcodeError: ""
        }
    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        //clear error
        this.setState({postcodeError: ""}); // added as the state is out of sync below
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
        const {postcode, postcodeError} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Postcode is: {postcode}</p>
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
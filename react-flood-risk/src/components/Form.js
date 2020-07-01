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
        //clear error
        this.setState({postcodeError: ""});
        let newPostcode = "";
        // if they have clicked the button
        if( event.type.value === 'undefined'){
            // TODO: we'd really like this to be the input field if called from handleSubmit! Better to put this logic in that function.
            newPostcode = this.state.postcode; 
        }else{
            newPostcode = event.target.value;
        }
        
        this.setState({
            postcode: newPostcode
        });
        this.props.changePostcode(newPostcode);
        console.log(this.state, event.target.value, newPostcode);
    }

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
            console.log("Input is valid");
            //clear error
            this.setState({postcodeError: ""});
            //this.handleChange(event); // TODO: this does not fire for some reason
            //console.log(event);
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
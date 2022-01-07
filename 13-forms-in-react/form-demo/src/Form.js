import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            mail : ""
        }
        this.handleChage = this.handleChage.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlesubmit(evt){
        evt.preventDefault();
        this.setState({username: "",mail: ""});
    }
    handleChage(evt){
        // console.log("HI");
        this.setState({[evt.target.name]: evt.target.value});
    }
    render() {
        return (
            <div>
                <h1> Demo</h1>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" 
                    name = "username"
                    value = {this.state.username}
                    onChange={this.handleChage}/>

                    <input type="text" 
                        name = "mail"
                        value = {this.state.mail}
                        onChange={this.handleChage}
                    />
                    <button>Submit</button>
                </form>

                

            </div>
        )
    }
}

export default Form;
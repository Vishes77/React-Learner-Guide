import React, { Component } from 'react';

class form extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({username: evt.target.value});
    }
    handleSubmit(){
        this.setState({username:""})
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button >Submit</button>
                </form>  
            </div>
        )
    } 

}
export default form;
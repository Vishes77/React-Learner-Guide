import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(){
        // this.props.addbox()
    }
    handleSubmit(){
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="height">Height : </label>
                    <input type="text" name="height" id="height" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="width">Width : </label>
                    <input type="text" name="width" id="width" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="Color">Color : </label>
                    <input type="text" name="Color" id="Color" onChange={this.handleChange}/>
                    <br />
                    <button>Create color Box</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;
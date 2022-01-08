import React, { Component } from 'react';

class multipleform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // multiple values change here through a single function.
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Multi input change</h1>
                <form action="">
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
                    <input type="text" name="password" placeholder="password" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default multipleform;
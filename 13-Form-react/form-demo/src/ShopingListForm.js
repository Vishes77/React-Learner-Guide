import React, { Component } from 'react';

class ShoppingListForm extends Component{
    constructor(props){
        super(props);
        this.state = {name:"" , qty : ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit(evt){ 
        evt.preventDefault();
        this.props.additem(this.state)
        // this.props.additem(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={this.state.name}  
                        onChange={this.handleChange}  
                    />
                    <label htmlFor="qty">qty</label>
                    <input 
                        type="text" 
                        name="qty" 
                        id="qty" 
                        value={this.state.qty}  
                        onChange={this.handleChange}  
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;
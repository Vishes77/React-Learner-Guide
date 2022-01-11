import React, { Component } from 'react';
import ShoppingListForm from './ShopingListForm'
// import uuid from "uuid";

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [
                {name:"Milk", qty:"2 Gallons" },
                {name:"Bread", qty:"2 loaves"}
            ]
        }
        this.renderList = this.renderList.bind(this);
        this.additem = this.additem.bind(this);
    }

    renderList() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>{item.name} : {item.qty}</li>
                ))}
            </ul>
        )
    }
    additem(item){
        this.setState(state => ({
            items: [...state.items,item]
        }))
    }
     
    render() {
        return(
            <div>
                <h1>Shoping List</h1>
                {this.renderList()}
                <ShoppingListForm additem={this.additem}/>
            </div>
        )
    }
}

export default ShoppingList;
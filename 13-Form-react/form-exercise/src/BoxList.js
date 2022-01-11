import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           boxes : [ 
               {height:"",width:"",color:""}
            ]
        }
    }
addbox(evt){
    // this.state.boxes
    }


    render() {
        return (
            <div>
                <h1>Box Maker Tringy</h1>
                <NewBoxForm  addbox = {this.addbox} />
                
            </div>
        )
    }
}


export default  BoxList;
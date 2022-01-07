import React, { Component } from 'react'

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            times : 0
        };
        this.clickfunc = this.clickfunc.bind(this); 
    }

    clickfunc(e){
        this.setState({click: true});
        this.setState({times: (this.state.times)+1});
    }

    render() {
        return (
            <div>
                <h1>{this.state.click?'Clicked!!!':'Not Clicked'}</h1>
                <button onClick={this.clickfunc}>Click</button>
                <h1>Bro you already clicked : {this.state.times} times</h1>
            </div>
        )
    }
}

export default BrokenClick;


// alternative syntex for events in react.
// class BrokenClick extends Component {
//     state = {
//         click: false,
//         times : 0
//     };
//     // this.clickfunc = this.clickfunc.bind(this); 


// clickfunc = (e) =>{
//     this.setState({click: true});
//     this.setState({times: (this.state.times)+1});
// }

// render() {
//     return (
//         <div>
//             <h1>{this.state.click?'Clicked!!!':'Not Clicked'}</h1>
//             <button onClick={this.clickfunc}>Click</button>
//             <h1>Bro you clicked : {this.state.times} times</h1>
//         </div>
//     )
// }
// }

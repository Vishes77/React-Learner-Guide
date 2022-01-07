import React from 'react'

class clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 0,
        }
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        let rand = Math.floor(Math.random()*10);
        this.setState({random: rand});
    }
    render(){
        if(this.state.random != 7)
        {
            return (
                <div>
                    <h1>Number is {this.state.random}</h1>
                    <button onClick={this.clicked}>Random Number</button>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>Number is {this.state.random}</h1>
                    <h2>You Won My Friend.</h2>
                </div>
            )
        }
        
    }
}

export default clicker;
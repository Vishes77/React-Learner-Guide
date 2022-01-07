import React from 'react'

class rand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num : 0};
        this.makeTimer();  // if state changes then render will get called again and again.
    }

    makeTimer(){ 
        setInterval(() =>{
            let rand = Math.floor(Math.random()*this.props.maxNum);
            this.setState({num : rand})
        },1000);
    }

    render() {
        return (
            <h1>{this.state.num}</h1>

        )
    }
}

export default rand;
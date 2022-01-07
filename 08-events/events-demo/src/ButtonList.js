import React, { Component } from 'react'

class Button extends Component {
    static defaultProps = {
        color : ["red","orange","lime","yellow"]
    }
    constructor(props) {
        super(props)
        this.state = {
            color : "Blue"
        }
    }
    changecolor(newcolor) {
        // console.log("HI from changecolor");
        this.setState({color: newcolor});
    }

    render(){
        return(
            <div className="ButtonList" style={{backgroundColor : this.state.color}}>
                {this.props.color.map(c => {
                    const colorobj = {background: c}
                    return <button style={colorobj} onClick={this.changecolor.bind(this,c)}>Click on me!</button>
                    //alternaticve way but do the same work.
                    // return <button style={colorobj} onClick={()=> this.changecolor(c)}>Click on me!</button> 
                })}
            </div>
        )
    }
}

export default Button;
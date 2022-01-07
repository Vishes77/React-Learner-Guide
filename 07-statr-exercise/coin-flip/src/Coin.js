import React, { Component } from 'react'
import './coin.css'

class Coin extends Component {
    
    render() {
        return (
            <div className="coin">
                {this.props.info == "" ?
                <h4>Flip the Coin Mate</h4>
                : <img src={this.props.info.imgsrc} alt="" />
            }
                
            </div>
        )
    }
}

export default Coin;
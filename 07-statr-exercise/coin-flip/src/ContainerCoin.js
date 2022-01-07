import React, { Component } from 'react'
import {choice} from './helper';
import Coin from './Coin';

class CointainerCoin extends Component {
    static defaultProps = {
        coins : [
            {side: 'head',imgsrc :'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rupees_10_Grain_Series_coin_observe_released_in_2019.png/640px-Rupees_10_Grain_Series_coin_observe_released_in_2019.png'},
            {side: 'tail',imgsrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Rupees_10_Grain_Series_coin_reverse.png/220px-Rupees_10_Grain_Series_coin_reverse.png'}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin : "",
            nflips :0,
            nheads :0,
            ntails :0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipcoin() {
        const newcoin = choice(this.props.coins)
        this.setState(st =>{
            let newstate = {
                ...st,
                currCoin : newcoin,
                nflips : st.nflips + 1
            }
            if(newcoin.side === 'head'){
                newstate.nheads += 1;
            }else{
                newstate.ntails += 1;
            }
           return newstate;
        })
    }

    handleClick(){
        this.flipcoin();
    }

    render() {
        return (
            <div>
                <h1>Flip Coin</h1>
                <Coin info = {this.state.currCoin}/>
                <button onClick={this.handleClick}>Flip me!</button>
                {/* <p>out of {this.state.nflips}, there has been {this.state.nheads}
                &nbsp; heads and {this.state.ntails} &nbsp; tails.
                </p> */}
                <span>
                    <h4>Heads : {this.state.nheads} </h4>
                    <h4>Tails : {this.state.ntails} </h4>
                    <h4>Total Flips : {this.state.nflips} </h4>
                </span>
            </div>
        )
    }
}

export default CointainerCoin;
import React from 'react'
import Die from './die'
import './RollDice.css'

class RollDice extends React.Component {
    static defaultProps = {
        sides : ['one','two','three','four','five','six']
    }
    constructor(props) {
        super(props);
        this.state = {
            die1:'one',
            die2:'two',
            die3:'three'
        }
        this.roll = this.roll.bind(this);
    }

    roll(){
        const newDie1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const newDie3 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)]; 
        this.setState({die1:newDie1,die2:newDie2,die3:newDie3})
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                    <Die face={this.state.die3}/>
                </div>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>

        )
    }
}

export default RollDice;
import React , { Component } from 'react';
import './Pokecard.css';
const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";

class Pokecard extends Component {
    render(){
        let imgsrc = `${POKE_API}${this.props.id}.png`;
        return(
        <div className="Pokecard">
            <h1>{this.props.name}</h1>
            <p>{this.props.id}</p>
            <img src={imgsrc} alt={this.props.name}/>
            <div>Type : {this.props.type}</div>
            <div>Type : {this.props.exp}</div>
        </div>
        );
    }
}


export default Pokecard;
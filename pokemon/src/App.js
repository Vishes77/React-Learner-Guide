import React , { Component } from "react";
// import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Pokedex/>
      </div>
    );
  }
}


export default App;
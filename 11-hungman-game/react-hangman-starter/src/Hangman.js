import React, { Component } from "react";
import {randomWord}  from './words';
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    let a = randomWord();
    this.state = { nWrong: 0, guessed: new Set(), answer: a };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
      this.setState({
        nWrong : 0, guessed : new Set() , answer : randomWord()
      })
  }
  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }


  /** render: render game */
  render() {
    let gameover = this.state.nWrong >= this.props.maxWrong;
    let gamewin = this.guessedWord().join("") === this.state.answer;
    let result =""
    if(gamewin){
        result = "You Win"
    }else{
      result = "You Lose"
    }
    const alttext = `${this.state.nWrong} / ${this.props.maxWrong} gusses.`
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={alttext} />
        <p>Gussed Wrong : {this.state.nWrong} </p>
        <p className='Hangman-word'>{gameover 
        ? this.state.answer
        :this.guessedWord()}</p>
        <p className='Hangman-btns'>{
        this.state.nWrong < this.props.maxWrong
        ? this.generateButtons()
        : result
        }</p>
        <button id='reset' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Hangman;

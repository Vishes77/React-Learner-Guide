import logo from './logo.svg';
import Game from './Game.js';
import Rand from './rand';
import BrokenClick from './BrokeClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
      {/* <Rand  maxNum={7}/> */}
      <BrokenClick/>
    </div>
  );
}

export default App;

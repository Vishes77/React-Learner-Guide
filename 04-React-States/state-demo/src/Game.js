import React from 'react'

class Game extends React.Component {
    constructor(props) { // here we are registerring the satate 
        super(props);   //if we want to access props on constructor itself then we pass props inside super
        //super();     // but we don't want then we can pass simply   super().
        this.state = {
            score: 0,
        }
    }

    render() {
        return (
            <div>
                <h1>Your score is : {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;

//Alternative syntex for Initializes state.
// import React from 'react'

// class Game extends React.Component {
//         state = {
//             score: 0,
//         };


//     render() {
//         return (
//             <div>
//                 <h1>Your score is : {this.state.score}</h1>
//             </div>
//         )
//     }
// }

// export default Game;
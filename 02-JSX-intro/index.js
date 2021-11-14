// //functions
// function getmood(){
//     const mood = ['Happy','Sad','Angry','Quiet','Paranoid'];
//     return mood[Math.floor(Math.random()*mood.length)];
// }


class Appi extends React.Component { // CLass Name always Start with Capital Latter.
    render() {
        return (<div>
            <p>HIIII</p>
            <Hello/>
            <Hello/>
            <Hello/>
        </div>
    ) }
}

ReactDOM.render(<Appi/>,document.getElementById('root')); //Class Call should also be in Upper Case start letter.

// function randomNumer(){
//     return Math.floor(Math.random()*10) + 1;
// }

// class NumPicker extends React.Component {
//     render(){
//         const num = randomNumer();
//         return (
//         <div>
//             <h1>Your Number is : {num}</h1>
//             <p>{num === 7 ? 'You Are Lucky got 7': 'Bad Luck Not Seven' }</p>
//             <p>{num === 7 ? <img src="https://c.tenor.com/cQ3_rs-gLSIAAAAC/lucky-you-lol.gif" />: <img src="https://c.tenor.com/puMSd7LWf7wAAAAd/puppy-eyes.gif" /> }</p>
//         </div>
//         );
//     }
// }

// // https://c.tenor.com/puMSd7LWf7wAAAAd/puppy-eyes.gif
// // https://c.tenor.com/cQ3_rs-gLSIAAAAC/lucky-you-lol.gif

// ReactDOM.render(<NumPicker/>,document.getElementById('root'))
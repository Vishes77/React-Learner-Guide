import React, { Component } from 'react'

class WideSquare extends Component {
    static defaultProps = {
         message : [
            "abc",
            "efb",
            "ijk"
        ]
    };

    hellofunc = () => {  //alternative syntex without bind()
        console.log("hello from inner");
    }

    somefunction(){
        console.log("This is",this);
        let {message} = this.props;
        let index = Math.floor(Math.random() * message.length);
        console.log(message[index]);
    }

    render() {
        return (
            <div className="Wide-square" onMouseEnter={()=> this.somefunction()}>💖
                {/* <p  onCopy={this.handlecopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae
                    dignissimos sequi voluptas possimus, itaque consequuntur quos nisi at. Libero minima ratione ad.
                    Dolorem neque commodi veniam, ducimus atque blanditiis!
                </p> */}
                <h4 onMouseEnter={this.hellofunc}>Hover me to see the magic.</h4>
            </div>
        )
    }
}


export default WideSquare;
import React, { Component } from 'react';
import axios from 'axios'
import './loader.css'

class ZenQuote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            isloaded: false
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/zen').then(response => {
            // this.setState({quote: response.data})
            setTimeout(() =>{
                this.setState({quote: response.data ,isloaded:true})
            },3000)
        })

    }

    componentDidUpdate(prevProps,prevState){
        //after each update in render it will get called.
        //and first argument i.e prevProps give the previous props before update.
        // same second prevState gives prev states values.
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount(){
        //last necessary cleanup.
        console.log("Unmounted.")
    }

    render() {
        return (
            <div>
                <h1>Always Remember</h1>
                {!this.state.isloaded 
                    ?<div className="loader"></div>
                    :<p>{this.state.quote}</p>
                }
            </div>
        )
    }
}

export default ZenQuote;
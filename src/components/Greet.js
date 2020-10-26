import React, { Component } from "react";

// function Greet() {
//     return <h1>Hello Preethi</h1>
// }

// const Greet = () => <h1>Hello Preethi</h1>

class Greet extends Component {
    constructor() {
        super()
        this.state = {
           // message: 'Hello Please Click'
            count: 0
        }
    }

    changeMessage() {
        // this.setState(
        //     {
        //     // message: 'Thank you!'
        //     count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('callback', this.state.count)
        //     }
        // )
        this.setState((prevState) => ({
            count: prevState.count + 5
        }))
        console.log('async', this.state.count)
    }

    changeByFive() {
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
    }
    
    render() {
        // return <h1>Hello {this.props.name}</h1>
        // return <h1>Hello {this.state.message}</h1>
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = { () => this.changeMessage()}>button</button>
            </div>

        )
    }
}

export default Greet;
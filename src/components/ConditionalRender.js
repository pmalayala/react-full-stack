import React, { Component } from 'react'

export class ConditionalRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        // short circuit operator
        return this.state.isLoggedIn && <div> Welcome ternary conditional operator is false </div>
        // // ternary conditional operator
        // return this.state.isLoggedIn ? (
        //         <div> Welcome ternary conditional operator is true </div> 
        //     ) : (
        //         <div> Welcome ternary conditional operator is false </div>
        //     )

        // element variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome isLoggedIn value is true </div>
        // } else {
        //     message = <div> Welcome isLoggedIn value is false </div>
        // }
        // return <div>{message}</div>
        // if/else
        // // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome isLoggedIn value is true
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome isLoggedIn value is false
        //         </div>
        //     )
        // }
    }
}

export default ConditionalRender

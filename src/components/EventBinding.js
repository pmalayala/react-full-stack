import React, { Component } from 'react'

// function EventBinding() {
//     function ClickHandler() {
//         console.log('Button clicked');
//     }
//     return (
//         <div>
//             <button onClick = {ClickHandler}>click me</button>
//         </div>
//     )
// }


class EventBinding extends Component {
    ClickHandler() {
        console.log('Button clicked');
    }

    render() {
    return (
        <div>
            <button onClick = {this.ClickHandler}>click me</button>
        </div>
    )
    }
}

export default EventBinding;

import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Click me to say Hello!</button>
        </div>
    )
}

export default ChildComponent

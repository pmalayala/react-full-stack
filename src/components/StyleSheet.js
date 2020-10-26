import React from 'react'
import './MyStile.css'

const styles = {
    fontSize: '62px',
    color: 'blue'
}

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    // const style = {
    //     font-size: 
    // }
    return (
        <div>
            <h4 className={`${className} font`}>Style Sheets</h4>
            <h5 style={styles}>Inline Style Sheets</h5>
        </div>
    )
}

export default StyleSheet

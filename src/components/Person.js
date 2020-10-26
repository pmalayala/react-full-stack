import React from 'react'

function person({employee}) {
    return (
        <div>
            <h3> {employee.name} age {employee.age} gender {employee.gender} </h3>
        </div>
    )
}

export default person

import React from 'react'
import Person from './Person'

function ListRender() {
    const Employees = [
        {
            name: 'sri',
            age: '22',
            gender: 'male'
        },{
            name: 'ria',
            age: '26',
            gender: 'female'
        },{
            name: 'ira',
            age: '30',
            gender: 'female'
        }
    ]
    const EmployeesList = Employees.map( emp => <Person key={emp.age} employee={emp}/> )
    return <div>{EmployeesList}</div>
}

export default ListRender

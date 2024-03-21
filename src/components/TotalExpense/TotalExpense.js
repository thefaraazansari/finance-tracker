import React from 'react'
import "./TotalExpense.scss"

function TotalExpense({ total }) {
    return (
        <div className='total-expense'>
            <p>Total Expense</p>
            <div className='total'>${total}</div>
        </div>
    )
}

export default TotalExpense
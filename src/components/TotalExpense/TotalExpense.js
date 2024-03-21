import React from 'react'
import "./TotalExpense.scss"

function TotalExpense({ total }) {
    return (
        <div className='total-expense'>
            <div>Total Expense</div>
            <div className='total'>${total}</div>
        </div>
    )
}

export default TotalExpense
import React from 'react'
import "./styles.css"

function TotalExpense({ total }) {
    return (
        <div className='total-expense'>
            <div>Total Expense</div>
            <div className='total'>${total}</div>
        </div>
    )
}

export default TotalExpense
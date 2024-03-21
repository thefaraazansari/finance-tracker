import React from 'react'
import "./MaxExpense.scss"

function MaxExpense({ largest }) {
    return (
        <div className='max-expense'>
            <p>Largest Expense</p>
            <div className='largest'>${largest}</div>
        </div>
    )
}

export default MaxExpense
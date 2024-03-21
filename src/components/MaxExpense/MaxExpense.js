import React from 'react'
import "./MaxExpense.scss"

function MaxExpense({ largest }) {
    return (
        <div className='max-expense'>
            <div>Largest Expense</div>
            <div className='largest'>${largest}</div>
        </div>
    )
}

export default MaxExpense
import React from 'react'
import "./styles.css"

function MaxExpense({ largest }) {
    return (
        <div className='max-expense'>
            <div>Largest Expense</div>
            <div className='largest'>${largest}</div>
        </div>
    )
}

export default MaxExpense
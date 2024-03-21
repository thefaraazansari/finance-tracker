import React from 'react'
import "./ExpenseHistory.scss"

function ExpenseHistory({ expense }) {
    return (
        <div className='expense-history'>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                    {[...expense].reverse().slice(0, 5).map((expense, index) => <tr key={index}>
                        <td>{expense.date}</td>
                        <td>${expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>{expense.desc}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseHistory
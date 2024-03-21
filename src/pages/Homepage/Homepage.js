import React, { useState } from 'react'
import InputExpense from '../../components/InputExpense/InputExpense';
import TotalExpense from '../../components/TotalExpense/TotalExpense';
import MaxExpense from '../../components/MaxExpense/MaxExpense';
import ExpenseGraph from '../../components/ExpenseGraph/ExpenseGraph';
import ExpenseHistory from '../../components/ExpenseHistory/ExpenseHistory';
import "./Homepage.scss"

function Homepage() {

    const [categoryAmounts, setCategoryAmounts] = useState({
        Food: 0,
        Travel: 0,
        Shopping: 0,
        Misc: 0
    });

    const [expense, setExpense] = useState([]);
    const [total, setTotal] = useState(0);
    const [largest, setLargest] = useState(0);

    const calculateTotalExp = (expense) => {
        setTotal(total + expense);
    }

    const largestExpense = (expense) => {
        if (expense > largest) setLargest(expense);
    }

    return (
        <div className='homepage'>
            <div className='stats'>
                <InputExpense calculateTotalExp={calculateTotalExp} setExpense={setExpense} expense={expense}
                    categoryAmounts={categoryAmounts} setCategoryAmounts={setCategoryAmounts} largestExpense={largestExpense} />
                <div className='expense-stats'>
                    <TotalExpense total={total} />
                    <MaxExpense largest={largest} />
                </div>
            </div>
            <div className='stats'>
                <ExpenseHistory expense={expense} />
                <ExpenseGraph food={categoryAmounts.Food} travel={categoryAmounts.Travel} shopping={categoryAmounts.Shopping}
                    misc={categoryAmounts.Misc} largest={largest} />
            </div>
        </div>
    )
}

export default Homepage
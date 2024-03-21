import React, { useRef, useState } from 'react'
import "./InputExpense.scss"

function InputExpense({ expense, setExpense, calculateTotalExp, largestExpense, categoryAmounts, setCategoryAmounts }) {

    const [inputData, setInputData] = useState({
        amount: '',
        date: '',
        category: '',
        desc: ''
    });

    const [isFormFilled, setIsFormFilled] = useState(true);
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
    }

    const updateCategoryAmount = (category, amount) => {
        setCategoryAmounts({ ...categoryAmounts, [category]: amount });
    };

    const handleExpense = () => {
        if (inputData.amount && inputData.date && inputData.category && inputData.desc) {
            setExpense([...expense, {
                "amount": parseFloat(inputData.amount),
                "date": inputData.date, "category": inputData.category, "desc": inputData.desc
            }]);
            setInputData({
                amount: '',
                date: '',
                category: '',
                desc: ''
            })
            calculateTotalExp(parseFloat(inputData.amount));
            largestExpense(parseFloat(inputData.amount));
            setIsFormFilled(true);
            inputRef.current.focus();
            updateCategoryAmount(inputData.category, inputData.amount);
        }
        else {
            setIsFormFilled(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='input-expense'>
            <form onSubmit={handleSubmit}>
                <div className='currency'>
                    <span className='dollar'>$</span>
                    <input name='amount' ref={inputRef} id='input-amount' type='number' value={inputData.amount} onChange={handleInputChange} placeholder='Enter Amount' />
                </div>
                <input name='date' id='input-date' type='date' value={inputData.date} onChange={handleInputChange} />
                <select name='category' value={inputData.category} onChange={handleInputChange}>
                    <option value="" disabled>Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Misc">Misc</option>
                </select>
                <input name='desc' id='input-desc' type='text' value={inputData.desc} onChange={handleInputChange} placeholder='Description' />
                {!isFormFilled && <p className='error'>*Please fill out all the required details.</p>}
                <button id='add-expense-btn' type='submit' onClick={handleExpense}>Add Expense</button>
            </form>
        </div>
    )
}

export default InputExpense
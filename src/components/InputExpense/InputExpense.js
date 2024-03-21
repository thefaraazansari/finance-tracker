import React, { useRef, useState } from 'react'
import "./InputExpense.scss"

function InputExpense({ expense, setExpense, calculateTotalExp, largestExpense, setFood, setTravel, setShopping, setMisc }) {

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [isFormFilled, setIsFormFilled] = useState(true);
    const inputRef = useRef(null);

    const handleAmount = (event) => {
        setAmount(event.target.value);
        setIsFormFilled(true);
    }

    const handleDate = (event) => {
        setDate(event.target.value);
        setIsFormFilled(true);
    }

    const handleDesc = (event) => {
        setDesc(event.target.value);
        setIsFormFilled(true);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
        setIsFormFilled(true);
    }

    const handleExpense = () => {
        if (amount && date && category && desc) {
            setExpense([...expense, { "amount": parseFloat(amount), "date": date, "category": category, "desc": desc }]);
            setAmount('');
            setDate('');
            setCategory('');
            setDesc('');
            calculateTotalExp(parseFloat(amount));
            largestExpense(parseFloat(amount));
            setIsFormFilled(true);
            inputRef.current.focus();
            switch (category) {
                case "Food":
                    setFood(amount);
                    break;
                case "Travel":
                    setTravel(amount);
                    break;
                case "Shopping":
                    setShopping(amount);
                    break;
                case "Misc":
                    setMisc(amount);
                    break;
                default:
                    break;
            }
        }
        else {
            setIsFormFilled(false);
        }
    }

    return (
        <div className='input-expense'>
            <div className='currency'>
                <span className='dollar'>$</span>
                <input ref={inputRef} id='input-amount' type='number' value={amount} onChange={handleAmount} placeholder='Enter Amount' />
            </div>
            <input id='input-date' type='date' value={date} onChange={handleDate} />
            <select value={category} onChange={handleCategory}>
                <option value="" disabled>Category</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Misc">Misc</option>
            </select>
            <input id='input-desc' type='text' value={desc} onChange={handleDesc} placeholder='Description' />
            {!isFormFilled && <p className='error'>*Please fill out all the required details.</p>}
            <button id='add-expense-btn' onClick={handleExpense}>Add Expense</button>
        </div>
    )
}

export default InputExpense
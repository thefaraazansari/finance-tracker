import { useState } from 'react';
import InputExpense from './components/InputExpense/InputExpense.js';
import TotalExpense from './components/TotalExpense/TotalExpense.js';
import ExpenseHistory from './components/ExpenseHistory/ExpenseHistory.js';
import ExpenseGraph from './components/ExpenseGraph/ExpenseGraph.js';
import MaxExpense from './components/MaxExpense/MaxExpense.js';
import './App.css';

function App() {

    const [expense, setExpense] = useState([]);
    const [total, setTotal] = useState(0);
    const [largest, setLargest] = useState(0);
    const [food, setFood] = useState(0);
    const [travel, setTravel] = useState(0);
    const [shopping, setShopping] = useState(0);
    const [misc, setMisc] = useState(0);

    const calculateTotalExp = (expense) => {
        setTotal(total + expense);
    }

    const largestExpense = (expense) => {
        if (expense > largest) setLargest(expense);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='stats'>
                    <InputExpense calculateTotalExp={calculateTotalExp} setExpense={setExpense} expense={expense} setFood={setFood}
                        setTravel={setTravel} setShopping={setShopping} setMisc={setMisc} largestExpense={largestExpense} />
                    <TotalExpense total={total} />
                    <MaxExpense largest={largest} />
                </div>
                <div className='stats'>
                    <ExpenseHistory expense={expense} />
                    <ExpenseGraph food={food} travel={travel} shopping={shopping} misc={misc} largest={largest} />
                </div>
            </header>
        </div>
    );
}

export default App;

import { useState } from 'react';
import InputExpense from './components/InputExpense';
import TotalExpense from './components/TotalExpense';
import ExpenseHistory from './components/ExpenseHistory';
import ExpenseGraph from './components/ExpenseGraph';
import MaxExpense from './components/MaxExpense';
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

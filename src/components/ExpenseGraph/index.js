import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import "./styles.css"

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseGraph({ food, travel, shopping, misc, largest }) {

    const data = {
        labels: ["FOOD", "TRAVEL", "SHOPPING", "MISC."],
        datasets: [
            {
                data: [food, travel, shopping, misc],
                backgroundColor: ["#F78888", "#5DA2D5", "#F3D250", "#479461"]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                position: "right",
                labels: {
                    padding: 30,
                    color: '#fff'
                }
            }
        }
    }

    return (
        <div className='expense-graph'>
            <div className='doughnut-container'>
                <Doughnut data={data} options={options}></Doughnut>
            </div>
            {largest === 0 && <div className='no-data'>
                <h1>Looks like your data is on a coffee break – Nothing to display for now!</h1>
            </div>}
        </div>
    )
}

export default ExpenseGraph
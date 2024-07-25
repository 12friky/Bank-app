/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ResentTransaction.css';
import { FaCoffee, FaCar, FaHotel, FaFilm, FaShoppingCart, FaGasPump } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

const transactions = [
    { name: 'Intelligentsia Coffee', amount: '$10.95', time: '8:24 pm', category: 'Restaurants & cafes', icon: <FaCoffee /> },
    { name: 'Uber', amount: '$20.47', time: '1:12 pm', category: 'Transport', icon: <FaCar /> },
    { name: 'Far Media Inc.', amount: '+$200.00', time: '9:20 am', category: 'Paychecks', icon: <MdAttachMoney /> },
    { name: 'Airbnb', amount: '$258.65', time: '9:53 pm', category: 'Hotels & rent', icon: <FaHotel /> },
    { name: 'Netflix', amount: '$39.99', time: '9:00 pm', category: 'Media & telecom', icon: <FaFilm /> },
    { name: 'Big Papa\'s Grocery Shop', amount: '$15.38', time: '4:46 pm', category: 'Food & groceries', icon: <FaShoppingCart /> },
    { name: 'Shell Gas Station', amount: '$103.75', time: '10:03 am', category: 'Transport', icon: <FaGasPump /> }
];

const ResentTransaction = () => {
    const date = new Date();
    const year = date.getFullYear(); // Get the year
    const month = date.getMonth(); // Get the month (0-11)
    const day = date.getDate(); // Get the day of the month (1-31)
    const hours = date.getHours(); // Get the hours (0-23)
    const minutes = date.getMinutes(); // Get the minutes (0-59)
    const seconds = date.getSeconds(); // Get the seconds (0-59)

    return (
        <div className="transaction-container">
            <h3>Today:  {year}: {month + 1}: {day}  Transaction Hisory</h3>
            {/* <div className="transaction-header">
          <h2>Search transactions</h2>
          <input type="text" placeholder="Search" className="transaction-search" />
      </div> */}
            <div className="transaction-list">
                {transactions.map((transaction, index) => (
                    <div key={index} className="transaction-item">
                        <div className="transaction-icon">{transaction.icon}</div>
                        <div className="transaction-details">
                            <div className="transaction-name">{transaction.name}</div>
                            <div className="transaction-category">{transaction.category}</div>
                        </div>
                        <div className="transaction-meta">
                            <div className="transaction-time">{transaction.time}</div>
                            <div className="transaction-amount">{transaction.amount}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResentTransaction;

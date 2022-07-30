import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          value={transaction.date}
          onChange={handleChange}
          type="date"
        />
        <br></br>
        <label htmlFor="item_name">Name: </label>
        <input
          id="item_name"
          value={transaction.item_name}
          onChange={handleChange}
          type="text"
        />
        <br></br>
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          value={transaction.amount}
          onChange={handleChange}
          type="number"
        />
        <br></br>
        <label htmlFor="from">From: </label>
        <input
          id="from"
          value={transaction.from}
          onChange={handleChange}
          type="text"
        />
        <br></br>
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          value={transaction.category}
          onChange={handleChange}
          type="text"
        />
        <br></br>
        <input type="submit" value="Create New Item" />
      </form>
    </div>
  );
}

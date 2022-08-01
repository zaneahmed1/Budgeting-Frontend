import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function TransactionEditForm() {
  const { index } = useParams();

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.error(error));
  }, [index]);

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return(
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
  )
}

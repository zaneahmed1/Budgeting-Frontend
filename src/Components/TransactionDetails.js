import { useState, useEffect } from "react";
import {useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./TransactionDetails.css"

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {

const [transactions, setTransactions] = useState({})
const {index} = useParams()

const navigate = useNavigate()

useEffect(
    ()=> {
        axios
        .get(`${API}/transactions/${index}`)
                .then((response) => setTransactions(response.data))
                .catch((error) => navigate('/error'))
    }, [index])

const handleDelete = () => {
        axios
            .delete(`${API}/transactions/${index}`)
            .then((response) => navigate(`/transactions`))
            .catch((error) => console.error(error))
    }

  return (
    <div className="transactiondetails">
        <h1>{transactions.item_name}</h1>
        <div>
        <h3>Date: {transactions.date}</h3>
        <h3>Amount: {transactions.amount}</h3>
        <h3>From: {transactions.from}</h3>
        <h3>Category: {transactions.category}</h3>
        </div>
        <a href={`/transactions`}>
            <button>Back</button>
            </a>
        <a href={`/transactions/${index}/edit`}>
            <button>Edit</button>
            </a>
            <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

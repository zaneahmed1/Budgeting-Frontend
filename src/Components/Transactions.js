import React, { useState, useEffect } from "react";
import Transaction from "./Transaction"
import axios from "axios"


const API = process.env.REACT_APP_API_URL;

export default function Transactions() {

const [transactions, setTransactions] = useState([])

useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  const amountsArr = transactions.map((transaction) => Number(transaction.amount))
  let sum = 0;
  amountsArr.forEach(amount => {
    sum += amount;
    return sum;
  });

  return(
    <div>
        <h1>Bank Account Total: ${sum}</h1>
         <section>
        <table>
          <tbody>
          {transactions.map((transaction, index) => {
            return <Transaction key={index} transaction={transaction} index={index} />
        })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

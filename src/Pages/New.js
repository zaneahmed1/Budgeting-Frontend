import React from 'react'
import TransactionNewForm from "../Components/TransactionNewForm"

export default function New() {
  return (
    <div>
        <h2>Add a New Item</h2>
        <TransactionNewForm/>
        <a href={`/transactions`}>
            <button>Back</button>
            </a>
    </div>

  )
}
import React from 'react'
import TransactionEditForm from "../Components/TransactionEditForm"

export default function Edit() {
  return (
    <div>
        <h2>Edit</h2>
        <TransactionEditForm/>
        <a href={`/transactions`}>
            <button>Back</button>
            </a>
    </div>

  )
}

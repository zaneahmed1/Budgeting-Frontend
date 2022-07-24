import React from 'react'

export default function Transaction({transaction, index}) {
  return (
    <div>
        <tr>
            <td>
        {transaction.date}
            </td>
            <td>
                <a href={`transactions/${index}`}>{transaction.item_name}</a>
            </td>
            <td>
        {transaction.amount}
            </td>
        </tr>
    </div>
  )
}

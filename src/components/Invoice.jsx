import React from 'react'
import { useParams } from 'react-router-dom'
import InvoiceData from '../data'

export default function Invoice() {
  const params = useParams()
  const invoice = InvoiceData.find(invoice => invoice.number.toString() === params.invoiceId)
  return (
    <div style={{ padding: '1rem' }}>
      <h2 >
        Total Due: {invoice.amount}
      </h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>
        Due Date: {invoice.due}
      </p>
    </div>
  )
}

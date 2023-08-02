import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
        <div style={{paddingBottom: "20px"}}>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/contacts">Contacts</Link> {" | "}
        <Link to="/invoices">Invoices</Link> 
        </div>
        <Link to="/home">
        <button style={{backgroundColor: "#00BFFF"}}>Test navigate home</button>
        </Link>
      </nav>
    </>
  )
}

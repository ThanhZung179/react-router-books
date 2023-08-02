import * as React from "react";
import InvoiceData from "../data";
import { Link, Outlet } from "react-router-dom";

export default function Invoices() {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ padding: "1rem", borderRight: "1px solid" }}>
        {InvoiceData.map((invoice) => (
          <Link to={`/invoices/${invoice.number}`} key={invoice.number} style={{ display: 'block', margin: '1rem' }}> {invoice.name}</Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
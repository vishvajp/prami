import React, { useState } from "react";
import "./Inventory.css";
import ExpenseDetailTable from "./ExpenseDetailTable";
const InventoryPage = () => {
  const [expenseState, setExpenceState] = useState("ADD EXPENSES");

  return (
    <div className="bg">
      <div className="d-flex justify-content-center gap-3">
        <span
          className="inventory-title"
          onClick={() => setExpenceState("ADD EXPENSES")}
          style={{
            backgroundColor: expenseState === "ADD EXPENSES" ? "green" : "gray",
            color: expenseState === "ADD EXPENSES" ? "white" : "black",
          }}
        >
        ADD EXPENSES
        </span>
        <span
          className="inventory-title"
          onClick={() => setExpenceState("EXPENSES DETAIL")}
          style={{
            backgroundColor:
              expenseState === "EXPENSES DETAIL" ? "green" : "gray",
            color: expenseState === "EXPENSES DETAIL" ? "white" : "black",
          }}
        >
          EXPENSES DETAIL   
        </span>
      </div>
      {expenseState === "ADD EXPENSES" && (
        <div className="inventory-main-div">
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Date Of Payment</span>
            </div>
            <div className="col-7 d-flex align-items-center">
              <input className="inventory-input" type="date"></input>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Method Of Payment</span>
            </div>
            <div className="col-7 d-flex align-items-center">
              <select className="inventory-input" type="date">
                <option>Upi</option>
                <option>Credit/Debit Card</option>
                <option>Cash</option>
              </select>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Paid To</span>
            </div>
            <div className="col-7 d-flex align-items-center">
              <input className="inventory-input" type="text"></input>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Item</span>
            </div>
            <div className="col-7 d-flex align-items-center">
              <input className="inventory-input" type="text"></input>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Amount Paid</span>
            </div>
            <div className="col-7 d-flex align-items-center">
              <input className="inventory-input" type="text"></input>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Balance To Pay</span>
            </div>
            <div className="col-7 d-flex align-items-center ">
              <input className="inventory-input" type="text"></input>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <span className="inventory-label">Total Amount</span>
            </div>
            <div className="col-7 d-flex align-items-center">
              <input className="inventory-input" type="text"></input>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className=" inventory-submit-button">SUBMIT</button>
          </div>
        </div>
      )}

      {
        expenseState==="EXPENSES DETAIL" && <div>
            <ExpenseDetailTable/>
        </div>
      }
    </div>
  );
};

export default InventoryPage;

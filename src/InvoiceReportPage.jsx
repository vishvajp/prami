import React, { useState } from "react";
import "./InvoiceReportPage.css"
import InvoiceReportTable from "./InvoiceReportTable";
const InvoiceReportPage = () => {

  
  return (
    <div style={{ padding: "10px" }}>
      <div className="d-flex row mt-3">
        <div className="col">
          <div className="row">
            <div className="col d-flex flex-column align-items-end invoice-first-col-label">
                <p>Receipt No :</p>
                <p>UHID :</p>
                <p>Name :</p>
                <p>Age / DOB :</p>
                <p>Gender / Mobile No :</p>
                
            </div>
            <div className="col d-flex flex-column invoice-first-col-input">
                <p>Pr45</p>
                <p>234</p>
                <p>MR. Karan</p>
                <p>25 / 1997-01-01</p>
                <p>Male / 1234567890</p>
                
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col d-flex flex-column align-items-end invoice-first-col-label">
                <p>Date :</p>
                <p>Payment Mode :</p>
                <p>Doctor :</p>
                <p>Address :</p>
                
            </div>
            <div className="col d-flex flex-column invoice-first-col-input">
                <p>2022-01-01</p>
                <p>Cash</p>
                <p>Dr. Smith</p>
                <p>123 Main St, Anytown, USA</p>
            </div>
          </div>
        </div>
      </div>
      <div>
  <InvoiceReportTable/>
      </div>
  <div className="d-flex justify-content-end "><button className="invoice-print-button">PRINT</button></div>
    </div>
  );
};

export default InvoiceReportPage;

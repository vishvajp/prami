import React, { useState } from "react";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import "./BillingPage.css";
import InvoiceTable from "./InvoiceTable";


const BillingPage = () => {
    const [startDate, setStartDate] = useState();
    const [toDate, setToDate] = useState();
    const [type,setType]=useState("Consultation")
  
    const [paymentHistory, setPaymentHistory] = useState(true);
    const CustomInput = ({ value, onClick }) => (
      <button className="dashboard-date-input" onClick={onClick}>
        {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
      </button>
    );
    const handlePaymentHistorySwitch = () => {
        setPaymentHistory(false);
      };
    
      const handlePaymentBillingSwitch = () => {
        setPaymentHistory(true);
      };
  
  return (
    <div>
  
      <div>
        <div className="d-flex">
     
          <div className="d-flex justify-content-center p-0" style={{width:"100%"}}>
          <div className="d-flex billing-header">
            <p
              onClick={handlePaymentBillingSwitch}
              className="mb-0 payment-billing-text"
              style={{
                backgroundColor: paymentHistory ? "red" : "gainsboro",
                color: paymentHistory ? "white" : "black",
              }}
            >
              Billing
            </p>
            <p
              onClick={handlePaymentHistorySwitch}
              className="mb-0 payment-payment-text"
              style={{
                backgroundColor: !paymentHistory ? "red" : "gainsboro",
                color: !paymentHistory ? "white" : "black",
              }}
            >
              Detailed Payment history
            </p>
          </div>
        </div>
        </div>
        {paymentHistory && (
          <div className="billing-main-div">
            <div className="d-flex justify-content-center py-3 gap-3">
              <div className="d-flex payment-patient-field align-items-center">
                <lable className="me-2">Patient Name</lable>
                <input type="text" className="payment-patient-input"></input>
              </div>
              <div className="d-flex payment-contact-field align-items-center">
                <lable className="me-2">Contact Number</lable>
                <input type="text" className="payment-patient-input"></input>
              </div>
            </div>
            <div className="payment-payment-div">
              <div className="d-flex justify-content-center">
                <span className="payment-today-billing-text">
                  Today's Billing (All amount in INR)
                </span>
              </div>
              <div className="payment-package-div">
                <div className="row d-flex pt-2 pb-3">
                  <div className="col d-flex align-items-center ps-5">
                    <label className="me-2">Type</label>
                    <select value={type} onChange={(e)=>setType(e.target.value)} className="payment-select-field">
                      <option>
                       Consultation
                      </option>
                      <option>
                      Clinic Physion Asset
                      </option>
                      <option>
                      Home Care Asset
                      </option>
                    </select>
                  </div>
                  <div className="col d-flex align-items-center">
                    <label className="me-2">Template</label>
                    <select className="payment-select-field">
                      { type === "Consultation" &&
                    <>
                      <option>Dr Karunakaran</option>
                      <option>Dr. Suresh</option>


                      </>
                    }{
                      type === "Clinic Physion Asset" &&
                      <>
                       <option value="Super Inductive System">Super Inductive System</option>
                        <option value="Tecar Therapy">Tecar Therapy</option>
                        <option value="Shockwave Therapy">Shockwave Therapy</option>
                        <option value="Dry Needling Therapy">Dry Needling Therapy</option>
                        <option value="Tapping Therapy">Tapping Therapy</option>
                        <option value="Laser Therapy">Laser Therapy</option>
                        <option value="Pens Therapy">Pens Therapy</option>
                        <option value="UST,IFT,TENS,MST,RST,TRACTION">UST,IFT,TENS,MST,RST,TRACTION</option>
                        <option value="Cryotherapy">Cryotherapy</option></>
                    }
                    </select>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center ">
                    <button className="payment-clearall-button">
                      Clear All
                    </button>
                  </div>
                </div>
                <div className="payment-inside-div">
                  <div className="d-flex" style={{ padding: "8px 0px" }}>
                    <div className="billing-treatment-text d-flex justify-content-center">
                      Treatment
                    </div>
                    <div className="billing-cost-text d-flex justify-content-center">
                      Cost
                    </div>
                    <div className="billing-qty-text d-flex justify-content-center">
                      Qty
                    </div>
                    <div className="billing-discount-text d-flex justify-content-center">
                      Discount
                    </div>
                    <div className="billing-cgst-text d-flex justify-content-center">
                      CGST%
                    </div>
                    <div className="billing-sgst-text d-flex justify-content-center">
                      SGST%
                    </div>
                    <div className="billing-total-text d-flex justify-content-center">
                      Total Cost
                    </div>
                    <div className="billing-recieved-text d-flex justify-content-center">
                      Recieved
                    </div>
                    <div className="billing-balance-text d-flex justify-content-center">
                      Balance
                    </div>
                    <div></div>
                  </div>
                  <div className="payment-input-whole-div">
                    <div className="d-flex justify-content-around">
                      <div style={{ marginRight: "5px" }}>
                        <input
                          type="text"
                          className="payment-treatment-input"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="payment-small-input"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="payment-small-input-qty"
                        ></input>
                      </div>

                      <div className="d-flex payment-too-small-whole-div">
                        <input
                          type="text"
                          className="payment-too-small-letf-input"
                        ></input>
                        <input
                          type="text"
                          className="payment-too-small-right-input"
                        ></input>
                      </div>

                      <div>
                        <input
                          type="text"
                          className="payment-small-input"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="payment-small-input"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="payment-small-input"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="payment-small-input"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="payment-small-input"
                        ></input>
                      </div>
                      <div>
                        <FaRegPlusSquare className="payment-plus-icon" />{" "}
                        <MdOutlineDelete className="payment-delete-icon" />
                      </div>
                    </div>
                    <div className="row d-flex">
                      <div className="col-5 ">
                        <div className="d-flex justify-content-between">
                          <p className="payment-date-text">09.08.2024</p>
                          <p className="billing-choosefrom-text">
                            choose from discount
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex payment-total-div justify-content-end">
                  <div>
                    <label className="me-2">Total Cost</label>
                    <input
                      type="text"
                      className="payment-patient-input"
                    ></input>
                  </div>
                  <div>
                    <label className="me-2">Total Recieved</label>
                    <input
                      type="text"
                      className="payment-patient-input"
                    ></input>
                  </div>
                  <div>
                    <label className="me-2">Total Balance</label>
                    <input
                      type="text"
                      className="payment-patient-input"
                    ></input>
                  </div>
                </div>
                <div className="row" style={{ padding: "10px" }}>
                  <div className="col d-flex justify-content-center">
                    <div>
                      <label className="me-2">Mode of payment</label>
                      <select className="payment-patient-select">
                        <option disabled>Select Payment</option>
                        <option>cash</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="col d-flex gap-2 justify-content-end"
                    style={{ paddingRight: "50px" }}
                  >
                    <div className="d-flex align-items-center gap-2 payment-send-checkbox-div">
                      <input type="checkbox"></input>
                      <label>Send Whatsapp </label>
                    </div>
                    <div className="d-flex align-items-center gap-2 payment-send-checkbox-div">
                      <input type="checkbox"></input>
                      <label>Send SMS </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-end gap-3"
              style={{ padding: "20px 50px 15px 0px" }}
            >
              <button
               
                className="payment-submit-print-button"
              >
                SUBMIT & PRINT
              </button>
              <button
                className="payment-cancel-button"
            
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {!paymentHistory && (
        <div className="billing-payment-history-main-div">
          <div className="row invoice-top-div">
            <div className="col d-flex flex-column" >
              <lable className="invoice-top-div-lable">From</lable>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CustomInput />}
              />
            </div>
            <div className="col d-flex flex-column">
              <lable className="invoice-top-div-lable">To</lable>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                customInput={<CustomInput />}
              />
            </div>
            <div className="col d-flex flex-column">
              <label className="invoice-top-div-lable">
                Select/Hospital or Clinic
              </label>
              <select className="invoice-top-div-select">
                <option></option>
              </select>
            </div>
            <div className="col d-flex flex-column">
              <label className="invoice-top-div-lable">Select User</label>
              <select className="invoice-top-div-select">
                <option></option>
              </select>
            </div>
          </div>
          <div>
            <p className="mb-0 invoice-title">Detailed Payment Report</p>
          </div>
          <div className="billing-table-div">
            <InvoiceTable  />
          </div>
          <div className="text-end">
            <div style={{ marginTop: "10px" }}>
              <p
                className="mb-0"
                style={{ marginRight: "35px", color: "gray" }}
              >
                {" "}
                Detailed Cash Recieved
              </p>
              <button className="invoice-export-button">
                Export To Excel
              </button>
            </div>
          </div>
        </div>
      )}
   
  </div>
  )
}

export default BillingPage
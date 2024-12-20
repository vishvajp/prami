import React, { useState } from "react";
import { Modal } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import "./Paymentmodal.css";
import InvoiceTable from "./InvoiceTable";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import InvoiceReportPage from "./InvoiceReportPage";

const Paymentmodal = ({
  isModalOpenPayment,
  paymenthandleOk,
  paymenthandleCancel,
}) => {
  const [startDate, setStartDate] = useState();
  const [toDate, setToDate] = useState();

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
      <Modal
        open={isModalOpenPayment}
        onOk={paymenthandleOk}
        className="payment-modal"
      >
        <div>
          <div className="d-flex">
            <div>
              <IoArrowBackCircleSharp
                className="payment-back-button"
                onClick={paymenthandleCancel}
              />
            </div>
            <div
              className="d-flex justify-content-center p-0"
              style={{ width: "100%" }}
            >
              <div className="d-flex payment-header">
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
                  Payment History
                </p>
              </div>
            </div>
          </div>
          {paymentHistory && (
            <div className="payment-main-div">
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
                      <label className="me-2">My Package</label>
                      <select className="payment-select-field">
                        <option value="" disabled selected>
                          Select Package
                        </option>
                        <option></option>
                      </select>
                    </div>
                    <div className="col d-flex align-items-center">
                      <label className="me-2">Template</label>
                      <select className="payment-select-field">
                        <option value="" disabled selected>
                          Select Package
                        </option>
                        <option></option>
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
                      <div className="payment-treatment-text d-flex justify-content-center">
                        Treatment
                      </div>
                      <div className="payment-cost-text d-flex justify-content-center">
                        Cost
                      </div>
                      <div className="payment-qty-text d-flex justify-content-center">
                        Qty
                      </div>
                      <div className="payment-discount-text d-flex justify-content-center">
                        Discount
                      </div>
                      <div className="payment-cgst-text d-flex justify-content-center">
                        CGST%
                      </div>
                      <div className="payment-sgst-text d-flex justify-content-center">
                        SGST%
                      </div>
                      <div className="payment-total-text d-flex justify-content-center">
                        Total Cost
                      </div>
                      <div className="payment-recieved-text d-flex justify-content-center">
                        Recieved
                      </div>
                      <div className="payment-balance-text d-flex justify-content-center">
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
                            <p className="payment-choosefrom-text">
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
                      <label className="me-2">Total Received</label>
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
                  onClick={paymenthandleOk}
                  className="payment-submit-print-button"
                >
                  SUBMIT
                </button>
                <button
                  className="payment-cancel-button"
                  onClick={paymenthandleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {!paymentHistory && <InvoiceReportPage />}
      </Modal>
    </div>
  );
};

export default Paymentmodal;

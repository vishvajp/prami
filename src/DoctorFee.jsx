import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DoctorFee.css";
import DoctorFeeTable from "./DoctorFeeTable";

const DoctorFee = () => {
  const [totalData, setTotalData] = useState(null);
 
  const [startDate, setStartDate] = useState();
  const [toDate, setToDate] = useState();
  const [totalPageCount, setTotalPageCount] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [selectTreatment, setSelectTreatment] = useState("All");
  const [selectedUser, setSelectedUser] = useState(""); // Add this line
  const [selectedPaymentType, setSelectedPaymentType] = useState("All"); // Add this line

  const CustomInput = ({ value, onClick }) => (
    <button className="doctorfee-datepicker" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );

  const handleDataFromfeetable = (childData) => {
    setTotalData(childData);
  };

  const handlePageCount = (totalpagestoshow) => {
    setTotalPageCount(totalpagestoshow);
  };

  const increasePageCount = () => {
    if (pageCount < totalPageCount) {
      setPageCount(pageCount + 1);
    }
  };

  const decreasePageCount = () => {
    setPageCount(pageCount < 1 ? pageCount - 1 : 1);
  };

  const handleTreatment = (e) => {
    setSelectTreatment(e.target.value);
  };

  return (
    <div style={{ padding: "10px 15px" }}>
      {" "}
      <div className="row invoice-top-div">
        <div className="col d-flex flex-column">
          <lable className="invoice-top-div-lable">From</lable>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInput />}
          />
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <lable className="invoice-top-div-lable">To</lable>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            customInput={<CustomInput />}
          />
        </div>
        <div className="col d-flex flex-column">
          <label className="invoice-top-div-lable">Treatment Type</label>
          <select className="invoice-top-div-select" onChange={handleTreatment}>
            <option>All</option>
            <option>Physio</option>
            <option>Neuro</option>
            <option>Full Body</option>
          </select>
        </div>
        <div className="col d-flex flex-column">
          <label className="invoice-top-div-lable">Select Doctor</label>
          <select onChange={selectedUser} className="invoice-top-div-select">
            <option></option>
          </select>
        </div>
        <div className="col d-flex flex-column">
          <label className="invoice-top-div-lable">Payment Type</label>
          <select
            onChange={(e) => setSelectedPaymentType(e.target.value)}
            className="invoice-top-div-select"
          >
            <option>All</option>
            <option>cash</option>
            <option>upi</option>
            <option>online</option>
          </select>
        </div>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: "20px" }}
      >
        <div>
          <p className="mb-0 doctorfee-cash-recived-text ">
            CASH RECIEVED STATS
          </p>
        </div>
        <div>
          <div className=" d-flex flex-column">
            <label className="invoice-top-div-lable">
              {" "}
              Select/Hospital or Clinic
            </label>
            <select className="invoice-top-div-select">
              <option></option>
            </select>
          </div>
        </div>
        <div className="d-flex doctorfee-totalcash-div ">
          <p className="mb-0 doctorfee-totalcash-text-div text-white">
            Total Cash Recieved:{" "}
            <span style={{ color: "yellow" }}>(INR) {totalData}</span>
          </p>
          <div className="d-flex align-items-center gap">
            <p
              className="mb-0 doctorfee-previous-text"
              onClick={decreasePageCount}
            >
              Previous
            </p>
            <p className="mb-0 doctorfee-1-text">{pageCount}</p>
            <p className="mb-0 doctorfee-next-text" onClick={increasePageCount}>
              Next
            </p>
          </div>
        </div>
      </div>
      <div className="docfee-table-main-div" style={{ marginTop: "20px" }}>
        <DoctorFeeTable
          handleDataFromfeetable={handleDataFromfeetable}
          pageCount={pageCount}
          handlePageCount={handlePageCount}
          selectTreatment={selectTreatment}
          startDate={startDate}
          toDate={toDate}
          selectedUser={selectedUser}
          selectedPaymentType={selectedPaymentType}
          totalData={totalData}
        />
      </div>
    </div>
  );
};

export default DoctorFee;

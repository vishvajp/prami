import React from "react";
import "./PharmacyRegistration.css";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";

const PharmacyRegistration = ({setAddPharmacy}) => {
  const [addedOnDate, setAddedonDate] = useState();

  const CustomInput = ({ value, onClick }) => (
    <button className="pharmacyRegistration-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );
  const handleDataSend = () => {
    setAddPharmacy(false)
  };

  return (
    <div className="pharmacy-registration-mainTop-div">
      <p className="pharamacy-registration-1stdiv-text">
        Pharmacy Registration
      </p>
      <div className=".pharmacyr-registration-main-div row bg">
        <div className="col pharmacy-registration-first-col">
          <div className="d-flex flex-column  mb-4">
            <label>Hospital/Clinic</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Pharmacy Name</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4 ">
            <label>Contact No</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column  mb-4">
            <label>Email Id </label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column  mb-4">
            <label>Role </label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Date Of Registration</label>
            <DatePicker
              selected={addedOnDate}
              onChange={(date) => setAddedonDate(date)}
              customInput={<CustomInput />}
            />
          </div>
        </div>
        <div className="col pharmacy-registration-second-col">
          <div className="d-flex flex-column mb-4">
            <label>Location</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Added By</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label>Added On</label>
            <DatePicker
              selected={addedOnDate}
              onChange={(date) => setAddedonDate(date)}
              customInput={<CustomInput />}
            />
          </div>
          <div className="d-flex flex-column mb-4">
            <label> Status</label>
            <input type="text"></input>
          </div>
          <div className="d-flex flex-column mb-4">
            <label> Group</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button
            onClick={handleDataSend}
            className="pharmacy-labregistration-cancel-button"
          >
            CANCEL
          </button>
          <button className="pharmacy-registration-add-button">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default PharmacyRegistration;

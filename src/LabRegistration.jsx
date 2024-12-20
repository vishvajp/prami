import React from "react";
import "./LabRegistration.css";
import { useNavigate } from "react-router-dom";

const LabRegistration = ({setAddLab}) => {
  const handleDataSend = () => {
    setAddLab(false)
  };
  return (
    <div>
      {" "}
      <p className="clinecs-1stdiv-text">Lab Registration</p>
      <div className="labregistration-main-div  row bg pe-0">
        <div className="row pe-0">
          <div className="col d-flex flex-column pe-4">
            <label className="labregistration-label">Lab Name*</label>
            <input
              placeholder="Enter Lab Name"
              className="labregistration-input"
              type="text"
            ></input>
          </div>
          <div className="col d-flex flex-column pe-0 ps-4">
            <label className="labregistration-label">Contact Person*</label>
            <input
              placeholder="Enter Contact Person Name"
              className="labregistration-input"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row pe-0">
          <div className="col d-flex flex-column pe-0">
            <label className="labregistration-label">Address*</label>
            <input
              placeholder="Enter Address"
              className="labregistration-input"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row pe-0">
          <div className="col d-flex flex-column pe-4">
            <input
              placeholder="Enter Country"
              className="labregistration-input mt-2"
              type="text"
            ></input>
            <input
              placeholder="Enter State"
              className="labregistration-input mt-2"
              type="text"
            ></input>
          </div>
          <div className="col d-flex flex-column pe-0 ps-4">
            <input
              placeholder="Enter City"
              className="labregistration-input mt-2"
              type="text"
            ></input>
            <input
              placeholder="Enter Location"
              className="labregistration-input mt-2"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row pe-0">
          <div className="col d-flex flex-column pe-4">
            <label className="labregistration-label">Pincode*</label>
            <input
              placeholder="Enter Pincode"
              className="labregistration-input"
              type="text"
            ></input>
          </div>
          <div className="col pe-0 ps-4">
          <div className="d-flex flex-column  mb-4">
              <label className="labregistration-label">Date Of Registration</label>
              <input
                type="date"
                 className="labregistration-input"
              ></input>
            </div>
          </div>
        </div>
        <div className="row pe-0">
          <div className="col d-flex flex-column pe-4">
            <label className="labregistration-label">Mobile Number*</label>
            <input
              placeholder="Enter Mobile Number"
              className="labregistration-input"
              type="text"
            ></input>
          </div>
          <div className="col d-flex flex-column pe-0 ps-4">
            <label className="labregistration-label">Email*</label>
            <input className="labregistration-input" type="text"></input>
          </div>
        </div>
        <div className="row pe-0">
          <div className="col d-flex flex-column pe-4">
            <label className="labregistration-label">Role</label>
            <input
          
              className="labregistration-input"
              type="text"
            ></input>
          </div>
          <div className="col d-flex flex-column pe-0 ps-4">
            <label className="labregistration-label">Group</label>
            <input className="labregistration-input" type="text"></input>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button
            onClick={handleDataSend}
            className="labregistration-cancel-button"
          >
            CANCEL
          </button>
          <button className="labregistration-add-button">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default LabRegistration;

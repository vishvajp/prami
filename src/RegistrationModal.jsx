import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Button, Modal } from "antd";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "./RegistrationModal.css";

import "react-datepicker/dist/react-datepicker.css";

import { Collapse, Input } from "antd";

const RegistrationModal = ({
  basicisModalOpen,
  basichandleOk,
  basichandleCancel,
}) => {
  const [formData, setFormData] = useState({
    register_date: "",
    dob: "",
    patient_name: "",
    mobile: "",
    email: "",
    patient_occupation: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    landMark: "",
    marital_status: "",
    insurance: "",
    gender:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate = value
      ? format(new Date(value), "dd/MM/yyyy")
      : "DD/MM/YYYY";

    return (
      <button
        ref={ref}
        type="button"
        className="patientBooking-date-input"
        onClick={onClick}
      >
        {formattedDate} <FaCalendarAlt className="homepage-date-icon" />
      </button>
    );
  });

  const handleAddDateChange = (specDate, date) => {
    const selectedDate = new Date(date);

    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    // Generate slots for the selected date
    setFormData((prevFormData) => ({
      ...prevFormData,
      [specDate]: formatDate,
    }));
  };

  return (
    <div>
      {" "}
      <Modal
        className="basic-modal-content"
        open={basicisModalOpen}
        onOk={basichandleOk}
      >
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column">
              <label className="registration-modal-label">
                Registration Date
              </label>
              <DatePicker
                selected={formData.register_date}
                onChange={(date) => handleAddDateChange("register_date", date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
              />
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Date Of Birth</lable>
              <DatePicker
                selected={formData.dob}
                onChange={(date) => handleAddDateChange("dob", date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Patient Name</lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patient_name}
                name="patient_name"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Mobile</lable>
              <input
                className="registration-modal-input"
                type="tel"
                value={formData.mobile}
                name="mobile"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column">
              <label className="registration-modal-label">Email</label>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="col">
       
              <div className="d-flex flex-column">
              <label className="registration-modal-label">Gender</label>
              <select
                className="registration-modal-input"
                value={formData.gender}
                name="gender"
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
       
          </div>
        </div>

        <div className="p-0">
          <div className="col ">
            <div className="d-flex flex-column mb-3">
              <label className="registration-modal-label">Address</label>
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter Address"
                value={formData.address}
                name="address"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <div className="d-flex flex-column  mb-3">
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter City"
                value={formData.city}
                name="city"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex flex-column" style={{ marginTop: "47.5px" }}>
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter Country"
                value={formData.country}
                name="country"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col ">
            <div className="d-flex flex-column mb-4">
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter State"
                value={formData.state}
                name="state"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex flex-column mb-4">
              <label className="registration-modal-label">Pincode</label>
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <div className="d-flex flex-column mb-4">
              <label className="registration-modal-label">Enter Landmark</label>
              <input
                className="registration-modal-input"
                placeholder="Enter Location"
                value={formData.pincode}
                name="pincode"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column">
                <lable className="registration-modal-label">
                  Marital Status
                </lable>
                <select
                  className="registration-modal-input"
                
                  name="marital_status"
                  value={formData.marital_status}
                  onChange={handleInputChange}
                >
                  <option value="">
                    Select Marital Status
                  </option>
                  <option>Married</option>
                  <option>Unmarried</option>
                </select>
              </div>
            </div>
          </div>
        </div>
       <div className="row">
<div className=" col d-flex align-items-center">
<div className="d-flex">
          <div className="d-flex ">
            <input
              type="radio"
              name="insurance"
              value="yes"
              checked={formData.insurance === "yes"}
              onChange={handleInputChange}
            ></input>
            <lable className="registration-modal-label me-3">Insurance</lable>
          </div>
          <div className="d-flex ">
            <input
              type="radio"
              name="insurance"
              value="no"
              checked={formData.insurance === "no"}
              onChange={handleInputChange}
            ></input>
            <lable className="registration-modal-label">No Insurance</lable>
          </div>
        </div>
</div>
<div className="col">
<div className="d-flex flex-column">
              <lable className="registration-modal-label">
                Patient Occupation
              </lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patient_occupation}
                name="patient_occupation"
                onChange={handleInputChange}
              ></input>
            </div>
</div>
</div>
       

        <div className="d-flex justify-content-end basicdetail-button-div">
          <button
            className="basicdetail-cancel-button"
            onClick={basichandleCancel}
          >
            CANCEL
          </button>
          <button className=" basicdetail-register-button">SUBMIT</button>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationModal;

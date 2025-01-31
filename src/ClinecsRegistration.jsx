import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ClinecsRegistration.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import UserDataContext from "./Context/UserDataContext";

const ClinecsRegistration = ({ setAddClinic }) => {
  const [formData, setFormData] = useState({
    clinic_name: "",
    clinic_mobile: "",
    clinic_owner: "",
    clinic_email: "",
    clinic_address: "",
    clinic_country: "",
    clinic_district: "",
    clinic_state: "",
    clinic_pincode: "",
    clinic_location: "",
    clinic_licence_no: "",
    clinic_reg_date: "",
    clinic_tin_no: "",
  });

  const navigate = useNavigate();
  const { apiBaseUrl } = useContext(UserDataContext);
  // Handle form data change

  const handleDateChange = (date) => {
    const selectedDate = new Date(date);

    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    // Generate slots for the selected date
    setFormData((prevFormData) => ({
      ...prevFormData,
      clinic_reg_date: formatDate,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.clinic_pincode.length !== 6) {
      alert("Pincode must be exactly 6 digits.");
    }

    try {
      const response = await axios.post(`${apiBaseUrl}add_clinic`, formData);

      if (response.data) {
        window.alert("Clinic submitted successfully:");
        setFormData({
          clinic_name: "",
          clinic_mobile: "",
          clinic_owner: "",
          clinic_email: "",
          clinic_address: "",
          clinic_country: "",
          clinic_district: "",
          clinic_state: "",
          clinic_pincode: "",
          clinic_location: "",
          clinic_licence_no: "",
          clinic_reg_date: "",
          clinic_tin_no: "",
        });
        setAddClinic(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <p className="clinecs-1stdiv-text">Clinic Registration</p>
      <form onSubmit={handleFormSubmit}>
        <div className="clinic-main-div row bg">
          <div className="col clinecs-first-col pb-0">
            <div className="d-flex flex-column mb-4">
              <label>Hospital / Clinic Name</label>
              <input
                type="text"
                name="clinic_name"
                value={formData.clinic_name}
                onChange={handleInputChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                }}
                placeholder="Enter Hospital or Clinic"
                required
              />
            </div>
            <div className="d-flex flex-column mb-4">
              <label>Contact Number</label>
              <input
                type="text"
                name="clinic_mobile"
                value={formData.clinic_mobile}
                onChange={(e) => {
                  const { value } = e.target;
                  if (/^\d*$/.test(value)) {
                    setFormData((prevData) => ({
                      ...prevData,
                      clinic_mobile: value,
                    }));
                  }
                }}
                placeholder="Enter Contact Number"
                required
              />
            </div>
          </div>
          <div className="col clinecs-first-col pb-0">
            <div className="d-flex flex-column mb-4">
              <label>Contact Person</label>
              <input
                type="text"
                name="clinic_owner"
                value={formData.clinic_owner}
                onChange={handleInputChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                }}
                placeholder="Enter Contact Person"
                required
              />
            </div>
            <div className="d-flex flex-column mb-4">
              <label>Email ID</label>
              <input
                type="email"
                name="clinic_email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email Id"
                required
              />
            </div>
          </div>
          <div className="p-0">
            <div className="col clinecs-first-col py-0">
              <div className="d-flex flex-column mb-4">
                <label>Address</label>
                <input
                  type="text"
                  name="clinic_address"
                  value={formData.clinic_address}
                  onChange={handleInputChange}
                  placeholder="Enter Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col clinecs-first-col py-0">
              <div className="d-flex flex-column  mb-4">
                <input
                  type="text"
                  name="clinic_district"
                  value={formData.clinic_district}
                  onChange={handleInputChange}
                  placeholder="Enter City"
                  required
                />
              </div>
              <div
                className="d-flex flex-column"
                style={{ marginTop: "47.5px" }}
              >
                <input
                  type="text"
                  name="clinic_country"
                  value={formData.clinic_country}
                  onChange={handleInputChange}
                  placeholder="Enter Country"
                  required
                />
              </div>
            </div>
            <div className="col clinecs-first-col py-0 pe-0">
              <div className="d-flex flex-column mb-4">
                <input
                  type="text"
                  name="clinic_state"
                  value={formData.clinic_state}
                  onChange={handleInputChange}
                  placeholder="Enter State"
                  required
                />
              </div>
              <div className="d-flex flex-column mb-4">
                <label>Pincode</label>
                <input
                  type="text"
                  name="clinic_pincode"
                  value={formData.clinic_pincode}
                  onChange={(e) => {
                    const { value } = e.target;
                    // Allow only numeric input with a maximum length of 6
                    if (/^\d{0,6}$/.test(value)) {
                      setFormData((prevData) => ({
                        ...prevData,
                        clinic_pincode: value,
                      }));
                    }
                  }}
                  placeholder="Enter Pincode"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col clinecs-first-col pb-0 pt-0">
              <div className="d-flex flex-column mb-4">
                <label>Enter Landmark</label>
                <input
                  name="clinic_location"
                  value={formData.clinic_location}
                  onChange={handleInputChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\d/g, "");
                  }}
                  placeholder="Enter Location"
                  required
                ></input>
              </div>
              <div className="d-flex flex-column mb-4">
                <label>Practising Licence Number</label>
                <input
                  type="text"
                  name="clinic_licence_no"
                  value={formData.clinic_licence_no}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^\d*$/.test(value)) {
                      setFormData((prevData) => ({
                        ...prevData,
                        clinic_licence_no: value,
                      }));
                    }
                  }}
                  placeholder="Enter Practising Licence Number"
                  required
                />
              </div>
            </div>
            <div className="col clinecs-first-col pb-0 pt-0 pe-0">
              <div className="d-flex flex-column mb-4">
                <label>Date Of Registration</label>
                {/* <input
                  type="date"
                  name="clinic_reg_date"
                  value={formData.clinic_reg_date}
                  onChange={handleInputChange}
                  required
                /> */}
                <DatePicker
                  selected={formData.clinic_reg_date}
                  minDate={new Date()}
                  onChange={handleDateChange}
                  customInput={<CustomInput />}
                />
              </div>
              <div className="d-flex flex-column mb-4">
                <label>Enter TIN Number</label>
                <input
                  type="text"
                  name="clinic_tin_no"
                  value={formData.clinic_tin_no}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^\d*$/.test(value)) {
                      setFormData((prevData) => ({
                        ...prevData,
                        clinic_tin_no: value,
                      }));
                    }
                  }}
                  placeholder="Enter TIN Number"
                  required
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              onClick={() => setAddClinic(false)}
              className="medicalhistory-back-button"
            >
              CANCEL
            </button>
            <button type="submit" className="medicalhistory-nex-button">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClinecsRegistration;

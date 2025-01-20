import React, { useContext, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import UserDataContext from "./Context/UserDataContext";
import axios from "axios";

const PastPatientRecReg = () => {
  const { apiBaseUrl } = useContext(UserDataContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    register_date: "",
    dob: "",
    patient_name: "",
    mobile: "",
    email: "",
    patient_occupation: "",
    location: "",

    marital_status: "",
    insurance: "",
    gender: "",
    blood: "",
    height: "",
    weight: "",
    doc_prescription: [],
    patient_photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
    console.log(formData);
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

  const handleEmpty = () => {
    setFormData({
      register_date: "",
      dob: "",
      patient_name: "",
      mobile: "",
      email: "",
      patient_occupation: "",
      location: "",

      marital_status: "",
      insurance: "",
      gender: "",
      blood: "",
      height: "",
      weight: "",
      doc_prescription: [],
      patient_photo: null,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    if (!formData.dob) {
      alert("Please select a date of birth");
    }

    const data = new FormData();
    for (const key in formData) {
      if (key == "doc_prescription") {
        formData[key].forEach((img, index) => {
          data.append(key[index], img);
        });
      } else {
        data.append(key, formData[key]);
      }
    }
    // try {
    //     const response = await axios.post(`${apiBaseUrl}`,data)
    //     if(response.data){
    //       alert(response.data.message)
    //  handleEmpty()

    //     }
    //   } catch (error) {
    //   alert("Error submitting form:", error);
    //   }
    console.log(formData);
  };

  const handlePresImage = (e) => {
    const reader = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, doc_prescription: reader }));
  };

  return (
    <div className="clinic-main-div p-3">
      <form onSubmit={handleFormSubmit}>
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
        <div className="row mt-3">
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Patient Name</lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patient_name}
                name="patient_name"
                onChange={handleInputChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                }}
                required
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
                onChange={(e) => {
                  const { value } = e.target;
                  if (/^\d*$/.test(value)) {
                    setFormData((prevData) => ({
                      ...prevData,
                      mobile: value,
                    }));
                  }
                }}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="row mt-3">
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
        <div className="row mt-3">
          <div className="col">
          <div className="d-flex flex-column mb-3">
              <label className="registration-modal-label">Marital Status</label>
              <select
                className="registration-modal-input"
             
            
                value={formData.marital_status}
                name="marital_status"
                onChange={handleInputChange}
              >
                <option value="">Select Marital Status</option>
                <option>Married</option>
                  <option>Unmarried</option>
              </select>
            </div>
            
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Blood Group</lable>
              <select
                className="registration-modal-input"
                value={formData.blood}
                name="blood"
                onChange={handleInputChange}
              >
                <option value="">Select Blood</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="d-flex flex-column">
              <label className="registration-modal-label">Height</label>
              <input
                className="registration-modal-input"
                value={formData.height}
                name="height"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Weight</lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.weight}
                name="weight"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="p-0 mt-3">
          <div className="col ">
            <div className="d-flex flex-column mb-3">
              <label className="registration-modal-label">Location</label>
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter Address"
                value={formData.location}
                name="location"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        {/* <div className="row">
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
                </div> */}
        {/* <div className="row">
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
                        <input
                          className="registration-modal-input"
                          type="text"
                          name="marital_status"
                          value={formData.marital_status}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div> */}
        <div className="row">
          <div className="col d-flex align-items-center">
            <div className="d-flex">
              <div className="d-flex ">
                <input
                  type="radio"
                  name="insurance"
                  value="yes"
                  checked={formData.insurance === "yes"}
                  onChange={handleInputChange}
                ></input>
                <lable className="registration-modal-label me-3">
                  Insurance
                </lable>
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

        <div className="row mt-3">
          <div className="col">
            <div className="d-flex flex-column">
              <label className="registration-modal-label">
                Doctor Prescription
              </label>
              <input
                className="registration-modal-input p-0"
                type="file"
                name="doc_prescription"
                onChange={handlePresImage}
                accept=".png, .jpg, .jpeg"
                multiple
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Patient Photo</lable>
              <input
                className="registration-modal-input p-0"
                type="file"
                name="patient_photo"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center basicdetail-button-div">
          <button
            className="basicdetail-cancel-button"
            type="button"
            // onClick={basichandleCancel}
          >
            CANCEL
          </button>
          <button className=" basicdetail-register-button">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default PastPatientRecReg;

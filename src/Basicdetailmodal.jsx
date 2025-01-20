import "./Basicdetailmodal.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { BsCake } from "react-icons/bs";
import { FaDroplet } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
// import React from 'react';
import { Collapse, Input } from "antd";
import { GiConsoleController } from "react-icons/gi";

const Basicdetailmodal = ({
  basicisModalOpen,
  basichandleOk,
  basichandleCancel,
}) => {
  const [startDate, setStartDate] = useState();
  const [insureDate, setInsureDate] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [address4, setAddress4] = useState("");
  const [address5, setAddress5] = useState("");
  const [address6, setAddress6] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doc_name: "",
    doc_contact: "",
    patient_name: "",
    marital_status: "",
    dob: "",
    age: "",
    gender: "",
    blood_group: "",
    contact_num: "",
    email_id: "",
    aadhar: "",
    pan: "",
    passport_no: "",
    visa_status: "",
    relationship: "",
    relation_contact: "",
    insure_company: "",
    insure_id: "",
    placeholder_name: "",
    insure_dob: "",
    address: `${address1} ${address2} ${address3} ${address4} ${address5} ${address6}`,
    taking_medication: "",
    reason: "",
    additonal_notes: "",
  });

  console.log(formData);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const { Panel } = Collapse;
  return (
    <div>
      <Modal
        className="basic-modal-content"
        open={basicisModalOpen}
        onOk={basichandleOk}
      >
        <div className="d-flex align-items-end parameter-1st-container">
          <p className="mb-0 parameter-parameter-text">Admission</p>
          <div className="parameter-img-pencil">
            <img
              className=" docimage ms-2"
              src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ width: "60px", height: "60px" }}
            ></img>
            <TiPencil className="basicmodal-tipencil " />
          </div>

          <span
            onClick={basichandleCancel}
            className="parameter-1stdiv-cancelspan"
          >
            <MdCancel className="parameter-1st-div-cancel" />
          </span>
        </div>
        <div className="row">
          <div className="col basicdetail-1st-col">
            <div className="mb-2">
              <span className="basic-modal-titel">Admission Date and Time</span>
            </div>
            <div className="row mb-2">
              <div className="col-1 basic-modal-col1">
                <BsCake style={{ width: "20px", height: "20px" }} />
              </div>
              <div
                className="d-flex flex-column basicmodal-date-picker-col col-6"
                style={{ width: "45%" }}
              >
                <label className="docdetail-input-label">DATE*</label>
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => handleAddDateChange("date", date)}
                  customInput={<CustomInput />}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={80}
                  scrollableMonthYearDropdown
                />
              </div>
              <div
                className="col-5 d-flex flex-column"
                style={{ width: "43%" }}
              >
                <div>
                  <lablel className="docdetail-input-label">TIME</lablel>
                </div>

                <input
                  className="basicdetail-time-input"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  name="time"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="d-flex flex-row">
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      CONSULTING DOCTOR NAME{" "}
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <select
                      id="gender"
                      value={formData.doc_name}
                      name="doc_name"
                      onChange={handleInputChange}
                    >
                      <option value="volvo"></option>
                      <option value="saab">MR</option>
                      <option value="opel">MRS</option>
                      <option value="audi">""</option>
                    </select>

                    <span className="ms-2">
                      <FaDroplet />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-column  mt-1">
                    <label className="docdetail-input-label">
                      DOCTOR'S CONTACT NUMBER
                    </label>
                    <input
                      className="basicdetail-double-inputfield"
                      type="text"
                      value={formData.doc_contact}
                      name="doc_contact"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">PATIENT NAME*</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.patient_name}
                    name="patient_name"
                    onChange={handleInputChange}
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">
                    MARITAL STATUS*
                  </label>
                  <select
                    id="gender"
                    value={formData.marital_status}
                    name="marital_status"
                    onChange={handleInputChange}
                  >
                    <option value="volvo"></option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    DATE OF BIRTH*
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />

                  <DatePicker
                    selected={formData.date}
                    onChange={(date) => handleAddDateChange("dob", date)}
                    customInput={<CustomInput />}
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={80}
                    scrollableMonthYearDropdown
                  />
                  <span className="ms-2">(or)</span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">AGE*</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.age}
                    name="age"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">GENDER*</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    name="gender"
                  >
                    <option value="volvo"></option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">BLOOD GROUP</label>
                  <select
                    id="gender"
                    value={formData.blood_group}
                    name="blood_group"
                    onChange={handleInputChange}
                  >
                    <option value="volvo"></option>
                    <option value="saab">O+</option>
                    <option value="opel">O-</option>
                    <option value="audi">A+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                ></div>
              </div>
            </div>
            <div className="d-flex flex-row ">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    CONTACT NUMBER
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.contact_num}
                    name="contact_num"
                    onChange={handleInputChange}
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">EMAIL ID</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.email_id}
                    name="email_id"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    {" "}
                    AADHAAR CARD NUMBER
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.aadhar}
                    name="aadhar"
                    onChange={handleInputChange}
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">PAN NUMBER</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.pan}
                    name="pan"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    PASSPORT NUMBER
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.passport_no}
                    name="passport_no"
                    onChange={handleInputChange}
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1 ">
                  <label className="docdetail-input-label">VISA STATUS</label>
                  <select
                    id="gender"
                    value={formData.visa_status}
                    name="visa_status"
                    onChange={handleInputChange}
                  >
                    <option></option>
                    <option>Live</option>
                    <option>Expired</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <span className="basic-modal-titel ">Emergency Contact</span>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">RELATIONSHIP</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.relationship}
                    name="relationship"
                    onChange={handleInputChange}
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1 ">
                  <label className="docdetail-input-label">
                    CONTACT NUMBER*
                  </label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                    value={formData.relation_contact}
                    name="relation_contact"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-column me-3">
              <div>
                <span className="basic-modal-titel mb-2">
                  Insurance Information
                </span>
              </div>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      INSURANCE COMPANY
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <select
                      id="gender"
                      value={formData.insure_company}
                      name="insure_company"
                      onChange={handleInputChange}
                    >
                      <option></option>
                      <option>Ackwo</option>
                      <option>Check</option>
                      <option>""</option>
                    </select>
                    <span className="ms-2">
                      <FaDroplet />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-column  mt-1 ">
                    <label className="docdetail-input-label">
                      INSURANCE ID
                    </label>
                    <input
                      className="basicdetail-double-inputfield"
                      type="text"
                      value={formData.insure_id}
                      name="insure_id"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      PLACEHOLDER'S NAME
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <input
                      className="basicdetail-double-inputfield"
                      type="text"
                      value={formData.placeholder_name}
                      name="placeholder_name"
                      onChange={handleInputChange}
                    />

                    <span className="ms-2">
                      <FaDroplet />
                    </span>
                  </div>
                </div>
                <div style={{ width: "43.5%" }}>
                  <div className="d-flex flex-column  mt-1 ">
                    <label className="docdetail-input-label">
                      DATE OF BIRTH
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) =>
                        handleAddDateChange("insure_dob", date)
                      }
                      customInput={<CustomInput />}
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={80}
                      scrollableMonthYearDropdown
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-end">
              <p className="me-5">*Mandatory fields</p>
            </div>
          </div>
          <div className="col">
            <div className="bascidetail-2ndcol-div">
              <div className="mb-2">
                <Collapse
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                  defaultActiveKey={["1"]}
                >
                  <Panel header="CONTACT ADDRESS*" key="1">
                    <div>
                      <div className="d-flex flex-column">
                        <input
                          type="text"
                          placeholder="Address 1"
                          className="basicdetail-collape-input"
                          name="address1"
                          value={address1}
                          onChange={(e) => setAddress1(e.target.value)}
                        ></input>
                        <input
                          type="text"
                          placeholder="Address 2"
                          className="basicdetail-collape-input"
                          name="address2"
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                          name="address3"
                          value={address3}
                          onChange={(e) => setAddress3(e.target.value)}
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                          name="address4"
                          value={address4}
                          onChange={(e) => setAddress4(e.target.value)}
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                          name="address5"
                          value={address5}
                          onChange={(e) => setAddress5(e.target.value)}
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                          name="address6"
                          value={address6}
                          onChange={(e) => setAddress6(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
                <div className="mt-2 mb-2">
                  <span className="basic-modal-titel ">Health History</span>
                </div>
                {/* <div>
            <label className="docdetail-input-label">PATIENT NAME*</label>
            </div> */}
                {/* <div className="row">
<div className="col d-flex justify-content-center ">
  <label className="me-2">YES</label> <input type="checkbox"></input>
</div>
<div className="col d-flex">
<label className="me-2">NO</label> <input type="checkbox"></input>
</div>
            </div> */}
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      TAKING ANY MEDICATIONS, CURRENTLY?
                    </label>
                  </div>

                  <div className="d-flex">
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <div className="row">
                      <div
                        className="col d-flex justify-content-center"
                        style={{ marginLeft: "17px" }}
                      >
                        <label className="me-2">YES</label>{" "}
                        <input
                          type="checkbox"
                          name="taking_medication"
                          value="yes"
                          checked={formData.taking_medication === "yes"}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                      <div className="col d-flex">
                        <label className="me-2">NO</label>{" "}
                        <input
                          type="checkbox"
                          name="taking_medication"
                          value="no"
                          checked={formData.taking_medication === "no"}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      REASON FOR REGISTRATION
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <input
                      style={{ width: "95%" }}
                      className="basicmodal-reason-registration"
                      type="text"
                      value={formData.reason}
                      name="reason"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ padding: " 2px 0px 2px 33px" }}
              >
                <label className="docdetail-input-label">
                  ADDITIONAL NOTES
                </label>
              </div>

              <div>
                <BsCake
                  className="me-2"
                  style={{ width: "20px", height: "20px" }}
                />
                <input
                  style={{ width: "93%", height: "100px" }}
                  className="basicmodal-reason-registration"
                  type="text"
                  value={formData.additonal_notes}
                  name="additonal_notes"
                  onChange={handleInputChange}
                />
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
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Basicdetailmodal;

import React from "react";
import "./Patient.css";
import { Patienttable } from "./Patienttable";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

function Patient() {
  const [startDate, setStartDate] = useState();
  const [toDate, setToDate] = useState();
  const [docName, setDocName] = useState("All");
  const [clinicName, setClinicName] = useState("All");
  const [treatmentName, setTreatmentName] = useState("All");
  const CustomInput = ({ value, onClick }) => (
    <button className="paitent-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );
  return (
    <div className="me-2 bg">
      <p className="clinic-title mb-1">Patient Stats</p>
      <div className="d-flex patient-hearder-div row">
        <div className="d-flex flex-column col ">
          <label className="patientbooking-input-label ms-3">From</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInput />}
          />
        </div>
        <div className="d-flex flex-column col">
          <label className="patientbooking-input-label ms-3">To</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            customInput={<CustomInput />}
          />
        </div>
        <div className="d-flex flex-column col">
          <label className="patientbooking-input-label ms-3">
            Select Hospital / Clinic
          </label>
          <select
            onChange={(e) => setClinicName(e.target.value)}
            name="man"
            id="patient-doctor"
          >
            <option>All</option>
            <option>Apollo</option>
            <option>Sunshine</option>
            <option>Kaaveri</option>
          </select>
        </div>
        <div className="d-flex flex-column col">
          <label className="patientbooking-input-label ms-3">
            Select Doctor
          </label>
          <select
            onChange={(e) => setDocName(e.target.value)}
            name="man"
            id="patient-doctor"
          >
            <option>All</option>
            <option>Dr Karunakaran</option>
            <option>Dr Senthil</option>
            <option>Dr kumar</option>
          </select>
        </div>
        <div className="d-flex flex-column col">
          <label className="patientbooking-input-label ms-3">
            Select Treatment
          </label>
          <select
            onChange={(e) => setTreatmentName(e.target.value)}
            name="man"
            id="patient-doctor"
          >
            <option>All</option>
            <option>Spine</option>
            <option>Neuro</option>
            <option>Full Body</option>
          </select>
        </div>
      </div>
      <div className="patient-table-div">
        <Patienttable
          startDate={startDate}
          toDate={toDate}
          clinicName={clinicName}
          docName={docName}
          treatmentName={treatmentName}
        />
      </div>
    </div>
  );
}

export default Patient;

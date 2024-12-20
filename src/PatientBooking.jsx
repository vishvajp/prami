import "./PatientBooking.css";
import React, { useEffect, useState, useContext } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import UserDataContext from "./Context/UserDataContext";
import { useAsyncError } from "react-router-dom";
import { format } from 'date-fns'

const PatientBooking = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [eventDate, setEventDate] = useState(null);
  const [treatmentType, setTreatmentType] = useState("");
  const [createEve, setCreateEve] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientMobile, setPatientMobile] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [singleDocName, setSingleDocName] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [visitReason, setVisitReason] = useState("");
  const [physioAsset, setPhysioAsset] = useState("");
  const [errors, setErrors] = useState({});
  const [clinicName, setClinicName] = useState("");
  const [clinic, setClinic] = useState("");
  const [clinicData, setClinicData] = useState(null);
  const { apiBaseUrl } = useContext(UserDataContext);
  const user = "physiotherapy";

  // const date = new Date(selectedSlot);
  // const customFormattedTime = date.toLocaleTimeString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  //   hour12: true, // '7:00:00 PM'
  // });

  const selectedDate = new Date(startDate);

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleTreatmentType = (e) => {
    setTreatmentType(e.target.value);
  };
  console.log(treatmentType);

  // console.log(selectedSlot);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate = value ? format(new Date(value), "dd/MM/yyyy") : "DD/MM/YYYY";
    
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
  console.log(createEve);

  console.log(
    `${apiBaseUrl}get_timeslot_list/${selectedDoctor}/${formattedDate}`
  );

  useEffect(() => {
    const getClinicData = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_clinic_list`);
        if (response.data) {
          setClinicData(response.data.data);
          console.log(clinicData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getClinicData();
  }, [isModalOpen]);

  useEffect(() => {
    if (clinic) {
      const getDocData = async () => {
        try {
          const response = await axios.post(
            `${apiBaseUrl}get_doctor/${clinic}`
          );
          if (response.data) {
            setDoctorData(response.data.data);
            console.log(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getDocData();
    }
  }, [clinic]);

  // useEffect(() => {
  //   const specDoc = selectedDoctor ? selectedDoctor : singleDocName;
  //   if (specDoc && formattedDate) {
  //     const formattedDateWithoutSpaces = formattedDate.replace(/ /g, "-");

  //     const getSlot = async () => {
  //       try {
  //         const response = await axios.post(
  //           `${apiBaseUrl}get_timeslot_list/${specDoc}/${formattedDateWithoutSpaces}`
  //         );
  //         if (response.data) {
  //           setAvailableSlots(response.data.data);
  //           console.log(response.data.data);
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getSlot();
  //   }
  // }, [formattedDate, startDate]);

  useEffect(() => {
    const specDoc = selectedDoctor ? selectedDoctor : singleDocName;
    if (specDoc && startDate ) {
      const formattedDateWithoutSpaces = formattedDate.replace(/ /g, "-");
      const getSlot = async () => {
        try {
          const response = await axios.post(
            `${apiBaseUrl}get_timeslot_list/${specDoc}/${formattedDateWithoutSpaces}`
          );
          if (response.data) {
            setAvailableSlots(response.data.data);
            console.log(response.data.data);
          }
        } catch (err) {
          setAvailableSlots([])
          console.log(err);
        }
      };
      getSlot();
    }
  }, [formattedDate, startDate]); // Add startDate to the dependency array

  const handleCliniChange = (e) => {
    const singleClinicName = e.target.value;
    setClinicName(singleClinicName);
    const selectedClinic = clinicData?.find(
      (clinic) => clinic.clinic_name === singleClinicName
    );
    setClinic(selectedClinic?.clinic_id);
  };

  const handleDoctorChange = (event) => {
    setStartDate(null);
    setAvailableSlots([]);
    const specDocName = event.target.value;
    setSingleDocName(specDocName);
    const getDocId = doctorData?.find(
      (docname) => docname.doc_name === specDocName
    );
    setSelectedDoctor(getDocId?.doctor_id);
  };

  
  const handleEventDateChange = (date) => {
    setEventDate(date);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  console.log(clinic);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

 
    const formData = {
      patientName,
      patientMobile,
      clinic,
      doctor: selectedDoctor ? selectedDoctor : singleDocName,
      appointmentType,
      appointmentDate: formattedDate,
      treatmentType,
      referralSource,
      visitReason,
      selectedSlot,
      physioAsset: physioAsset ? physioAsset : "-",
    };

    console.log(formData);

  try {
    const response = await axios.post(
      "https://cvmvreddystrust.com/App/tsitClient2024/prami/public/api/bookappointment",
      formData
    );
    if (response.data) {
      window.alert("Appointment booked successfully:", response.data);
      setPatientName("");
      setPatientMobile("");
      setClinic("");
      setClinicName("");
      setSingleDocName("");
      setSelectedDoctor("");
      setAppointmentType("");
      setStartDate(null);
      setTreatmentType("");
      setReferralSource("");
      setVisitReason("");
      setSelectedSlot(null);
      setPhysioAsset("");
setSelectedSlot([])
      handleCancel();
    }
  } catch (error) {
    console.error("Error booking appointment:", error);
  }

   
  };

  console.log(selectedSlot);

  const handleModalCancel = () => {
    setCreateEve(true);
    setPatientName("");
    setPatientMobile("");
    setClinic("");
    setClinicName("");
    setSingleDocName("");
    setSelectedDoctor("");
    setAppointmentType("");
    setStartDate(null);
    setTreatmentType("");
    setReferralSource("");
    setVisitReason("");
    setSelectedSlot(null);
    setPhysioAsset("");
    setAvailableSlots([])
    handleCancel(); // Call the function
  };

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk}>
        {createEve && (
          <div className="row">
            <div className="col-3 patientbooking-1st-col ">
              <div>
                <div className="patientbooking-img-pencil d-flex justify-content-center">
                  <img
                    className=" docimage ms-2"
                    src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ width: "90px", height: "90px" }}
                  ></img>
                  <TiPencil className="patientbooking-tipencil" />
                </div>
              </div>
              <span
                onClick={handleModalCancel}
                className="patientbooking-1stdiv-cancelspan"
              >
                <MdCancel className="patientbooking-1st-div-cancel" />
              </span>
              {/* <p className="text-center mb-0 patientbooking-searchpatient-text">
                Search Patient
              </p>
              <p className="text-center mb-0 patientbooking-dot-text">
                ....................
              </p> */}
              <p className="text-center mb-0 patientbooking-datetime-appointment">
                Selected Date & Slot
              </p>
              <p className="text-center mb-0 patientbooking-date-text">
              {formattedDate ? formattedDate : "-----"}
              </p>
              <p className="text-center mb-0 patientbookin-time-text">
             {selectedSlot ? selectedSlot : "-----"}
              </p>
              <p className="text-center mb-0 patientbooking-dot-text">
                ....................
              </p>
              <p className="text-center mb-0 patientbooking-datetime-appointment">
                Appointment with
              </p>
              <p className="text-center mb-0 patientbooking-dr-text">
                {singleDocName ? singleDocName : "-----"}
              </p>
            </div>
            <div className="col-8 ms-4">
              <div className="d-flex mt-4">
                <p className="patientbooking-bookingappointment-text">
                  {" "}
                  You are{" "}
                  <span className="patientbooking-book-span">Booking</span> an
                  appointment
                </p>
                <p
                  className="mb-0 patientbooking-createevent-text"
                  onClick={() => setCreateEve(!createEve)}
                >
                  {" "}
                  Create Event
                </p>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="row">
                  <div
                    className="col"
                    style={{ padding: "10px 10px 5px 10px" }}
                  >
                   
                    <div className="d-flex flex-column">
                      <label className="patientbooking-input-label">
                        Select Clinic
                      </label>
                      <select
                        required
                        value={clinicName}
                        onChange={handleCliniChange}
                        name="man"
                        id="appointment"
                      >
                        <option value="">Select Clinic</option>
                        {clinicData ? (
                          clinicData.map((nameOfClinc) => (
                            <option key={nameOfClinc.clinic_name}>
                              {nameOfClinc.clinic_name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Loading...</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div
                    className="col"
                    style={{ padding: "10px 25px 5px 10px" }}
                  >
                    <div className="d-flex flex-column">
                      <label className="patientbooking-input-label">
                        Name Of The Patient
                      </label>
                      <input
                        className="patientbooking-2col-patient-input"
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Enter Name"
                        required
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column me-3">
                  <div className="d-flex mt-2 row">
                    <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label ms-3">
                        Choose Doctor
                      </label>
                      <select
                        name="doctor"
                        value={singleDocName}
                        id="doctor"
                        onChange={handleDoctorChange}
                        required
                      >
                        <option value="">Select doctor</option>
                        {doctorData && clinic ? (
                          doctorData.map((docname) => (
                            <option key={docname.doc_name}>
                              {docname.doc_name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Loading...</option>
                        )}
                        {clinicName && <option>{user}</option>}
                      </select>
                    </div>

                    <div
                      className="col"
                      style={{ padding: "0px 10px 5px 10px" }}
                    >
                      <div className="d-flex flex-column">
                        <label className="patientbooking-input-label">
                          Mobile Number
                        </label>
                        <input
                          className="patientbooking-2col-patient-input"
                          type="tel"
                          value={patientMobile}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, "");
                            setPatientMobile(value);
                          }}
                          maxLength={10}
                          placeholder="Enter Mobile Number"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2 row">
                  <div className="d-flex flex-column col">
                    <label className="patientbooking-input-label ms-3">
                      Appointment Type
                    </label>
                    <select
                      required
                      value={appointmentType}
                      onChange={(e) => setAppointmentType(e.target.value)}
                      name="man"
                      id="appointment"
                    >
                      <option value="">Select Appointment Type</option>
                      <option>New Appointment</option>
                      <option>Follow Up</option>
                    </select>
                  </div>
                  <div className="d-flex flex-column col">
                    <label className="patientbooking-input-label ms-3">
                      Appointment Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      minDate={new Date()}
                      onChange={handleDateChange}
                      customInput={<CustomInput />}
                      // required
                    />
                    {errors.startDate && (
                      <p className="error">{errors.startDate}</p>
                    )}{" "}
                    {/* Show error if date is not selected */}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="d-flex flex-column me-3">
                    <div className="d-flex row">
                      <div className="d-flex flex-column mt-2 col">
                        <label className="patientbooking-input-label ms-3">
                          Treatment Type
                        </label>
                        <select
                          value={treatmentType}
                          required
                          name="man"
                          id="appointment"
                          onChange={handleTreatmentType}
                        >
                          <option value="">Select Treatment</option>{" "}
                          {/* Set value as empty */}
                          {singleDocName !== "physiotherapy" && <option>Consultation</option>}
                          
                          {singleDocName === "physiotherapy" && (
                            <>
                              <option>Clinic Physio Asset</option>
                              <option>Home Care Asset</option>
                            </>
                          )}
                        </select>
                      </div>
                    <div className="col">
                    {treatmentType === "Clinic Physio Asset" && (
                      <div className="d-flex flex-column mt-2 ">
                        <label className="patientbooking-input-label ms-3">
                          Clinic Physio Asset
                        </label>
                        <select
                          id="appointment"
                          value={physioAsset}
                          onChange={(e) => setPhysioAsset(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="Super Inductive System">
                            Super Inductive System
                          </option>
                          <option value="Tecar Therapy">Tecar Therapy</option>
                          <option value="Shockwave Therapy">
                            Shockwave Therapy
                          </option>
                          <option value="Dry Needling Therapy">
                            Dry Needling Therapy
                          </option>
                          <option value="Tapping Therapy">
                            Tapping Therapy
                          </option>
                          <option value="Laser Therapy">Laser Therapy</option>
                          <option value="Pens Therapy">Pens Therapy</option>
                          <option value="UST,IFT,TENS,MST,RST,TRACTION">
                            UST,IFT,TENS,MST,RST,TRACTION
                          </option>
                          <option value="Cryotherapy">Cryotherapy</option>
                        </select>
                      </div>
                    )}
                    {treatmentType === "Home Care Asset" && (
                     
                      <div className="d-flex flex-column mt-2 col">
                        <label className="patientbooking-input-label ms-3">
                          Home Care Physio Asset
                        </label>
                        <select
                          id="appointment"
                          value={physioAsset}
                          onChange={(e) => setPhysioAsset(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="Super Inductive System">
                            Super Inductive System
                          </option>
                          <option value="Tecar Therapy">Tecar Therapy</option>
                          <option value="Shockwave Therapy">
                            Shockwave Therapy
                          </option>
                          <option value="Dry Needling Therapy">
                            Dry Needling Therapy
                          </option>
                          <option value="Tapping Therapy">
                            Tapping Therapy
                          </option>
                          <option value="Laser Therapy">Laser Therapy</option>
                          <option value="Pens Therapy">Pens Therapy</option>
                          <option value="UST,IFT,TENS,MST,RST,TRACTION">
                            UST,IFT,TENS,MST,RST,TRACTION
                          </option>
                          <option value="Cryotherapy">Cryotherapy</option>
                        </select>
                      </div>
                     
                   
                    )}
                    </div>
                    </div>
            
                      <div className="d-flex flex-column mt-3">
                        {availableSlots.length > 0 ? (
                          <>
                            {/* First Row (4 slots) */}
                            <div className="d-flex flex-wrap mb-1">
                              {availableSlots.map((slot, index) => (
                                <div
                                  key={index}
                                  className={`patientBooking-time-slot ms-1 mb-1 ${
                                    selectedSlot === slot ? "selected-slot" : ""
                                  }`}
                                  onClick={() => setSelectedSlot(slot)} // Update the selected slot state
                                >
                                  {slot}
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="mt-4">
                            <span className="patientBooking-time-slot">
                              No Slots available
                            </span>
                          </div>
                        )}
                      </div>
                    <div className="d-flex flex-column mt-2 ">
                      <label className="patientbooking-input-label ms-3">
                        Referral Source
                      </label>
                      <input
                        className="patientbooking-2col-patient-input"
                        type="text"
                        value={referralSource}
                        onChange={(e) => {
                          setReferralSource(e.target.value);
                        }}
                        placeholder="Enter Referral Source"
                      ></input>
                    </div>

                    <div
                      className="d-flex align-items-center"
                      style={{ padding: " 2px 0px 2px 10px" }}
                    >
                      <label className="patientbooking-input-label mt-2">
                        Visit Reason
                      </label>
                    </div>
                    <div>
                      <input
                        className="patientbooking-2col-patient-input"
                        type="text"
                        value={visitReason}
                        onChange={(e) => {
                          setVisitReason(e.target.value);
                        }}
                        placeholder="Enter Visit Reason"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex mt-3 gap-2">
                  <div className="d-flex align-items-center patientbooking-checkbox-input">
                    <input
                      className="patientbooking-input-checkbox me-1"
                      type="checkbox"
                    />
                    <label>Send SMS</label>
                  </div>
                  <div className="d-flex align-items-center patientbooking-checkbox-input">
                    <input
                      className="patientbooking-input-checkbox me-1"
                      type="checkbox"
                    />
                    <label>Send Email</label>
                  </div>
                  <div className="d-flex align-items-center patientbooking-checkbox-input">
                    <input
                      className="patientbooking-input-checkbox me-1"
                      type="checkbox"
                    />
                    <label>Send Whatsapp</label>
                  </div>
                </div>
                <div className="mt-5">
                  <button   type="button" className="patientbooking-addpatient-button">
                   
                    + ADD PATIENT
                  </button>
                  <button
                    className="patientbooking-bookappointment-button"
                    type="submit"
                  >
                    {" "}
                    BOOK APOINTMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {!createEve && (
          <div className="row">
            <div className="col-3 patientbooking-1st-col ">
              <div>
                <div className="patientbooking-img-pencil d-flex justify-content-center">
                  <img
                    className=" docimage ms-2"
                    src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ width: "90px", height: "90px" }}
                  ></img>
                  <TiPencil className="patientbooking-tipencil" />
                </div>
              </div>
              <span
                onClick={() => {
                  setCreateEve(true);
                  setIsModalOpen(false);
                }}
                className="patientbooking-1stdiv-cancelspan"
              >
                <MdCancel className="patientbooking-1st-div-cancel" />
              </span>
              <p className="text-center mb-0 patientbooking-searchpatient-text">
                Search Patient
              </p>
              <p className="text-center mb-0 patientbooking-dot-text">
                ....................
              </p>
              <p className="text-center mb-0 patientbooking-datetime-appointment">
                Selected Date & Time
              </p>
              <p className="text-center mb-0 patientbooking-date-text">
                Jan 30, 2024
              </p>
              <p className="text-center mb-0 patientbookin-time-text">
                09:45Hrs To 10:00 Hrs
              </p>
              <p className="text-center mb-0 patientbooking-dot-text">
                ....................
              </p>
              <p className="text-center mb-0 patientbooking-datetime-appointment">
                Appointment with
              </p>
              <p className="text-center mb-0 patientbooking-dr-text">
                Dr. Karunakaran S
              </p>
            </div>
            <div className="col-8 ms-4">
              <p className="event-top-title">MEDICAL EVENT APPLICATION FORM</p>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column">
                    <label
                      style={{ marginTop: "10px" }}
                      className="event-label"
                    >
                      Name
                    </label>
                    <input
                      placeholder="First Name"
                      className="event-input"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="col d-flex align-items-end">
                  <div style={{ width: "100%" }}>
                    <input
                      placeholder="Last Name"
                      className="event-input"
                      style={{ width: "100%" }}
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column">
                    <label className="event-label">Date of birth</label>
                    <DatePicker
                      selected={eventDate}
                      onChange={handleEventDateChange}
                      customInput={<CustomInput />}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <label style={{ marginTop: "10px" }} className="event-label">
                    Address
                  </label>
                  <input
                    placeholder="Street Address Line 1"
                    className="event-input"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    placeholder="Street Address Line 2"
                    className="event-input"
                    style={{ width: "100%" }}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <input
                    placeholder="City"
                    className="event-input"
                    type="text"
                  ></input>
                  <input
                    placeholder="Postal/Zip Code"
                    className="event-input"
                    type="text"
                  ></input>
                </div>
                <div className="col d-flex flex-column">
                  <input
                    placeholder="Region"
                    className="event-input"
                    type="text"
                  ></input>
                  <input
                    placeholder="Country"
                    className="event-input"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <label className="event-label"> Phone Number</label>
                  <input className="event-input" type="text"></input>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="d-flex flex-column">
                    <label className="event-label"> Over 65</label>
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable style={{ marginRight: "10px" }}>Yes</lable>
                      </div>
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable>No</lable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="d-flex flex-column">
                    <label
                      style={{ marginTop: "10px" }}
                      className="event-label"
                    >
                      {" "}
                      Current Patient
                    </label>
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable style={{ marginRight: "10px" }}>Yes</lable>
                      </div>
                      <div className="d-flex">
                        <input type="checkbox"></input>
                        <lable>No</lable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="event-cancel-button"
                  onClick={() => setCreateEve(true)}
                >
                  Cancel
                </button>
                <button className="event-submit-button">Submit</button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientBooking;

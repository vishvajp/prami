import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns'
import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
import "./Appointment.css";
import { FaSearch } from "react-icons/fa";
import { AppointmentTable } from "./AppointmentTable";

import ParameterModal from "./ParameterModal";
import Paymentmodal from "./Paymentmodal";
import WalkInConsult from "./WalkInConsult";
import UserDataContext from "./Context/UserDataContext";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [basicisModalOpen, basicsetIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState();
  const [toDate, setToDate] = useState();
  const [isModalOpenPayment, setIsModalOpenPayment] = useState(false);
  const [clinic, setClinic] = useState("");
  const [clinicData, setClinicData] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState("All");
  const [selectTreatment, setSelectTreatment] = useState("All Treatment");
  const [searchpatient,setSearchPatient]=useState("")
  const [doctorData, setDoctorData] = useState(null);
  const [chooseDays, setChooseDays] = useState("Appointment List");

  const [clinicName, setClinicName] = useState("");
  const [singleDocName, setSingleDocName] = useState("");
  const user = "physiotherapy"
  const [walkinModalOpen, setWalkinModalOpen] = useState(false);
  const { apiBaseUrl,setRefreshAppointments } = useContext(UserDataContext);
   
  const currentDayDate = new Date();
  currentDayDate.setHours(0, 0, 0, 0);

  const handleSelectWeek = () => {
    const weekday = new Date(currentDayDate);
    weekday.setDate(weekday.getDate() + 7);

    weekday.setHours(0, 0, 0, 0);
    setStartDate(currentDayDate);
    setToDate(weekday);
    setChooseDays("Week");
  };

  const handleSelectMonth = () => {
    const monthDay = new Date(currentDayDate);
    monthDay.setDate(monthDay.getDate() + 30);
    monthDay.setHours(0, 0, 0, 0);
    setStartDate(currentDayDate);
    setToDate(monthDay);
    setChooseDays("Month");
  };

  // Parametermodal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const showModalPayment = () => {
    setIsModalOpenPayment(true);
  };
  const paymenthandleOk = () => {
    setIsModalOpenPayment(false);
  };
  const paymenthandleCancel = () => {
    setIsModalOpenPayment(false);
  };

  // walk in consultancy modal

  const walkinShowModal = () => {
    setWalkinModalOpen(true);
  };
  const walkInHandleOk = () => {
    setWalkinModalOpen(false);
  };
  const walkinHandleCancel = () => {
    setWalkinModalOpen(false);
  };


  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate = value ? format(new Date(value), "dd/MM/yyyy") : "DD/MM/YYYY";
    
    return (
      <button
        ref={ref}
        type="button"
        className="appointment-date-booking"
        onClick={onClick}
      >
        {formattedDate} <FaCalendarAlt className="homepage-date-icon" />
      </button>
    );
  });

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
  }, [apiBaseUrl]);

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

  const handleCliniChange = (e) => {
    const singleClinicName = e.target.value;
    setClinicName(singleClinicName);
    const selectedClinic = clinicData?.find(
      (clinic) => clinic.clinic_name === singleClinicName
    );
    setClinic(selectedClinic?.clinic_id);
  };

  const handleDoctorChange = (event) => {
 
    const specDocName = event.target.value;
    setSingleDocName(specDocName);
    const getDocId = doctorData?.find(
      (docname) => docname.doc_name === specDocName
    );
    setSelectedDoctor(getDocId?.doctor_id);
  };

  return (
    <div className="bg">
      <div className="appointment-servicelist">
        <p className="mb-0 appointment-servicelist-text">Service List</p>
        <div className="d-flex ">
          <div className="d-flex align-items-center ">
            <div className="d-flex align-items-center appointment-1st-div">
              <span
                style={{
                  backgroundColor:
                    chooseDays === "Appointment List" ? "green" : "white",
                  color: chooseDays === "Appointment List" ? "white" : "black",
                }}
                onClick={() => {
                  setChooseDays("Appointment List");
                  setStartDate(null);
                  setToDate(null);
                }}
                className="appointment-appointmentlist-text"
              >
                Appointment List
              </span>
              <span
                onClick={() => {
                  const day = new Date(currentDayDate);
    day.setDate(day.getDate() + 1); 
                  setChooseDays("Day");
                  setStartDate(currentDayDate);
                  setToDate(day);
                }}
                style={{
                  backgroundColor: chooseDays === "Day" ? "green" : "white",
                  color: chooseDays === "Day" ? "white" : "black",
                }}
                className="appointment-span"
              >
                Day
              </span>
              <span
                style={{
                  backgroundColor: chooseDays === "Week" ? "green" : "white",
                  color: chooseDays === "Week" ? "white" : "black",
                }}
                onClick={handleSelectWeek}
                className="appointment-span"
              >
                Week
              </span>
              <span
                style={{
                  backgroundColor: chooseDays === "Month" ? "green" : "white",
                  color: chooseDays === "Month" ? "white" : "black",
                }}
                onClick={handleSelectMonth}
                className="appointment-span"
              >
                Month
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-end justify-content-end"
            style={{ width: "100%" }}
          >
            <span
              style={{ width: "25%" }}
              className="mb-0 appointment-2div-walk"
              onClick={walkinShowModal}
            >
              {" "}
              WALK-IN CONSULTATION
            </span>
          </div>
        </div>
      </div>
      <div className="appointment-servicelist row">
        <div className="d-flex flex-column col ">
          <label className="docdetail-input-label" for="Education">
            From
          </label>

          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            customInput={<CustomInput />}
            
          />
        </div>
        <div className="d-flex flex-column col ">
          <label className="dashboard-input-label ms-3">To</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            customInput={<CustomInput />}
          />
        </div>
       
  <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label">
                        Select Clinic
                      </label>
                      <select
                        required
                        value={clinicName}
                        onChange={handleCliniChange}
                        name="man"
                        id="doctors"
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
                    <div className="d-flex flex-column col">
                      <label className="patientbooking-input-label ms-3">
                        Choose Doctor
                      </label>
                      <select
                        name="doctor"
                        value={singleDocName}
                        id="doctors"
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
        <div className="d-flex flex-column col ">
          <label className="docdetail-input-label" for="Education">
            Treatment Type
          </label>
          <select
            onChange={(e) => setSelectTreatment(e.target.value)}
            name="Education"
            id="doctors"
          >
            <option>All Treatment</option>
            <option>Consultation</option>
            <option>Clinic Physio Asset</option>
            <option>Home Care Asset</option>
          </select>
        </div>
      </div>
      <div className="appointment-table-part">
        <div
          className="d-flex justify-content-between  "
          style={{ padding: "0px 30px" }}
        >
          <div>
            <div className="appointment-appointmnet-text-abovetable">
              Appointment List
            </div>
          </div>
          <div className="appointment-search-bar">
            <div className="appointment-search-input-div">
              <span className="appointmnet-search-icon">
                {" "}
                <FaSearch />
              </span>
              <input
                placeholder="Search Booked Patient"
                type="text"
                className="appointment-search-input"
                value={searchpatient}
                onChange={(e)=>{setSearchPatient(e.target.value)}}
              />
            </div>
          </div>
        </div>
        <AppointmentTable
          selectedDoctor={singleDocName}
          startDate={startDate}
          selectTreatment={selectTreatment}
          showModal={showModal}
          showModalPayment={showModalPayment}
          toDate={toDate}
          setSelectedDoctor={setSelectedDoctor}
          searchpatient = {searchpatient}
          selectClinic = {clinicName}
        ></AppointmentTable>
      </div>
      <ParameterModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></ParameterModal>
   
      <Paymentmodal
        isModalOpenPayment={isModalOpenPayment}
        paymenthandleOk={paymenthandleOk}
        paymenthandleCancel={paymenthandleCancel}
      />
      <WalkInConsult
      walkinModalOpen ={walkinModalOpen}
      walkInHandleOk ={walkInHandleOk}
      walkinHandleCancel={walkinHandleCancel}
      setWalkinModalOpen ={setWalkinModalOpen}
      ></WalkInConsult>
    </div>
  );
};

export default Appointment;

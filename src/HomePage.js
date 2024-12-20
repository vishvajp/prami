import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";

import HomePageTable from "./HomePageTable";

const HomePage = () => {
  const [startDate, setStartDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectClinic, setSelectClinic] = useState("All");
  const [selectDoctor, setSelectDoctor] = useState("All");
  const [selectTreatment, setSelectTreatment] = useState("All");

  const CustomInput = ({ value, onClick }) => (
    <button className="dashboard-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );

  return (
    <div>
      <div className="d-flex dasboard-header row">
        <div className="d-flex flex-column col ">
          <label className="dashboard-input-label ms-3">From</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
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
          <label className="dashboard-input-label ms-3">
            Search Hospital / Clinic
          </label>
          <select
            onChange={(e) => setSelectClinic(e.target.value)}
            name="man"
            id="dashboard-doctor-input"
          >
            <option>All</option>
            <option>Sunshine</option>
            <option>Apollo</option>
            <option>Miat</option>
          </select>
        </div>
        <div className="d-flex flex-column col">
          <label className="dashboard-input-label ms-3">Select Doctor</label>
          <select
            onChange={(e) => setSelectDoctor(e.target.value)}
            name="man"
            id="dashboard-doctor-input"
          >
            <option>All</option>
            <option>DR Karunakaran</option>
            <option>DR Suriya</option>
            <option>DR Vijay</option>
          </select>
        </div>
        <div className="d-flex flex-column col">
          <label className="dashboard-input-label ms-3">Treatment Type</label>
          <select
            onChange={(e) => setSelectTreatment(e.target.value)}
            name="man"
            id="dashboard-doctor-input"
          >
            <option>All</option>
            <option>Consultation</option>
            <option>Asset Physiotherapy</option>
            <option>Physiotherapy</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="bg">
        <p className="mb-0 statsword mt-1">Stats</p>
        <div className="d-flex flex-row justify-content-evenly">
          <div className="stats  ">
            <div className="roundborder d-flex justify-content-center align-items-center">
              <div className="schedulenum">
                <RiCalendarScheduleLine className="schedule" />
                <br></br>
                <p className="statsnum d-inline px-3 ">74</p>
              </div>
            </div>
            <p className="spaninside mb-0">
              Overall <br></br>Appointment
            </p>
          </div>
          <div className="statscenter  ">
            <div className="roundborder d-flex justify-content-center align-items-center">
              <div className="schedulenum">
                <RiCalendarScheduleLine className="schedule" />
                <br></br>
                <p className="statsnum d-inline px-3 ">74</p>
              </div>
            </div>
            <div className="d-flex flex-row centerstats">
              <div className="roundbordercenter d-flex justify-content-center align-items-center me-5">
                <div className="schedulenumcenter">
                  <span className="schedulecenterfirst  ">IN</span>
                  <br></br>
                  <p className="statsnumcenter d-inline px-2  ">74</p>
                </div>
              </div>
              <div className="roundbordercenter d-flex justify-content-center align-items-center ">
                <div className="schedulenumcenter">
                  <span className="schedulecenterfirst">OUT</span>
                  <br></br>
                  <p className="statsnumcenter d-inline px-2 ">74</p>
                </div>
              </div>
            </div>
            <p className="spaninside mb-0">Patient Visit</p>
          </div>
          <div className="stats  ">
            <div className="roundborder d-flex justify-content-center align-items-center">
              <div className="schedulenum">
                <RiCalendarScheduleLine className="schedule" />
                <br></br>
                <p className="statsnum d-inline px-3 ">74</p>
              </div>
            </div>
            <p className="spaninside mb-0">
              Patient <br></br>Not Visit
            </p>
          </div>
        </div>

        <div className="table-bg">
          <div className="d-flex">
            <p className="w-25 todayappointments">Today Appointments </p>
            <div className="w-100 text-end ">
              <p className="mb-0 ">
                <input
                  className="todayinput"
                  placeholder="Searched Booked Patient"
                ></input>
                <FaMagnifyingGlass className="searchmag" />
              </p>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <HomePageTable
              startDate={startDate}
              toDate={toDate}
              selectClinic={selectClinic}
              selectDoctor={selectDoctor}
              selectTreatment={selectTreatment}
            ></HomePageTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

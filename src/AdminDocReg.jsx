import React, { useContext, useEffect } from "react";
import "./Doctordetail.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { MdCancel } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import UserDataContext from "./Context/UserDataContext";

const AdminDocReg = ({ setAddDoctor }) => {
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];

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

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [docName, setDocName] = useState("");
  const [docExp, setDocExp] = useState(0);
  const [docSpl, setDocSpl] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docReg, setDocReg] = useState("");
  const [docDob, setDocDob] = useState("");
  const [phone, setPhone] = useState("");
  const [docLocation, setDocLocation] = useState("");
  const [docMale, setDocMale] = useState(false);
  const [docFemale, setDocFemale] = useState(false);
  const [docFee, setDocFee] = useState("");
  const [docEdu, setDocEdu] = useState("");
  const [docAchieve, setDocAchieve] = useState("");
  const [docClinic, setDocClinic] = useState("");
  const [docRole, setDocRole] = useState("");
  const [docGroup, setDocGroup] = useState("");
  const [docJoining, setDocJoining] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [daysData, setDaysData] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]); // Store selected day names
  const [selectedDayIds, setSelectedDayIds] = useState([]); // Store selected day IDs
  const [startTimes, setStartTimes] = useState([]); // Store start times
  const [endTimes, setEndTimes] = useState([]); // Store end times
  const [clinicData, setClinicData] = useState(null);
  const [clinicName, setClinicName] = useState("");
  const { apiBaseUrl } = useContext(UserDataContext);

  console.log("start", startTimes, "end", endTimes);

  const selectedDate = new Date(docDob);

  // Format the date to 'DD MMM YYYY'
  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const selectedJoiningDate = new Date(docJoining);

  // Format the date to 'DD MMM YYYY'
  const formattedJoiningDate = selectedJoiningDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleMale = () => {
    setDocMale(true);
    setDocFemale(false);
  };

  const handleFemale = () => {
    setDocFemale(true);
    setDocMale(false);
  };

  useEffect(() => {
    const getDays = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_days`);
        if (response.data) {
          setDaysData(response.data.data); // Ensure setDaysData is a valid state setter
          console.log(response.data.data); // Optional: for debugging
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };
    getDays(); // Calls the async function
  }, [apiBaseUrl]);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const doctorData = {
        doc_name: docName,
        doc_experience: docExp,
        doc_email: docEmail,
        doc_dob: formattedDate,
        doc_address: docLocation,
        doc_fee: docFee,
        doc_achievement: docAchieve,
        doc_specialist: docSpl,
        doc_reg_no: docReg,
        doc_mobile: phone,
        doc_education: docEdu,
        doc_clinic: docClinic,
        doc_gender: docMale ? "Male" : docFemale ? "Female" : "",
        doc_role: docRole,
        doc_group: docGroup,
        date_of_joining: formattedJoiningDate,
        doc_slot_increment: slotTime,
        doc_day: selectedDayIds,
        doc_starting_time: startTimes,
        doc_ending_time: endTimes,
      };
      console.log(doctorData);
      const response = await axios.post(`${apiBaseUrl}add_doctor`, doctorData);
      if (response.data) {
        window.alert("Doctor added successfully!");
        setAddDoctor(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckboxChange = (day, dayId) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      setSelectedDayIds(selectedDayIds.filter((id) => id !== dayId));
      setStartTimes(
        startTimes.filter((_, index) => index !== selectedDays.indexOf(day))
      );
      setEndTimes(
        endTimes.filter((_, index) => index !== selectedDays.indexOf(day))
      );
    } else {
      setSelectedDays([...selectedDays, day]);
      setSelectedDayIds([...selectedDayIds, dayId]);
    }
  };

  const handleStartTimeChange = (e, day) => {
    const newStartTimes = [...startTimes];
    const index = selectedDays.indexOf(day);
    if (index !== -1) {
      newStartTimes[index] = e.target.value;
    }

    setStartTimes(newStartTimes);
  };

  const handleEndTimeChange = (e, day) => {
    const newEndTimes = [...endTimes];
    const index = selectedDays.indexOf(day);
    if (index !== -1) {
      newEndTimes[index] = e.target.value;
    } else {
      newEndTimes.push(e.target.value);
    }

    setEndTimes(newEndTimes);
  };

  const handleCliniChange = (e) => {
    const clin = e.target.value;
    setClinicName(clin);
    const specClinic = clinicData?.find((cli) => cli.clinic_name === clin);
    console.log(specClinic);
    setDocClinic(specClinic.clinic_id);
    console.log(docClinic);
  };
  return (
    <div>
      <div className="doctor-detail-container ">
        <form onSubmit={handleFormSubmit}>
          {" "}
          <div className="row d-flex justify-content-center">
            <div className="col docdetail-1col">
              <p className="doctor-detail-text">Doctor details</p>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Doctor Name</label>
                <input
                  onChange={(e) => setDocName(e.target.value)}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                  }}
                  className="docdetail-input"
                  value={docName}
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Experience</label>
                <input
                  onChange={(e) => {
                    const value = Math.max(0, Number(e.target.value));
                    setDocExp(value);
                  }}
                  className="docdetail-input"
                  value={docExp}
                  type="number"
                  placeholder="Enter Experience"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">E Mail ID</label>
                <input
                  onChange={(e) => setDocEmail(e.target.value)}
                  className="docdetail-input"
                  value={docEmail}
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Date Of Birth</label>

                <DatePicker
                  selected={docDob}
                  onChange={(date) => setDocDob(date)}
                  customInput={<CustomInput />}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={80}
                  scrollableMonthYearDropdown
                  maxDate={new Date()}
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Location</label>
                <input
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""); // Allow only letters, numbers, and spaces
                    setDocLocation(value);
                  }}
                  value={docLocation}
                  className="docdetail-input"
                  type="text"
                  placeholder="Enter Location"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Doctor Fees</label>

                {/* <span className="docdetail-rs"> Rs.</span> */}
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
                    setDocFee(sanitizedValue);
                  }}
                  value={docFee}
                  type="number"
                  className="docdetail-input"
                  placeholder="Enter Fee"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Achievements</label>
                <input
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
                    setDocAchieve(value);
                  }}
                  value={docAchieve}
                  className="docdetail-input"
                  type="text"
                  placeholder="Enter Achievements"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Role</label>
                <input
                 
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
                    setDocRole(value);
                  }}
                  value={docRole}
                  className="docdetail-input"
                  type="text"
                  placeholder="Enter Role"
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Date Of Joining</label>
                <DatePicker
                  minDate={new Date()}
                  selected={docJoining}
                  onChange={(date) => setDocJoining(date)}
                  customInput={<CustomInput />}
                  required
                />
              </div>
            </div>

            <div className="col docdetail-2col">
              <div className="d-flex justify-content-end align-items-center">
                <div className="docdetail-docimg-pencil">
                  <img
                    className="profile-doc-image m-2"
                    src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ width: "75px", height: "75px" }}
                    alt="doctor"
                  />
                  <FaPencil className="docdetail-penicl-icon" />
                </div>
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Specialist</label>
                <input
                  onChange={(e) => setDocSpl(e.target.value)}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                  }}
                  value={docSpl}
                  className="docdetail-input"
                  type="text"
                  placeholder="Enter Specialist"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">
                  Medical Registration No
                </label>
                <input
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""); // Allow only letters, numbers, and spaces
                    setDocReg(value);
                  }}
                  className="docdetail-input"
                  value={docReg}
                  type="text"
                  placeholder="Enter Registration No"
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Mobile No</label>
                <input
                  className="docdetail-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setPhone(value);
                  }}
                  placeholder="Enter Mobile No"
                  maxLength={10}
                  required
                />
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Gender</label>
                <div className="d-flex justify-content-evenly align-items-center docdetail-gender-registration">
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      onClick={handleMale}
                      checked={docMale}
                      id="Gender"
                      name="Gender"
                    />
                    <label htmlFor="Gender" className="ms-2">
                      Male
                    </label>
                  </div>
                  <div className="docdetail-vertical-line"></div>
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      id="Gender"
                      name="Gender"
                      onClick={handleFemale}
                      checked={docFemale}
                    />
                    <label htmlFor="Gender" className="ms-2">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Education</label>
                <input
                  value={docEdu}
                  onChange={(e) => setDocEdu(e.target.value)}
                  name="Education"
                  className="docdetail-input"
                  placeholder="Enter Education"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                  }}
                  required
                ></input>
              </div>

              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Clinic Name</label>
                <select
                  value={clinicName}
                  onChange={handleCliniChange}
                  name="clinic"
                  id="clinic"
                  required
                >
                  <option value="">Select Clinic</option>
                  {clinicData?.map((nameOfClinc) => {
                    return (
                      <option key={nameOfClinc.clinic_id}>
                        {nameOfClinc.clinic_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="d-flex flex-column">
                <label className="docdetail-input-label">Group</label>
                <input
                 
               
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
                    setDocGroup(value);
                  }}
                  className="docdetail-input"
                  value={docGroup}
                  type="text"
                  placeholder="Enter Group"
                  required
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <label className="docdetail-input-label ms-3 mt-3">
              Time Slot Increment
            </label>
            <div className="d-flex align-items-center mt-2">
              <label className="ms-3 me-2 ">Every</label>
              <input
                value={slotTime}
                onChange={(e) => setSlotTime(e.target.value)}
                className="doctor-detail-bottom-time-input"
                required
                type="number"
                placeholder="Enter Slot Increment"
              ></input>
              <span>Minutes</span>
            </div>
          </div>
          <div className="row doctor-detail-days-div">
            {daysData?.map((singleDay) => (
              <div
                className="col doctor-detail-days-col"
                key={singleDay.day_id}
              >
                <div className="d-flex flex-column">
                  <div className="d-flex gap-2 mb-2 justify-content-center">
                    <label className="doctordet-label">{singleDay.day}</label>
                    <input
                      type="checkbox"
                      checked={selectedDays.includes(singleDay.day)}
                      onChange={() =>
                        handleCheckboxChange(singleDay.day, singleDay.day_id)
                      }
                    />
                  </div>

                  {selectedDays.includes(singleDay.day) && (
                    <>
                      <div className="row">
                        <div className="col-3 doctor-label-col">
                          <label className="mb-2 doctordet-label">From</label>
                        </div>
                        <div className="col doctor-label-col">
                          <input
                            className="docdetail-time-input"
                            type="time"
                            value={
                              startTimes[selectedDays.indexOf(singleDay.day)] ||
                              ""
                            }
                      
                            onChange={(e) =>
                              handleStartTimeChange(e, singleDay.day)
                            }
                           
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3 doctor-label-col">
                          <label className="doctordet-label">To</label>
                        </div>
                        <div className="col doctor-label-col">
                          <input
                            className="docdetail-time-input"
                            type="time"
                            value={
                              endTimes[selectedDays.indexOf(singleDay.day)] ||
                              ""
                            }
                            onChange={(e) =>
                              handleEndTimeChange(e, singleDay.day)
                            }
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              onClick={() => setAddDoctor(false)}
              className="medicalhistory-back-button"
            >
              CANCEL
            </button>
            <button type="submit" className="medicalhistory-nex-button">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDocReg;

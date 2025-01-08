import React, { useContext, useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AboutDoctorEdit.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import UserDataContext from "./Context/UserDataContext";
import { format } from "date-fns";
import axios from "axios";

const AdminDocEdit = () => {
  const aboutDocNavigate = useNavigate();
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];

  const location = useLocation();
  const specDoc = location.state;
  const specificDoc = specDoc?.singleDoc;
  console.log(specificDoc);

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");

  const handleAboutNavigate = () => {
    aboutDocNavigate("/home/doctor");
  };
  const [docDob, setDocDob] = useState();
  const [docJoin, setDocJoin] = useState(null);
  const [DocData, setDocData] = useState({});
  const [daysData, setDaysData] = useState(null);
  const [clinicData, setClinicData] = useState(null);
  const { apiBaseUrl } = useContext(UserDataContext);
  const [startTimes, setStartTimes] = useState([]); // Store start times
  const [endTimes, setEndTimes] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]); // Store selected day names
  const [selectedDayIds, setSelectedDayIds] = useState([]);
  const [clinicName, setClinicName] = useState("");
  const [docClinic, setDocClinic] = useState("");
  const [time_Id, setTime_Id] = useState(null)

  useEffect(() => {
    if (specificDoc) {
      setDocData({
        doc_name: specificDoc.doc_name || "",
        doc_dob: specificDoc.doc_dob || "",
        Clinic: specificDoc.Clinic,
        date_of_joining: specificDoc.date_of_joining,
        doc_achievement: specificDoc.doc_achievement,
        doc_address: specificDoc.doc_address,
        doc_education: specificDoc.doc_education,
        doc_email: specificDoc.doc_email,
        doc_experience: specificDoc.doc_experience,
        doc_fee: specificDoc.doc_fee,
        doc_gender: specificDoc.doc_gender,
        doc_group: specificDoc.doc_group,
        doc_mobile: specificDoc.doc_mobile,
        doc_reg_no: specificDoc.doc_reg_no,
        doc_role: specificDoc.doc_role,
        doc_specialist: specificDoc.doc_specialist,
        doctor_id: specificDoc.doctor_id,
        doc_slot_increment: specificDoc.doc_slot_increment,
      });
      setClinicName(specificDoc.Clinic);
      const docDays = specificDoc.doctorTiming; // Example response format
      const days = [];
      const starts = [];
      const ends = [];
      const timeId = [];

      docDays?.forEach((dayObj) => {
        console.log(dayObj);
        days.push(dayObj.day_name);
        starts.push(dayObj.start_time);
        ends.push(dayObj.end_time);
        timeId.push(dayObj.timeslot_id);

        // setSelectedDays(days);
        // setStartTimes(starts);
        // setEndTimes(ends);
      });

      setSelectedDays(days);
      setStartTimes(starts);
      setEndTimes(ends);
      setTime_Id(timeId);
    }
    setDocDob(specificDoc.doc_dob);
    setDocJoin(specificDoc.date_of_joining);
  }, [specificDoc]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateChange = (specdate) => {
    setDocDob(specdate);
    const selectedDate = new Date(docDob);

    // Format the date to 'DD MMM YYYY'
    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setDocData((prevdata) => ({ ...prevdata, date_of_joining: formattedDate }));
  };

  const handleJoinChange = (specdate) => {
    setDocJoin(specdate);
    const selectedDate = new Date(docDob);

    // Format the date to 'DD MMM YYYY'
    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setDocData((prevdata) => ({ ...prevdata, date_of_joining: formattedDate }));
  };

  const handleCheckboxChange = (day, dayId,index) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      setSelectedDayIds(selectedDayIds.filter((id) => id !== dayId));
      setTime_Id(time_Id.splice(index,1))
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
    setDocData((prevData) => ({ ...prevData, Clinic: specClinic.clinic_id }));
    // setDocClinic(specClinic.clinic_id)
    console.log(docClinic);
  };

  const handleSubmit = () => {
    const fullData = {
      ...DocData,
      doc_day: selectedDayIds,
      doc_starting_time: startTimes,
      doc_ending_time: endTimes,
      timeslot_id: time_Id,
    };

    console.log(fullData);
  };
  return (
     <div>
         <div className=" m-3 profile-container pt-1">
           <div className="d-flex profile-details-div">
             <div className="col-5 profile-detail-1col">
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">Doctor Name</label>
                 <input
                   className="profile-input"
                   type="text"
                   name="doc_name"
                   value={DocData.doc_name}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">Experience</label>
                 <input
                   className="profile-input"
                   type="text"
                   name="doc_experience"
                   value={DocData.doc_experience}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">EMail ID</label>
                 <input
                   className="profile-input"
                   type="email"
                   placeholder="Karunakaran@gmail.com"
                   name="doc_email"
                   value={DocData.doc_email}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">Date Of Birth</label>
                 <DatePicker
                   selected={docDob}
                   onChange={(date) => handleDateChange(date)}
                   customInput={<CustomInput />}
                   showYearDropdown
                   scrollableYearDropdown
                   yearDropdownItemNumber={80}
                   scrollableMonthYearDropdown
                   maxDate={new Date()}
                 />
               </div>
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">Address</label>
                 <input
                   className="profile-input"
                   type="text"
                   name="doc_address"
                   value={DocData.doc_address}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="docdetail-input-label">Doctor Fees</label>
   
                 <input
                   type="text"
                   className="profile-input"
                   name="doc_fee"
                   value={DocData.doc_fee}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="docdetail-input-label">Specialist</label>
   
                 <input
                   type="text"
                   className="profile-input"
                   name="doc_specialist"
                   value={DocData.doc_specialist}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="docdetail-input-label">Doctor Id</label>
   
                 <input
                   type="text"
                   className="profile-input"
                   name="doc_role"
                   value={DocData.doctor_id}
                   onChange={handleChange}
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="docdetail-input-label">
                   Doctor Achievements
                 </label>
   
                 <input
                   type="text"
                   className="profile-input"
                   name="doc_achievement"
                   value={DocData.doc_achievement}
                   onChange={handleChange}
                 />
               </div>
             </div>
             <div className="col-5 profile-detail-2col">
               <div className="d-flex flex-column">
                 <label className="profile-input-label">Role</label>
                 <input
                   className="profile-input"
                   type="text"
                   name="doc_role"
                   value={DocData.doc_role}
                   onChange={handleChange}
                   placeholder="Enter phone number"
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="profile-input-label">
                   Medical Registration No
                 </label>
                 <input
                   className="profile-input"
                   type="text"
                   name="doc_reg_no"
                   value={DocData.doc_reg_no}
                   onChange={handleChange}
                   placeholder="Enter phone number"
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="profile-input-label">Mobile No</label>
                 <input
                   className="profile-input"
                   type="tel"
                   name="doc_mobile"
                   value={DocData.doc_mobile}
                   onChange={handleChange}
                   placeholder="Enter phone number"
                 />
               </div>
   
               <div className="d-flex flex-column ">
                 <label className="profile-input-label" for="Education">
                   Education
                 </label>
                 <input
                   className="profile-input"
                   name="doc_education"
                   type="text"
                   value={DocData.doc_education}
                 />
               </div>
               <div className="d-flex flex-column">
                 <label className="profile-input-label">Gender</label>
   
                 <input
                   className="profile-input"
                   type="tel"
                   name="doc_gender"
                   value={DocData.doc_gender}
                   onChange={handleChange}
                   placeholder="Enter phone number"
                 />
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
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">Date Of Joining</label>
                 <DatePicker
                   selected={docJoin}
                   onChange={(date) => handleJoinChange(date)}
                   customInput={<CustomInput />}
                   showYearDropdown
                   scrollableYearDropdown
                   yearDropdownItemNumber={80}
                   scrollableMonthYearDropdown
                   maxDate={new Date()}
                 />
               </div>
   
               <div className="d-flex flex-column ">
                 <label className="profile-input-label">Group</label>
                 <input
                   className="profile-input"
                   type="text"
                   name="doc_group"
                   value={DocData.doc_group}
                   onChange={handleChange}
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
                 value={DocData.doc_slot_increment}
                 onChange={handleChange}
                 className="doctor-detail-bottom-time-input"
                 required
                 type="number"
                 placeholder="Enter Slot Increment"
               ></input>
               <span>Minutes</span>
             </div>
           </div>
           <div className="row doctor-detail-days-div">
             {daysData?.map((singleDay,index) => (
               <div className="col doctor-detail-days-col" key={singleDay.day_id}>
                 <div className="d-flex flex-column">
                   <div className="d-flex gap-2 mb-2 justify-content-center">
                     <label className="doctordet-label">{singleDay.day}</label>
                     <input
                       type="checkbox"
                       checked={selectedDays.includes(singleDay.day)}
                       onChange={() =>
                         handleCheckboxChange(singleDay.day, singleDay.day_id,index)
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
                               endTimes[selectedDays.indexOf(singleDay.day)] || ""
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
   
           <div className="d-flex justify-content-center">
             <button className="aboutdoedit-button" onClick={handleSubmit}>
               UPDATE
             </button>
           </div>
         </div>
       </div>
  )
}

export default AdminDocEdit
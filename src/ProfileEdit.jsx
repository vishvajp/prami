import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const ProfileEdit = () => {
    const location = useLocation()
    const profile = location.state
    const navigate = useNavigate()

const [profileData, setProfileData] = useState({
    admin_name:"",
    specialist:"",
    experience:"",
    registration_no:"",
    email_id:"",
    password:"",
    mobile_no:"",
    education:"",
    address:"",
    clinic:"",
    location:"",
    dob:"",
     gender:""
})

useEffect(()=>{
    if(profile){
        setProfileData({
            admin_name:profile.admin_name,
            specialist:profile.specialist,
            experience:profile.experience,
            registration_no:profile.registration_no,
            email_id:profile.email_id,
            password:profile.password,
            mobile_no:profile.mobile_no,
            education:profile.education,
            address:profile.address,
            clinic:profile.clinic,
            location:profile.location,
            dob:profile.dob,
            gender:profile.gender
        })
    }
},[profile])

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

  const handleDateChange = (specdate) => {

    const selectedDate = new Date(specdate);

    // Format the date to 'DD MMM YYYY'
    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setProfileData((prevdata) => ({ ...prevdata, dob: formattedDate }));
  };

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>  <div className=" m-3 profile-container pt-1">
            <div className="d-flex profile-details-div">
              <div className="col-5 profile-detail-1col">
                <div className="d-flex flex-column ">
                  <label className="profile-input-label"> Name</label>
                  <input
                    className="profile-input"
                    type="text"
                    name="admin_name"
                    value={profileData.admin_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label className="profile-input-label">Experience</label>
                  <input
                    className="profile-input"
                    type="text"
                    name="experience"
                    value={profileData.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label className="profile-input-label">EMail ID</label>
                  <input
                    className="profile-input"
                    type="email"
                    placeholder="Karunakaran@gmail.com"
                    name="email_id"
                    value={profileData.email_id}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label className="profile-input-label">Date Of Birth</label>
                  <DatePicker
                    selected={profileData.dob}
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
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="docdetail-input-label">Location</label>
            
                    <input
                      type="text"
                     className="profile-input"
                      name="location"
                      value={profileData.location}
                      onChange={handleChange}
                    />
           
                </div>
             
             
                
              </div>
              <div className="col-5 profile-detail-2col">
                <div className="d-flex flex-column">
                  <label className="profile-input-label">Specialist</label>
                  <input
                    className="profile-input"
                    type="text"
                    name="specialist"
                    value={profileData.specialist}
                    onChange={handleChange} 
                  
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="profile-input-label">
                    Medical Registration No
                  </label>
                  <input
                    className="profile-input"
                    type="text"
                    name="registration_no"
                    value={profileData.registration_no}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="profile-input-label">Mobile No</label>
                  <input
                    className="profile-input"
                    type="tel"
                    name="mobile_no"
                    value={profileData.mobile_no}
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
                    name="education"
                    type="text"
                    value={profileData.education}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="profile-input-label">Gender</label>
    
                  <select
                    className="profile-input"
                    type="tel"
                    name="gender"
                    value={profileData.gender}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="d-flex flex-column ">
                  <label className="profile-input-label" for="Clinic">
                    Clinic Name
                  </label>
                  <input
                    className="profile-input"
                    type="text"
                    name="clinic"
                    value={profileData.clinic}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
         
           
            <div className="d-flex justify-content-center gap-2">
                <button  style={{marginTop:"15px"}} className="medicalhistory-back-button" onClick={()=>navigate("/home/profile")}>CANCEL</button>
              <button className="aboutdoedit-button">
                UPDATE
              </button>
            </div>
          </div></div>
  )
}

export default ProfileEdit
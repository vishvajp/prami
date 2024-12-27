import React from "react";
import { FaRegEdit, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { RiPolaroidLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile]=useState({
    admin_name:"Dr. Karunakaran S",
    specialist:"Pediatrics",
    experience:"28",
    registration_no:"000005b",
    email_id:"karunakarn@gmail.com",
    password:"123456",
    mobile_no:"9876543210",
    education:"M.B.B.S, Md",
    address:"No. 12, 1st Street, Anna Nagar, Chennai",
    clinic:"Spine Clinics",
    location:"Adayar, Chennai",
    dob:"12/12/1981",
    gender:"Male"

  })
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];
const navigate = useNavigate()

const handleEdit = () => {
  navigate("/home/profile/edit",{state:profile})
}
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="d-flex justify-content-center">
        <p className=" col doctor-profile text-end">Admin Profile </p>
        <div className="col text-end ">
          <p className="mb-0 ">
            <button className="profile-edit-button me-4 " onClick={handleEdit}>
              Edit <FaRegEdit className="ms-1 profile-edit-icon" />
            </button>
          </p>
        </div>
      </div>

      <div className="  profile-container bg">
        <div className="d-flex  profile-red-container align-items-center">
          <img
            className=" profile-doc-image m-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "80px", height: "80px" }}
          ></img>
          <div className="profile-doc-plus-icon">
            <FaPencil />
          </div>

          <div className="profile-docname-div ms-2 d-flex flex-column justify-content-center ">
            <p className="text-white profile-doc-name">{profile.admin_name}</p>
            <p className="text-warning profile-doc-designation mb-0">
             {profile.specialist}
            </p>
           
          </div>
          <div className="profile-vertical-line"></div>
          <div className="profile-experience ms-2 ">
            <p className="text-white mt-4 profile-doc-experience">Experience</p>
            <span className="text-warning profile-doc-designation">
              {profile.experience}Year(s)
            </span>
          </div>
          <div className="profile-vertical-line "></div>
          <div className="profile-medical-registration ms-2 ">
            <p className="text-white mt-3 profile-doc-experience">Medical</p>
            <p className="profile-doc-registration">Registration No</p>
            <span className="text-warning profile-doc-designation mb-5">
              {profile.registration_no}
            </span>
          </div>
        </div>
        <div className="d-flex profile-details-div">
          <div className="col profile-detail-1col">
            <div className="d-flex flex-column ">
              <label className="profile-input-label">E Mail ID</label>
              <p className='medicalhistory-records-para'>{profile.email_id}</p>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Date Of Birth</label>
              <p className='medicalhistory-records-para'>{profile.dob}</p>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Location</label>
              <p className='medicalhistory-records-para'>{profile.location}</p>
            </div>
            <div className="d-flex flex-column">
              <label className="profile-input-label">Password</label>
             
              <p className='medicalhistory-records-para'>{profile.password}</p>
               
            </div>
          </div>
          <div className="col profile-detail-2col">
            <div className="d-flex flex-column">
              <label className="profile-input-label">Mobile No</label>
          
              <p className='medicalhistory-records-para'>{profile.mobile_no}</p>
           
            </div>

            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Education">
                Education
              </label>
              <p className='medicalhistory-records-para'>{profile.education}</p>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Clinic Name
              </label>
              <p className='medicalhistory-records-para'>{profile.clinic}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

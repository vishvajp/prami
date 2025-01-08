import React from "react";
import "./AboutDoctor.css";
import { FaRegEdit } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const AboutDoctor = () => {

  const location = useLocation()

  const userdata = location.state
  
  const singleDoc = userdata?.doc

  console.log(singleDoc)
  

  const editNavigate = useNavigate()

  const handleNavigateEdit = ()=>{
    editNavigate("/home/doctor/edit",{state:{singleDoc}})
  }
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];



  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="d-flex">
        <div className="w-100 text-end ">
          <p className="mb-0 ">
            <button onClick={handleNavigateEdit} className="profile-edit-button me-4">
              Edit <FaRegEdit className="ms-1 profile-edit-icon" />
            </button>
          </p>
        </div>
      </div>
      <div className=" m-3 profile-container pt-1">
        <div className="d-flex  profile-red-container">
          <img
            className=" profile-doc-image m-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "80px", height: "80px" }}
          ></img>
          <div className="doc-plus-icon">
            <FaPencil />
          </div>

          <div className="profile-docname-div ms-2 ">
            <p className="text-white mt-4 profile-doc-name">
             {singleDoc.doc_name}
            </p>
            <span className="text-warning profile-doc-designation">
             {singleDoc.doc_role}
            </span>
          </div>
          <div className="profile-vertical-line"></div>
          <div className="profile-experience ms-2 ">
            <p className="text-white mt-4 profile-doc-experience">Experience</p>
            <span className="text-warning profile-doc-designation">
              {singleDoc.doc_experience} years
            </span>
          </div>
          <div className="profile-vertical-line "></div>
          <div className="profile-medical-registration ms-2 ">
            <p className="text-white mt-3 profile-doc-experience">Medical</p>
            <p className="profile-doc-registration">Registration No</p>
            <span className="text-warning profile-doc-designation mb-5">
           {singleDoc.doc_reg_no}
            </span>
          </div>
        </div>
        <div className="d-flex profile-details-div">
          <div className="col-5 profile-detail-1col">
            <div className="d-flex flex-column ">
              <label className="profile-input-label">E Mail ID</label>
              <span
                className="docabout-input">
                 {singleDoc.doc_email}
                  </span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Date Of Birth</label>
              <span
                className="docabout-input"
              >{singleDoc.doc_dob}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Location</label>
              <span
                className="docabout-input"
               
              >{singleDoc.doc_address}</span>
            </div>
            <div className="d-flex flex-column">
              <label className="docdetail-input-label">Doctor Fees</label>
              <div className="input-wrapper">
                <span className="docdetail-rs">{singleDoc.doc_fee}</span>
              
              </div>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Specialist
              </label>
              <span className="docabout-input">{singleDoc.doc_specialist}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Doctor Id
              </label>
              <span className="docabout-input">{singleDoc.doctor_id}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Doctor Achievements
              </label>
              <span className="docabout-input">{singleDoc.doc_achievement}</span>
            </div>
          </div>
          <div className="col-5 profile-detail-2col">
            <div className="d-flex flex-column">
              <label className="profile-input-label">Mobile No</label>
              <div className="input-wrapper">
                
                <span
                className="docdetail-rs"
                    // className="profile-input"
                  type="tel"
       
        
                >{singleDoc.doc_mobile}</span>
              </div>
            </div>

            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Education">
                Education
              </label>
              <span className="docabout-input" type="text">{singleDoc.doc_education}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="docdetail-input-label">Gender</label>
              <span className="docabout-input" type="text">{singleDoc.doc_gender}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Clinic Name
              </label>
              <span className="docabout-input">{singleDoc.Clinic}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Date Of Joining
              </label>
              <span className="docabout-input">{singleDoc.date_of_joining}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Role
              </label>
              <span className="docabout-input">{singleDoc.doc_role}</span>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Group
              </label>
              <span className="docabout-input">{singleDoc.doc_group}</span>
            </div>
          </div>
        </div>
        <div className="row doc-day-row">
  {singleDoc.doctorTiming?.map((docSpec) => {
    const formatTime = (time) => {
      const [hour, minute, second] = time.split(":");
      const date = new Date();
      date.setHours(hour, minute, second);
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
    };

    return (
      <div className="col" key={docSpec.day_name}>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <span className="doc-name-day d-flex justify-content-center">{docSpec.day_name}</span>
            <div className="d-flex justify-content-center">
              <span className="from-to-span">From :</span>
              <span>{formatTime(docSpec.start_time)}</span>
            </div>
            <div className="d-flex justify-content-center">
              <span className="from-to-span">To :</span>
              <span>{formatTime(docSpec.end_time)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default AboutDoctor;

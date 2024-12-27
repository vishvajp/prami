import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdmissionMoreDet = () => {
  const location = useLocation();
  const singlePatient = location.state;
  const singleData = singlePatient.element;
  const navToAdmissionEdit = useNavigate();
console.log(singleData)
  const handleNavToEdit = () => {
    navToAdmissionEdit("/home/patientadmission/edit", {
      state: { singleData },
    });
  };

  return (
    <div>
      {" "}
      <div className="doc-page-table">
        <div className="row">
          <div className="col d-flex justify-content-end">
            {" "}
            <span className="doctor-profile text-end">
              Admission More Detail
            </span>
          </div>
          <div className="col text-end">
            {" "}
            <button
              onClick={handleNavToEdit}
              className="profile-edit-button me-4"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">
              {" "}
              Consulting Doctor Name
            </lable>
            <p className="medicalhistory-records-para">
              {singleData?.consulting_doctor} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">
              {" "}
              DOCTOR'S CONTACT NUMBER
            </lable>
            <p className="medicalhistory-records-para">   {singleData?.doctor_contact_no} </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Patient Name</lable>
            <p className="medicalhistory-records-para">
            {singleData?.patient_name} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Admission Number</lable>
            <p className="medicalhistory-records-para">
            {singleData?.admission_No} 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> DOB or Age</lable>
            <p className="medicalhistory-records-para">
            {singleData?.patient_dob} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Address</lable>
            <p className="medicalhistory-records-para">
            {singleData?.admission_Address} 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Mobile No</lable>
            <p className="medicalhistory-records-para">
            {singleData?.mobile} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Email</lable>
            <p className="medicalhistory-records-para">      {singleData?.email} </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Blood Group</lable>
            <p className="medicalhistory-records-para">      {singleData?.blood_group} </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Marital Status</lable>
            <p className="medicalhistory-records-para">
            {singleData?.marital_status} 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Admission Date</lable>
            <p className="medicalhistory-records-para">
            {singleData?.admission_Date} 
            </p>
          </div>
          <div className="d-flex flex-column col">
           
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Aadhar Card Number</lable>
            <p className="medicalhistory-records-para">
            {singleData?.aadhar_no} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Passport Number</lable>
            <p className="medicalhistory-records-para">      {singleData?.passport_no} </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Visa Status</lable>
            <p className="medicalhistory-records-para">
            {singleData?.visa_status} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Pan Number</lable>
            <p className="medicalhistory-records-para">      {singleData?.pan_no} </p>
          </div>
        </div>
        <p className="medichistory-lable"> HEALTH HISTORY </p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> TAKING ANY MEDICATIONS, CURRENTLY?</lable>
            <p className="medicalhistory-records-para">{singleData?.medications} </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">REASON FOR REGISTRATION</lable>
            <p className="medicalhistory-records-para">{singleData?.reason_register} </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable"> ADDITIONAL NOTES</lable>
            <p className="medicalhistory-records-para">{singleData?.additonal_notes} </p>
          </div>
          
        </div>
        <p className="medichistory-lable"> EMERGENCY CONTACT</p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> RelationShip</lable>
            <p className="medicalhistory-records-para">
            {singleData?.emergency_relation} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Contact Number</lable>
            <p className="medicalhistory-records-para">      {singleData?.emergency_contact} </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable"> Emergency Dob</lable>
            <p className="medicalhistory-records-para">
            {singleData?.emergency_dob} 
            </p>
          </div>
          
        </div>
        <p className="medichistory-lable"> INSURANCE INFORMATION</p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Insurance Company</lable>
            <p className="medicalhistory-records-para">
            {singleData?.insurance_company} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Insurance Id</lable>
            <p className="medicalhistory-records-para">      {singleData?.insurance_id} </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">PlaceHolder's Name</lable>
            <p className="medicalhistory-records-para">
            {singleData?.placeholers_name} 
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Date Of Birth</lable>
            <p className="medicalhistory-records-para">      {singleData?.consulting_doctor} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionMoreDet;

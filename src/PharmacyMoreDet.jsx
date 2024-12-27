import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PharmacyMoreDet = () => {
    const location = useLocation()
    const singlePharmacy = location.state.user
    const navigate = useNavigate()
    console.log(singlePharmacy)

    const handleNavToLabEdit = () => {
        navigate("/home/pharmacy/edit", { state: {singlePharmacy} })
        }
  return (
    <div> <div className="doc-page-table">
    <div className="row">
      <div className="col d-flex justify-content-end">
        {" "}
        <span className="doctor-profile text-end">
          Registration More Detail
        </span>
      </div>
      <div className="col text-end">
        {" "}
        <button
          onClick={handleNavToLabEdit}
          className="profile-edit-button me-4"
        >
          Edit
        </button>
      </div>
    </div>
    <div className="row">
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable"> Hospital</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.hospital}
        </p>
      </div>
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable">Location </lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.location}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable">Added By</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.added_by}
        </p>
      </div>
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable"> Contact No</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.contact_no}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable"> Added On</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.added_on}
        </p>
      </div>
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable">Email Id</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.email_id}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable">Status</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.status}
        </p>
      </div>
      <div className="d-flex flex-column col">
        <lable className="medichistory-lable">Role</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.role}
        </p>
      </div>
    </div>
    <div className="row">
      <div className="d-flex flex-column col-6">
        <lable className="medichistory-lable">Group</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.group}
        </p>
      </div>
      <div className="d-flex flex-column col-6">
        <lable className="medichistory-lable"> Date</lable>
        <p className="medicalhistory-records-para">
          {singlePharmacy?.date_of_reg}
        </p>
      </div>
    </div>
    
  </div>
  </div>
  )
}

export default PharmacyMoreDet
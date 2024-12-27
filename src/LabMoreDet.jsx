import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LabMoreDet = () => {
  const location = useLocation();
  const singleLab = location.state.user;
  const navigate = useNavigate()
  console.log(singleLab);

  const handleNavToLabEdit = () => {
navigate("/home/patient/labEdit",{state:{user:singleLab}})
  };
  return (
    <div>
      <div className="doc-page-table">
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
            <lable className="medichistory-lable"> Lab Name</lable>
            <p className="medicalhistory-records-para">
              {singleLab.lab_Name}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Contact Person</lable>
            <p className="medicalhistory-records-para">
              {singleLab.contact_Person}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Mobile Number</lable>
            <p className="medicalhistory-records-para">
              {singleLab.mobile_Number}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Address</lable>
            <p className="medicalhistory-records-para">
              {singleLab.address}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> City</lable>
            <p className="medicalhistory-records-para">
              {singleLab.city}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> State</lable>
            <p className="medicalhistory-records-para">
              {singleLab.state}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Country</lable>
            <p className="medicalhistory-records-para">
              {singleLab.country}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Pincode</lable>
            <p className="medicalhistory-records-para">
              {singleLab.pincode}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable"> Landmark</lable>
            <p className="medicalhistory-records-para">
              {singleLab.landmark}
            </p>
          </div>
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable"> Date</lable>
            <p className="medicalhistory-records-para">
              {singleLab.date_of_reg}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Role</lable>
            <p className="medicalhistory-records-para">
              {singleLab.role}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Group</lable>
            <p className="medicalhistory-records-para">
              {singleLab.group}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabMoreDet;

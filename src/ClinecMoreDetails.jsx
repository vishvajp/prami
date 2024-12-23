import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ClinecMoreDetails = () => {
  const location = useLocation();
  const singleClinic = location.state?.game;
  console.log(singleClinic);
  const navigate = useNavigate();

  const handleEdit = (game) => {
    navigate("/home/clinics/edit", { state: { game } });
    console.log(game);
  };
  return (
    <div>
      <div className="doc-page-table">
      <div className="row">
            <div className="col d-flex justify-content-center me-1 mb-4">
              <span className="doctor-profile text-end">
           Clinec More Detail
              </span>
            </div>
          </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Name</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_name}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Owner</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_owner}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Mobile</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_mobile}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Email</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_email}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Address</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_address}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic District</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_district}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic State</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_state}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Pincode</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_pincode}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Location</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_location}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Country</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_country}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Id</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_id}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Liscence No</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_licence_no}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Reg Date</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_reg_date}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic Tin No</label>
            <p className="medicalhistory-records-para">
              {singleClinic.clinic_tin_no}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2">
        <button
              className="medicalhistory-back-button"
              onClick={() => navigate("/home/admin/adminsetting")}
            >CANCEL</button>
          <button
            className="medicalhistory-nex-button"
            onClick={() => handleEdit(singleClinic)}
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinecMoreDetails;

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
              {/* {singlePatient.element.mobile} */} Dr. Karunakaran
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">
              {" "}
              DOCTOR'S CONTACT NUMBER
            </lable>
            <p className="medicalhistory-records-para">789456123</p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Patient Name</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.name}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Admission Number</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.admission_No}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> DOB or Age</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.age}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Address</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.admission_Address}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Mobile No</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.mobile}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Email</lable>
            <p className="medicalhistory-records-para">-</p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Occupation</lable>
            <p className="medicalhistory-records-para">-</p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Marital Status</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.marital_status}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Admission Date</lable>
            <p className="medicalhistory-records-para">
              {singlePatient.element.admission_Date}
            </p>
          </div>
          <div className="d-flex flex-column col">
           
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Aadhar Card Number</lable>
            <p className="medicalhistory-records-para">
              {/* {singlePatient.element.admission_Date} */}6978 5845 6541
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Passport Number</lable>
            <p className="medicalhistory-records-para">8954 87895 789</p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Visa Status</lable>
            <p className="medicalhistory-records-para">
              {/* {singlePatient.element.admission_Date} */}Active
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Pan Number</lable>
            <p className="medicalhistory-records-para">9096325874</p>
          </div>
        </div>
        <p className="medichistory-lable"> EMERGENCY CONTACT</p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> RelationShip</lable>
            <p className="medicalhistory-records-para">
              {/* {singlePatient.element.admission_Date} */}friend
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Contact Number</lable>
            <p className="medicalhistory-records-para">7894561230</p>
          </div>
        </div>
        <p className="medichistory-lable"> INSURANCE INFORMATION</p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Insurance Company</lable>
            <p className="medicalhistory-records-para">
              {/* {singlePatient.element.admission_Date} */}Gobibo
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Insurance Id</lable>
            <p className="medicalhistory-records-para">1578 1458 789</p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">PlaceHolder's Name</lable>
            <p className="medicalhistory-records-para">
              {/* {singlePatient.element.admission_Date} */}Guru
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Date Of Birth</lable>
            <p className="medicalhistory-records-para">6/7/8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionMoreDet;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const AdmissionEdit = () => {
    const location = useLocation();
    const singlePatientData = location.state;
    const navigate = useNavigate()
    const [patientDetails, setPatientDetails] = useState({
        name: '',
        reg_No: '',
        age: '',
        reg_Address: '',
        mobile: '',
        marital_status: '',
        reg_Date: ''
    });

    useEffect(() => {
        if (singlePatientData && singlePatientData.singleData) {
            setPatientDetails({
                name: singlePatientData.singleData.name,
                reg_No: singlePatientData.singleData.reg_No,
                age: singlePatientData.singleData.age,
                reg_Address: singlePatientData.singleData.reg_Address,
                mobile: singlePatientData.singleData.mobile,
                marital_status: singlePatientData.singleData.marital_status,
                reg_Date: singlePatientData.singleData.reg_Date
            });
        }
    }, [singlePatientData]);


const handleInputChange = (e)=>{
    const {name,value}=e.target
    setPatientDetails((prevState)=>({
        ...prevState,
        [name]:value
    }))
}

  return (
    <div>  <div className="doc-page-table">
    <div className='d-flex flex-column gap-3'>
    <div className="row">
        <div className="col d-flex justify-content-center me-1 mb-4">
            <span className="doctor-profile text-end">
                Registration More Detail
            </span>
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Patient Name</label>
            <input
                name="name"
                value={patientDetails.name}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Registration Number</label>
            <input
                name="reg_No"
                value={patientDetails.reg_No}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">DOB or Age</label>
            <input
                name="age"
                value={patientDetails.age}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Address</label>
            <input
                name="reg_Address"
                value={patientDetails.reg_Address}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Mobile No</label>
            <input
                name="mobile"
                value={patientDetails.mobile}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Email</label>
            <p className='medicalhistory-records-para'>-</p>
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Occupation</label>
            <p className='medicalhistory-records-para'>-</p>
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Marital Status</label>
            <input
                name="marital_status"
                value={patientDetails.marital_status}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Registration Date</label>
            <input
                name="reg_Date"
                value={patientDetails.reg_Date}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Insurance</label>
            <p className='medicalhistory-records-para'>-</p>
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
    <div className='d-flex justify-content-center gap-3'>
        <button className='medicalhistory-back-button' onClick={()=>navigate("/home/patientadmission")}>CANCEL</button>
        <button className='medicalhistory-nex-button '>UPDATE</button>
    </div>
    </div>
</div></div>
  )
}

export default AdmissionEdit
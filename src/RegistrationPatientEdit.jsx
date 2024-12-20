import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const RegistrationPatientEdit = () => {
    const location = useLocation();
    const singlePatientData = location.state;
    const navigate = useNavigate()

    // Set initial state based on singlePatientData
    const [patientDetails, setPatientDetails] = useState({
        name: '',
        reg_No: '',
        age: '',
        reg_Address: '',
        mobile: '',
        marital_status: '',
        reg_Date: ''
    });

    // Update state when singlePatientData changes
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

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="doc-page-table">
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
                <div className='d-flex justify-content-center gap-3'>
                    <button className='medicalhistory-back-button' onClick={()=>navigate("/home/registration")}>CANCEL</button>
                    <button className='medicalhistory-nex-button '>UPDATE</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPatientEdit;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from 'date-fns'

const RegistrationPatientEdit = () => {
    const location = useLocation();
    const singlePatientData = location.state.singleData;
    const navigate = useNavigate()
console.log(singlePatientData)
    // Set initial state based on singlePatientData
    const [patientDetails, setPatientDetails] = useState({
        reg_No: "",
        reg_Date: "",
        name: "",
        reg_Address: "",
        reg_city:"",
        reg_state:" ",
        reg_country:"",
        pincode:"",
        landmark:"  ",
        mobile: "",
        marital_status: "",
        gender: "",
        age: "",
         email:"",
        occupation:""
    });

    // Update state when singlePatientData changes
    useEffect(() => {
        if (singlePatientData ) {
            setPatientDetails({
                name: singlePatientData.name,
                reg_No: singlePatientData.reg_No,
                age: singlePatientData.age,
                reg_Address: singlePatientData.reg_Address,
                reg_city:singlePatientData.reg_city,
                reg_state:singlePatientData.reg_state,
                reg_country:singlePatientData.reg_country,
                pincode:singlePatientData.pincode,
                landmark:singlePatientData.landmark,
                mobile: singlePatientData.mobile,
                marital_status: singlePatientData.marital_status,
                reg_Date: singlePatientData.reg_Date,
                occupation: singlePatientData.occupation,
                email:singlePatientData.email

            });
        }
    }, [singlePatientData]);


    const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
                    const formattedDate = value ? format(new Date(value), "dd/MM/yyyy") : "DD/MM/YYYY";
                    
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
    
                  const handleRegDateChange = (date) => {
                    console.log(date)
                    const selectedDate = new Date(date)
                    
                        const formatDate = selectedDate.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        });

                        console.log(formatDate)
                        // Generate slots for the selected date
                        setPatientDetails((prevFormData)=>({
                          ...prevFormData,
                          reg_Date: formatDate
                        }))
                      };

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
                        <label className="medichistory-lable">City</label>
                        <input
                            name="age"
                            value={patientDetails.reg_city}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">State</label>
                        <input
                            name="reg_Address"
                            value={patientDetails.reg_state}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Country</label>
                        <input
                            name="age"
                            value={patientDetails.reg_country}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Pincode</label>
                        <input
                            name="reg_Address"
                            value={patientDetails.pincode}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col-6">
                        <label className="medichistory-lable">Landmark</label>
                        <input
                            name="age"
                            value={patientDetails.landmark}
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
                        <input
                            name="email"
                            value={patientDetails.email}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Occupation</label>
                        <input
                            name="occupation"
                            value={patientDetails.occupation}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
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
                        <DatePicker
                                                     selected={patientDetails.reg_Date}
                                                     onChange={handleRegDateChange}
                                                     customInput={<CustomInput />}
                                                     showYearDropdown
                                                     scrollableYearDropdown
                                                     yearDropdownItemNumber={80}
                                                     scrollableMonthYearDropdown
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

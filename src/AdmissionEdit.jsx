import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from 'date-fns'

const AdmissionEdit = () => {
    const location = useLocation();
    const singlePatientData = location.state.singleData;
    console.log(singlePatientData);
    const navigate = useNavigate()
    const [patientDetails, setPatientDetails] = useState({
      admission_No: "",
      admission_Date: "",
consulting_doctor: "",
doctor_contact_no: "",
      patient_name: "",
      marital_status: "",
      patient_dob : "",
      age:"",
      gender:"",
      blood_group:"",
      mobile: "",
      email:"",
      aadhar_no:"",
      pan_no:"",
      passport_no:"",
      visa_status:"",
      admission_Address: "",
      medications:"",
      reason_register:"",
      additonal_notes:"",
  emergency_relation:"",
  emergency_contact:"",
  insurance_company:"",
  insurance_id:"",
  placeholers_name:"",
  emergency_dob:"",
    });

    useEffect(() => {
        if (singlePatientData) {
            setPatientDetails({
              admission_No: singlePatientData.admission_No,
              admission_Date:singlePatientData.admission_Date,
        consulting_doctor: singlePatientData.consulting_doctor,
        doctor_contact_no: singlePatientData.doctor_contact_no,
              patient_name: singlePatientData.patient_name,
              marital_status: singlePatientData.marital_status,
              patient_dob : singlePatientData.patient_dob,
              age:singlePatientData.age,
              gender:singlePatientData.gender,
              blood_group:singlePatientData.blood_group,
              mobile:singlePatientData.mobile,
              email:singlePatientData.email,
              aadhar_no:singlePatientData.aadhar_no,
              pan_no:singlePatientData.pan_no,
              passport_no:singlePatientData.passport_no,
              visa_status:singlePatientData.visa_status,
              admission_Address: singlePatientData.admission_Address,
              medications:singlePatientData.medications,
              reason_register:singlePatientData.reason_register,
              additonal_notes:singlePatientData.additonal_notes,
          emergency_relation:singlePatientData.emergency_relation,
          emergency_contact:singlePatientData.emergency_contact,
          insurance_company:singlePatientData.insurance_company,
          insurance_id:singlePatientData.insurance_id,
          placeholers_name:singlePatientData.placeholers_name,
          emergency_dob:singlePatientData.emergency_dob,
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

const handleInputChange = (e)=>{
    const {name,value}=e.target
    setPatientDetails((prevState)=>({
        ...prevState,
        [name]:value
    }))
}

const handleInDateChange = (date) => {
  const selectedDate = new Date(date)
  
      const formatDate = selectedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      // Generate slots for the selected date
      setPatientDetails((prevFormData)=>({
        ...prevFormData,
        admission_Date: formatDate
      }))
    };

    const handleemgDateChange = (date) => {
      const selectedDate = new Date(date)
      
          const formatDate = selectedDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          // Generate slots for the selected date
          setPatientDetails((prevFormData)=>({
            ...prevFormData,
            emergency_dob: formatDate
          }))
        };

  return (
    <div>  
        <div className="doc-page-table">
    <div className='d-flex flex-column gap-3'>
    <div className="row">
        <div className="col d-flex justify-content-center me-1 mb-4">
            <span className="doctor-profile text-end">
                Admission More Detail
            </span>
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Consulting Doctor Name</label>
            <input
                name="consulting_doctor"
                value={patientDetails.consulting_doctor}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Doctor's Contact Number</label>
            <input
                name="doctor_contact_no"
                value={patientDetails.doctor_contact_no}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Patient Name</label>
            <input
                name="patient_name"
                value={patientDetails.patient_name}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Admission Number</label>
            <input
                name="admission_No"
                value={patientDetails.admission_No}
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
                name="admission_Address"
                value={patientDetails.admission_Address}
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
            <label className="medichistory-lable">Blood Group</label>
            <input
                name="blood_group"
                value={patientDetails.blood_group}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Marital Status</label>
            <select
                name="marital_status"
                value={patientDetails.marital_status}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col-6">
            <label className="medichistory-lable">Admission Date</label>
           <DatePicker
                             selected={patientDetails.admission_Date}
                             onChange={handleInDateChange}
                             customInput={<CustomInput />}
                             showYearDropdown
                             scrollableYearDropdown
                             yearDropdownItemNumber={80}
                             scrollableMonthYearDropdown
                           />
        </div>
        
    </div>
  
    <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Aadhar Card Number</lable>
            <input
                name="aadhar_no"
                value={patientDetails.aadhar_no}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Passport Number</lable>
            <input
                name="passport_no"
                value={patientDetails.passport_no}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Visa Status</lable>
            <input
                name="visa_status"
                value={patientDetails.visa_status}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Pan Number</lable>
            <input
                name="pan_no"
                value={patientDetails.pan_no}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
        </div>
        <p className="medichistory-lable"> Health History</p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> TAKING ANY MEDICATIONS, CURRENTLY?</lable>
            <input
                name="medications"
                value={patientDetails.medications}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> REASON FOR REGISTRATION</lable>
            <input
                name="reason_register"
                value={patientDetails.reason_register}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable">Additional Notes</lable>
            <input
                name="additonal_notes"
                value={patientDetails.additonal_notes}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
         
        </div>
        <p className="medichistory-lable"> EMERGENCY CONTACT</p>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> RelationShip</lable>
            <input
                name="emergency_relation"
                value={patientDetails.emergency_relation}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Contact Number</lable>
            <input
                name="emergency_contact"
                value={patientDetails.emergency_contact}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable"> DOB</lable>
            <DatePicker
                             selected={patientDetails.emergency_dob}
                             onChange={handleemgDateChange}
                             customInput={<CustomInput />}
                             showYearDropdown
                             scrollableYearDropdown
                             yearDropdownItemNumber={80}
                             scrollableMonthYearDropdown
                           />
          </div>
         
        </div>
        <p className="medichistory-lable"> INSURANCE INFORMATION</p>
        <div className="row ">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Insurance Company</lable>
            <input
                name="insurance_company"
                value={patientDetails.insurance_company}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Insurance Id</lable>
            <input
                name="insurance_id"
                value={patientDetails.insurance_id}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        </div>
        <div className="row" >
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">PlaceHolder's Name</lable>
            <input
                name="placeholers_name"
                value={patientDetails.placeholers_name}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable">Date Of Birth</lable>
            <input
                name="reg_No"
                value={patientDetails.reg_No}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
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
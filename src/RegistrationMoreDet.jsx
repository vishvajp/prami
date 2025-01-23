import React, { useState,useEffect,useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import docimg from "./img/Doc.png"
import "./RegistrationMoreDet.css"
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import UserDataContext from "./Context/UserDataContext";
import axios from "axios";

const RegistrationMoreDet = () => {
  const { apiBaseUrl } = useContext(UserDataContext);
    const navToRegistrationEdit = useNavigate()
  const location = useLocation();
  const singlePatient = location.state;
  const images = [docimg,docimg,docimg,docimg,docimg]
const singleData = singlePatient.element
const [docTrue,setDocTrue]=useState(false)
const [clinicData, setClinicData] = useState(null);
     const [clinic, setClinic] = useState("");
     const [clinicName, setClinicName] = useState("");
      const [doctorData, setDoctorData] = useState(null);
      const [singleDocName, setSingleDocName] = useState("");
      const user = "physiotherapy";
// console.log(singleData);
const [addRegDate,setAddRegDate]=useState(null)
const [addDocPresc,setAddDocPresc] =useState(
  {
    patientRegistrationDate:singleData.patientRegistrationDate,
    doctor_id :singleData.doctor_id,
    doctorPrescription:singleData.doctorPrescription
  
  }
)
console.log(addDocPresc)
const handleCliniChange = (e) => {
  const singleClinicName = e.target.value;
  setClinicName(singleClinicName);
  const selectedClinic = clinicData?.find(
    (clinic) => clinic.clinic_name === singleClinicName
  );
  setClinic(selectedClinic?.clinic_id);
};

useEffect(() => {
  const getClinicData = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}get_clinic_list`);
      if (response.data) {
        setClinicData(response.data.data);
        console.log(clinicData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  getClinicData();
}, [apiBaseUrl]);

useEffect(() => {
  if (clinic) {
    const getDocData = async () => {
      try {
        const response = await axios.post(
          `${apiBaseUrl}get_doctor/${clinic}`
        );
        if (response.data) {
          setDoctorData(response.data.data);
          console.log(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDocData();
  }
}, [clinic]);

// Doctor Id Choosing function

const handleDoctorChange = (event) => {

  const specDocName = event.target.value;
  setSingleDocName(specDocName);
  const getDocId = doctorData?.find(
    (docname) => docname.doc_name === specDocName
  );
const docId = getDocId?.doctor_id
const idLength = singleData.doctor_id.length
  // console.log(docId)
  setAddDocPresc((prevData)=>{
    const updatedDocId =  [...prevData.doctor_id];
    updatedDocId[idLength] = docId;
    return {
            ...prevData,
            doctor_id: updatedDocId, // Return the new state with updated doctor_id
          };
  }

  )
  console.log(addDocPresc)
};



 const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate =
    value && !isNaN(new Date(value))
      ? format(new Date(value), "dd/MM/yyyy")
      : "DD/MM/YYYY";

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

  const handleAddDateChange = (specDate, date) => {
    if (isNaN(new Date(date))) return; // Ignore invalid dates
  
    const selectedDate = new Date(date);
  
    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setAddRegDate(formatDate)

    const newRegDate = formatDate

    const DateLength = singleData.patientRegistrationDate.length
  
    setAddDocPresc((prevFormData) => {
      const updatedDate = [...prevFormData.patientRegistrationDate]
      updatedDate[DateLength] = newRegDate;
      return{
        ...prevFormData,
        patientRegistrationDate: updatedDate
      }
      // ...prevFormData,
      // [specDate]: specDate === "patientRegistrationDate"
      //   ? [...(prevFormData[specDate] || []), formatDate]
      //   : formatDate,
    });
  };


  const handlePresImage = (e) => {
    const reader = Array.from(e.target.files);
    setAddDocPresc((prevData) => ({ ...prevData, doctorPrescription: [...reader] }));
  };


  const handleSub =()=>{
    console.log(addDocPresc)
  }

  const handleNavToRegistrationEdit = ()=>{
    console.log("game")
navToRegistrationEdit("/home/register/edit",{state:{singleData}})
  }
  return (
    <div>
      <div className="doc-page-table">
        <div className="row">
            <div className="col d-flex justify-content-end"> <span className="doctor-profile text-end" >Registration More Detail</span></div>
            <div className="col text-end"> <button onClick={handleNavToRegistrationEdit} className="profile-edit-button me-4">Edit</button></div>
           
        </div>
      < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
     Registration Date
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientRegistrationDate}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
               DOB
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientDOB}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                 Name
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientName}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                 Mobile
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientMobile}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
               Gender
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientGender}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
               Occupation
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientOccupation}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Marital Status
                </lable>
                <p className='medicalhistory-records-para'>{singleData.maritalStatus}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                 Blood Group
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientBloodGroup}</p>
        </div>   
        </div> 
       
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Height
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientHeight}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
              Weight
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientWeight}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col-6">
        <lable className="medichistory-lable">
                  {" "}
                  Location
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientLocation}</p>
        </div>
         
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                 Insurance
                </lable>
                <p className='medicalhistory-records-para'>{singleData.patientInssured}</p>
        </div>
        <div className="d-flex flex-column col">
        
        {/* <lable className="medichistory-lable">
                  {" "}
               Marital Status
                </lable>
                <p className='medicalhistory-records-para'>{singleData.element.marital_status}</p> */}
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
              Doctor
                </lable>
                <p className='medicalhistory-records-para'>{singleData.doctor}</p>
        </div>
        <div className="d-flex flex-column col">
        
       
        </div>   
        <div className="row">
       {images.map((sinImg,index)=>(
        <div key={index} className="col-3">
          <img  className="registerImg" src={sinImg}></img>
          </div>
       ))}
       
        
        </div>
        </div> 
        <div className="d-flex">
          <button onClick={()=>setDocTrue(!docTrue)}>ADD PRESCRIPTION</button>
        </div>
        {docTrue &&
        <form onSubmit={handleSub}>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column">
                          <label className="registration-modal-label">
                            Registration Date
                          </label>
                          <DatePicker
                           selected={
                            addDocPresc.patientRegistrationDate
                              ? new Date(addRegDate)
                              : null
                          }
                            onChange={(date) => handleAddDateChange("patientRegistrationDate", date)}
                            customInput={<CustomInput />}
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={80}
                            scrollableMonthYearDropdown
                          />
                        </div>
          </div>
          <div className="col">
          <div className="d-flex flex-column">
                      <label className="patientbooking-input-label">
                        Select Clinic
                      </label>
                      <select
                        required
                        value={clinicName}
                        onChange={handleCliniChange}
                        className="patientbooking-patient-input"
                      >
                        <option value="">Select Clinic</option>
                        {clinicData ? (
                          clinicData.map((nameOfClinc,index) => (
                            <option key={index}>
                              {nameOfClinc.clinic_name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Loading...</option>
                        )}
                      </select>
                    </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="d-flex flex-column">
                      <label className="patientbooking-input-label ms-3">
                        Choose Doctor
                      </label>
                      <select
                        name="doctor"
                        value={singleDocName}
                        className="patientbooking-patient-input"
                        onChange={handleDoctorChange}
                        required
                      >
                        <option value="">Select doctor</option>
                        {doctorData && clinic ? (
                          doctorData.map((docname) => (
                            <option key={docname.doc_name}>
                              {docname.doc_name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Loading...</option>
                        )}
                        {clinicName && <option>{user}</option>}
                      </select>
                    </div>
          </div>
          <div className="col">
          <div className="d-flex flex-column">
              <label className="registration-modal-label">
                Doctor Prescription
              </label>
              <input
                className="registration-modal-input p-0"
                type="file"
                name="doctorPrescription"
                onChange={handlePresImage}
                accept=".png, .jpg, .jpeg"
                multiple
              ></input>
            </div>
          </div>
        </div>
        <div>
          <button type="submit">UPDATE</button>
        </div>
        </form> }
        
      </div>
    </div>
  );
};

export default RegistrationMoreDet;

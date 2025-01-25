import React, { useContext, useState,useEffect } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import UserDataContext from "./Context/UserDataContext";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom";

const PastPatientRecReg = () => {
  const { apiBaseUrl } = useContext(UserDataContext);
  const [loading, setLoading] = useState(false);
    const [clinicData, setClinicData] = useState(null);
     const [clinic, setClinic] = useState("");
     const [clinicName, setClinicName] = useState("");
      const [doctorData, setDoctorData] = useState(null);
      const [singleDocName, setSingleDocName] = useState("");
      const navigate = useNavigate()
 
  // const user = "physiotherapy";
      
  const [formData, setFormData] = useState({
    patientRegistrationDate: "",
    patientDOB: "",
    patientName: "",
    patientMobile: "",
    // email: "",
    patientOccupation: "",
    patientLocation: "",
    doctor_id:[],
    maritalStatus: "",
    patientInssured: "",
    patientGender: "",
    patientBloodGroup: "",
    patientHeight: "",
    patientWeight: "",
    doctorPrescription: [],
    patientPhoto: null,
  });

// Input change function

  const handleInputChange = async (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file" && files.length > 0) {
      // Compress the image
      // const compressedFile = await compressImage(files[0]);
      // setFormData({ ...formData, [name]: compressedFile });
      setFormData({ ...formData, [name]: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

// Image Compression Functions

  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 0.2, // 200KB
      maxWidthOrHeight: 1920, // Adjust as needed
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(
        `Original file size: ${file.size / 1024} KB, Compressed file size: ${
          compressedFile.size / 1024
        } KB`
      );
      return compressedFile;
    } catch (error) {
      console.error("Image compression failed:", error);
      return file; // Return the original file if compression fails
    }
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

  
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [specDate]: specDate === "patientRegistrationDate"
        ? [formatDate]
        : formatDate,
    }));
  };
  

  const handleEmpty = () => {
    setFormData({
      patientRegistrationDate: "",
      patientDOB: "",
      patientName: "",
      patientMobile: "",
      // email: "",
      patientOccupation: "",
      patientLocation: "",
      doctor_id:[],
      maritalStatus: "",
      patientInssured: "",
      patientGender: "",
      patientBloodGroup: "",
      patientHeight: "",
      patientWeight: "",
      doctorPrescription: [],
      patientPhoto: null,
    });
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

  // Clinic Change Function

  const handleCliniChange = (e) => {
    const singleClinicName = e.target.value;
    setClinicName(singleClinicName);
    const selectedClinic = clinicData?.find(
      (clinic) => clinic.clinic_name === singleClinicName
    );
    setClinic(selectedClinic?.clinic_id);
  };


  // Doctor Id Choosing function

  const handleDoctorChange = (event) => {

    const specDocName = event.target.value;
    setSingleDocName(specDocName);
    const getDocId = doctorData?.find(
      (docname) => docname.doc_name === specDocName
    );
const docId = getDocId?.doctor_id
    // console.log(docId)
    setFormData((prevData)=>(
      {...prevData,doctor_id : [docId]}
    ))
    // setSelectedDoctor(getDocId?.doctor_id);
    console.log(formData)
  };


// Form Submit function

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (loading) return;
    setLoading(true);

    if (!formData.patientDOB) {
      alert("Please select a date of birth");
      return; // Stop further executio
    }

    if(!formData.patientRegistrationDate){
      alert("Please select a registration date");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      if (key == "doctorPrescription") {
        formData[key].forEach((img, index) => {
          img.forEach((sinImg,SinIndex)=>{
            data.append(`doctorPrescription[${index}][${SinIndex}]`, sinImg);
          }
        )
        });
      } else if (key == "patientRegistrationDate") {
        formData[key].forEach((RegDate, index) => {
          data.append(`patientRegistrationDate[${index}]`, RegDate);
        });
      } else if (key == "doctor_id") {
        formData[key].forEach((doc, index) => {
          data.append(`doctor_id[${index}]`, doc);
        })}else{
        data.append(key, formData[key]);
      }
    }
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      for (let pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }
        const response = await axios.post("https://saaluvar.com/Backend/prami/public/api/patientRegister",data)
        if(response.data){
          alert(response.data.message)
     handleEmpty()
     navigate("/home/registration")
        }
      } catch (error) {
      alert( error.response.data.message);
      console.log(error.response.data.message)
      }finally {
        setLoading(false);
      }

    console.log(formData)
    
  };


  // docprescription image function

  // const handlePresImage = async (e) => {
  //   const files = Array.from(e.target.files);
  //   const compressedFiles = [];
  
  //   for (const file of files) {
  //     console.log(`Original file: ${file.name}, size: ${(file.size / 1024).toFixed(2)} KB`);
  //     try {
  //       const options = {
  //         maxSizeMB: 0.2, // Maximum size in MB (200 KB = 0.2 MB)
  //         maxWidthOrHeight: 1920, // Keep the resolution reasonable
  //         useWebWorker: true,
  //       };
  
  //       const compressedFile = await imageCompression(file, options);
  //       console.log(`Compressed file: ${compressedFile.name}, size: ${(compressedFile.size / 1024).toFixed(2)} KB`);
  //       compressedFiles.push(compressedFile);
  //     } catch (error) {
  //       console.error("Image compression error:", error);
  //     }
  //   }
  
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     doctorPrescription: compressedFiles,
  //   }));
  // };

  const handlePresImage = (e) => {
    const reader = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, doctorPrescription: [reader] }));
  };

  return (
    <div className="clinic-main-div p-3">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column">
              <label className="registration-modal-label">
                Registration Date
              </label>
              <DatePicker
               selected={
                formData.patientRegistrationDate
                  ? new Date(formData.patientRegistrationDate)
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
              <lable className="registration-modal-label">Date Of Birth</lable>
              <DatePicker
                selected={formData.patientDOB}
                onChange={(date) => handleAddDateChange("patientDOB", date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Patient Name</lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patientName}
                name="patientName"
                onChange={handleInputChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\d/g, ""); // Remove numeric characters
                }}
                required
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Mobile</lable>
              <input
                className="registration-modal-input"
                type="tel"
                value={formData.patientMobile}
                name="patientMobile"
                onChange={(e) => {
                  const { value } = e.target;
                  if (/^\d*$/.test(value)) {
                    setFormData((prevData) => ({
                      ...prevData,
                      patientMobile: value,
                    }));
                  }
                }}
                required
                maxLength={10}
              ></input>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* <div className="d-flex flex-column">
              <label className="registration-modal-label">Email</label>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              ></input>
            </div> */}
             <div className="d-flex flex-column">
              <label className="registration-modal-label">Gender</label>
              <select
                className="registration-modal-input"
                value={formData.patientGender}
                name="patientGender"
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>
          <div className="col">
          {/* <div className="d-flex flex-column">
              <label className="registration-modal-label">Gender</label>
              <select
                className="registration-modal-input"
                value={formData.patientGender}
                name="patientGender"
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option>male</option>
                <option>female</option>
              </select>
            </div> */}
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">
                Patient Occupation
              </lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patientOccupation}
                name="patientOccupation"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
          <div className="d-flex flex-column mb-3">
              <label className="registration-modal-label">Marital Status</label>
              <select
                className="registration-modal-input"
             
            
                value={formData.maritalStatus}
                name="maritalStatus"
                onChange={handleInputChange}
              >
                <option value="">Select Marital Status</option>
                <option>Married</option>
                  <option>Unmarried</option>
              </select>
            </div>
            
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">BloodGroup </lable>
              <select
                className="registration-modal-input"
                value={formData.patientBloodGroup}
                name="patientBloodGroup"
                onChange={handleInputChange}
              >
                <option value="">Select Blood</option>
                <option value="A+">A+</option>
      <option >A-</option>
      <option >B+</option>
      <option >B-</option>
      <option >AB+</option>
      <option >AB-</option>
      <option>O+</option>
      <option >O-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="d-flex flex-column">
              <label className="registration-modal-label">Height</label>
              <input
                className="registration-modal-input"
                value={formData.patientHeight}
                name="patientHeight"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Weight</lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patientWeight}
                name="patientWeight"
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="p-0 mt-3">
          <div className="col ">
            <div className="d-flex flex-column mb-3">
              <label className="registration-modal-label">Location</label>
              <input
                className="registration-modal-input"
                type="text"
                placeholder="Enter Address"
                value={formData.patientLocation}
                name="patientLocation"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        {/* <div className="row">
                  <div className="col ">
                    <div className="d-flex flex-column  mb-3">
                      <input
                        className="registration-modal-input"
                        type="text"
                        placeholder="Enter City"
                        value={formData.city}
                        name="city"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="d-flex flex-column" style={{ marginTop: "47.5px" }}>
                      <input
                        className="registration-modal-input"
                        type="text"
                        placeholder="Enter Country"
                        value={formData.country}
                        name="country"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col ">
                    <div className="d-flex flex-column mb-4">
                      <input
                        className="registration-modal-input"
                        type="text"
                        placeholder="Enter State"
                        value={formData.state}
                        name="state"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <label className="registration-modal-label">Pincode</label>
                      <input
                        className="registration-modal-input"
                        type="text"
                        placeholder="Enter Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div> */}
        {/* <div className="row">
                  <div className="col ">
                    <div className="d-flex flex-column mb-4">
                      <label className="registration-modal-label">Enter Landmark</label>
                      <input
                        className="registration-modal-input"
                        placeholder="Enter Location"
                        value={formData.pincode}
                        name="pincode"
                        onChange={handleInputChange}
                      ></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex flex-column">
                        <lable className="registration-modal-label">
                          Marital Status
                        </lable>
                        <input
                          className="registration-modal-input"
                          type="text"
                          name="marital_status"
                          value={formData.marital_status}
                          onChange={handleInputChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div> */}
        <div className="row">
          <div className="col d-flex align-items-center">
            <div className="d-flex">
              <div className="d-flex ">
                <input
                  type="radio"
                  name="patientInssured"
                  value="yes"
                  checked={formData.patientInssured === "yes"}
                  onChange={handleInputChange}
                ></input>
                <lable className="registration-modal-label me-3">
                  Insurance
                </lable>
              </div>
              <div className="d-flex ">
                <input
                  type="radio"
                  name="patientInssured"
                  value="no"
                  checked={formData.patientInssured === "no"}
                  onChange={handleInputChange}
                ></input>
                <lable className="registration-modal-label">No Insurance</lable>
              </div>
            </div>
          </div>
          <div className="col">
          {/* <div className="d-flex flex-column">
              <lable className="registration-modal-label">
                Patient Occupation
              </lable>
              <input
                className="registration-modal-input"
                type="text"
                value={formData.patientOccupation}
                name="patientOccupation"
                onChange={handleInputChange}
              ></input>
            </div> */}
            
          </div>
        </div>
        <div className="row mt-3">
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
                        {/* {clinicName && <option>{user}</option>} */}
                      </select>
                    </div>
          </div>
        </div>

        <div className="row mt-3">
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
          <div className="col">
            <div className="d-flex flex-column">
              <lable className="registration-modal-label">Patient Photo</lable>
              <input
                className="registration-modal-input p-0"
                type="file"
                name="patientPhoto"
                onChange={handleInputChange}
                 accept=".png, .jpg, .jpeg"
              ></input>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center basicdetail-button-div">
          <button
            className="basicdetail-cancel-button"
            type="button"
            onClick={()=>navigate("/home/registration")}
          >
            CANCEL
          </button>
          <button className=" basicdetail-register-button"   type="submit"
                    disabled={loading}> {loading ? "SUBMITING..." : "SUBMIT"}</button>
        </div>
      </form>
    </div>
  );
};

export default PastPatientRecReg;

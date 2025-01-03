import React from "react";
import "./AddPhysiotherapy.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'
import { FaPencil } from "react-icons/fa6";
import { useState,useContext,useEffect } from "react";
import UserDataContext from "./Context/UserDataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddPhysiotherapy = ({ setAddPhysio }) => {


  const handleDataSend = () => {
    setAddPhysio(false);
  };
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      ref={ref} // Forward the ref to the button element
      type="button" // Make sure it's a button to prevent form submission
      className="patientBooking-date-input"
      onClick={onClick}
    >
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  ));
  const [docName, setDocName] = useState("");
  const [docExp, setDocExp] = useState("");
  const [docSpl, setDocSpl] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docReg, setDocReg] = useState("");
  const [docDob, setDocDob] = useState("");
  const [phone, setPhone] = useState("");
  const [docLocation, setDocLocation] = useState("");
  const [docMale, setDocMale] = useState(false);
  const [docFemale, setDocFemale] = useState(false);
  const [docFee, setDocFee] = useState("");
  const [docEdu, setDocEdu] = useState("");
  const [docAchieve, setDocAchieve] = useState("");
  const [docClinic, setDocClinic] = useState("Spine Clinics");
  const [clinicData, setClinicData] = useState(null);
  const [clinicName,setClinicName]=useState("")
  const [docRole, setDocRole] = useState("");
  const [docGroup, setDocGroup] = useState("");
  const { apiBaseUrl } = useContext(UserDataContext);
  const [docJoining, setDocJoining] = useState("");


  const handleMale = () => {
    setDocMale(true);
    setDocFemale(false);
  };

  const handleFemale = () => {
    setDocFemale(true);
    setDocMale(false);
  };

  const handleCliniChange =(e)=>{
    const clin = e.target.value
setClinicName(clin)
const specClinic = clinicData?.find((cli)=>cli.clinic_name === clin)
console.log(specClinic)
  setDocClinic(specClinic.clinic_id)
  console.log(docClinic)

  }

  const selectedDate = new Date(docDob);

  // Format the date to 'DD MMM YYYY'
  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });


  const selectedJoiningDate = new Date(docJoining);

  // Format the date to 'DD MMM YYYY'
  const formattedJoiningDate = selectedJoiningDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

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

  const handleSave = async(e) => {
    e.preventDefault()
    try{

      const data = {
        physio_name: docName,
        physio_experience: docExp,
        physio_specialist: docSpl,
        physio_email: docEmail,
        physio_reg_no: docReg,
        physio_dob: formattedDate,
        physio_mobile: phone,
        physio_address: docLocation,
        physio_gender: docMale ? "Male" : "Female",
        physio_fee: docFee,
        physio_education: docEdu,
        physio_achievement: docAchieve,
        physio_clinic: docClinic,
        physio_role:docRole,
        physio_group:docGroup,
        date_of_joining: formattedJoiningDate
      };
  
  console.log(data)

  const response = await axios.post(`${apiBaseUrl}add_physiotherapy`, data);
      if (response.data) {
        window.alert("Physio added successfully!");
        handleDataSend()
      }
    }catch(err){
      console.log(err)
    }

  };


  
  return (

    <div className="doctor-detail-container ">
    {" "}
    <form onSubmit={handleSave}>
    <div className="row d-flex justify-content-center">
      <div className="col docdetail-1col">
        <p className="doctor-detail-text">Add Physiotherapy</p>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Physiotherapy Name</label>
          <input
            onChange={(e) => setDocName(e.target.value)}
            className="docdetail-input"
            value={docName}
            type="text"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Experience</label>
          <input
            onChange={(e) => setDocExp(e.target.value)}
            className="docdetail-input"
            value={docExp}
            type="num"
            placeholder="Enter Experience"
            required
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">E Mail ID</label>
          <input
            onChange={(e) => setDocEmail(e.target.value)}
            className="docdetail-input"
            value={docEmail}
            type="email"
            placeholder="Enter Email ID"
            required
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Date Of Birth</label>
          <DatePicker
    selected={docDob}
    onChange={(date) => setDocDob(date)}
    customInput={<CustomInput />}
    showYearDropdown
    scrollableYearDropdown
    yearDropdownItemNumber={80}
    scrollableMonthYearDropdown
    maxDate={new Date()}
  />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Location</label>
          <input
            onChange={(e) => setDocLocation(e.target.value)}
            value={docLocation}
            className="docdetail-input"
            type="text"
            placeholder="Enter Location"
            required
          />
        </div>
       
      
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Fee</label>
          <input
            onChange={(e) => setDocFee(e.target.value)}
            value={docFee}
            className="docdetail-input"
            type="number"
            placeholder="Enter Fee"
            required
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Achievements</label>
          <input
            onChange={(e) => setDocAchieve(e.target.value)}
            value={docAchieve}
            className="docdetail-input"
            type="text"
            placeholder="Enter Achievements"
            required
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Role</label>
          <input
            onChange={(e) => setDocRole(e.target.value)}
            value={docRole}
            className="docdetail-input"
            type="text"
            placeholder="Enter Role"
            required
          />
        </div>
     
        <div className="d-flex flex-column">
              <label className="docdetail-input-label">Date Of Joining</label>
              <DatePicker
                selected={docJoining}
                onChange={(date) => setDocJoining(date)}
                customInput={<CustomInput />}
                required
              />
            </div>
      </div>
      <div className="col docdetail-2col">
        <div className="d-flex justify-content-end align-items-center">
          <div className="docdetail-docimg-pencil">
            <img
              className=" profile-doc-image m-2"
              src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ width: "75px", height: "75px" }}
            ></img>
            <FaPencil className="docdetail-penicl-icon" />
          </div>
          {/* <MdCancel
            onClick={handlecanceldoc}
            className="docdetail-cancel-icon"
          /> */}
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Specialist</label>
          <input
            onChange={(e) => setDocSpl(e.target.value)}
            value={docSpl}
            className="docdetail-input"
            type="text"
            placeholder="Enter Specialist"
            required
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">
            Medical Registration No
          </label>
          <input
            onChange={(e) => setDocReg(e.target.value)}
            className="docdetail-input"
            value={docReg}
            type="text"
            placeholder="Enter Medical Registration No"
            required
          />
        </div>

        <div className="d-flex flex-column">
          <label className="docdetail-input-label">Mobile No</label>
       
            <input
             className="docdetail-input"
              type="tel"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                
                setPhone(value)}}
                maxLength={10}
                placeholder="Enter Mobile No"
                required
            />
         
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Gender</label>
          <div className="d-flex justify-content-evenly align-items-center docdetail-gender-registration">
            <div className="d-flex">
              <input
                type="checkbox"
                onClick={handleMale}
                checked={docMale}
                id="Gender"
                name="Gender"
                value="male"
              />
              <label for="Gender" className="ms-2">
                Male
              </label>
            </div>
            <div className="docdetail-vertical-line"></div>
            <div className="d-flex">
              <input
                type="checkbox"
                id="Gender"
                name="Gender"
                value="female"
                onClick={handleFemale}
                checked={docFemale}
              />
              <label for="Gender" className="ms-2">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column ">
          <label className="docdetail-input-label" for="Education">
            Education
          </label>
          <input
            value={docEdu}
            onChange={(e) => setDocEdu(e.target.value)}
            name="Education"
            className="docdetail-input"
            placeholder="Enter Education"
            required
          >
          </input>
        </div>
        <div className="d-flex flex-column">
          <label className="docdetail-input-label" for="Clinic">
            Clinic Name
          </label>
          <select
                value={clinicName}
                onChange={handleCliniChange}
                name="clinic"
                id="clinic"
                required
              >
                <option value="">Select Clinic</option>
                {
                          clinicData?.map((nameOfClinc)=>{
                            return <option key={nameOfClinc?.clinic_id}>{nameOfClinc.clinic_name}</option>
                          })
                        }
              </select>
        </div>
        <div className="d-flex flex-column ">
          <label className="docdetail-input-label">Group</label>
          <input
            onChange={(e) => setDocGroup(e.target.value)}
            value={docGroup}
            className="docdetail-input"
            type="text"
            placeholder="Enter Group"
            required
          />
        </div>
             </div>
    </div>  
    <div className="d-flex justify-content-center gap-2 mt-4" >
      <button
               onClick={handleDataSend}
          className="medicalhistory-back-button"
        >
          CANCEL
        </button>
        <button
         type="submit"
          className="medicalhistory-nex-button"
        >
          SUBMIT
        </button>
       
      </div>
      </form>
  </div>
  );
};

export default AddPhysiotherapy;

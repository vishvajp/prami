import React, { useContext, useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from 'date-fns'
import { useLocation, useNavigate } from "react-router-dom";


const ClinecEditPage = () => {
//   const {
//     selectedButton,
//     setSelectedButton,
//     selectedBtnName,
//     setSelectedBtnName,
//   } = useContext(UserDataContext);
  const location = useLocation();
  const singleClinic = location.state.game;
const [regDate, setRegDate]=useState(null)
  console.log(singleClinic);

  const [clinicDetails, setclinicDetails] = useState({
    clinic_name: "",
    clinic_address:"",
    clinic_country: "",
    clinic_district:"",
    clinic_email: "",
    clinic_id: "",
    clinic_licence_no: "",
    clinic_location: "",
    clinic_mobile: "",
    clinic_owner:"",
    clinic_pincode: "",
    clinic_reg_date:"",
    clinic_state : "",
    clinic_tin_no : ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (singleClinic) {
      setclinicDetails({
        clinic_name: singleClinic.clinic_name,
        clinic_address:singleClinic.clinic_address,
        clinic_country: singleClinic.clinic_country,
        clinic_district:singleClinic.clinic_district,
        clinic_email: singleClinic.clinic_email,
        clinic_id: singleClinic.clinic_id,
        clinic_licence_no: singleClinic.clinic_licence_no,
        clinic_location: singleClinic.clinic_location,
        clinic_mobile: singleClinic.clinic_mobile,
        clinic_owner:singleClinic.clinic_owner,
        clinic_pincode: singleClinic.clinic_pincode,
        clinic_reg_date:null,
        clinic_state : singleClinic.clinic_state,
        clinic_tin_no : singleClinic.clinic_tin_no
      });
    }
    setRegDate(singleClinic.clinic_reg_date)
  }, [singleClinic]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setclinicDetails((prevData) => ({ ...prevData, [name]: value }));
  };

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
  
    const handleDateChange = (date) => {
        setRegDate(date)
        const selectedDate = new Date(date)
        
            const formatDate = selectedDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
            // Generate slots for the selected date
            setclinicDetails((prevFormData)=>({
              ...prevFormData,
              clinic_reg_date: formatDate
            }))
          };

  return (
    <div>
      <div className="doc-page-table">
        <div className="d-flex flex-column gap-3">
          <div className="row">
            <div className="col d-flex justify-content-center me-1 mb-4">
              <span className="doctor-profile text-end">
              Edit Clinic Details
              </span>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Name</label>
              <input
                name="clinic_name"
                value={clinicDetails.clinic_name}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Owner</label>
              <input
                name="clinic_owner"
                value={clinicDetails.clinic_owner}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Mobile</label>
              <input
                name="clinic_mobile"
                value={clinicDetails.clinic_mobile}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Email</label>
              <input
                name="clinic_email"
                value={clinicDetails.clinic_email}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Address</label>
              <input
                name="clinic_address"
                value={clinicDetails.clinic_address}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic District</label>
              <input
                name="clinic_district"
                value={clinicDetails.clinic_district}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic State</label>
              <input
                name="clinic_state"
                value={clinicDetails.clinic_state}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Pincode</label>
              <input
                name="clinic_pincode"
                value={clinicDetails.clinic_pincode}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">
             Clinic Location
              </label>
              <input
                name="clinic_location"
                value={clinicDetails.clinic_location}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Country</label>
              <input
                name="clinic_country"
                value={clinicDetails.clinic_country}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">
             Clinic Id
              </label>
              <input
                name="clinic_id"
                value={clinicDetails.clinic_id}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Liscence</label>
              <input
                name="clinic_licence_no"
                value={clinicDetails.clinic_licence_no}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">
              Clinic Reg Date
              </label>
               <DatePicker
                                  selected={regDate}
                                  minDate={new Date()}
                                  onChange={handleDateChange}
                                  customInput={<CustomInput />}
                                />
            </div>
            <div className="d-flex flex-column col">
              <label className="medichistory-lable">Clinic Tin No</label>
              <input
                name="clinic_tin_no"
                value={clinicDetails.clinic_tin_no}
                onChange={handleInputChange}
                className="medicalhistory-records-para"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="medicalhistory-back-button"
              onClick={() => navigate("/home/admin/adminsetting")}
            >
              CANCEL
            </button>
            <button className="medicalhistory-nex-button ">UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinecEditPage;

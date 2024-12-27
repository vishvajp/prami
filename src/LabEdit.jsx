import React, { useEffect,useState,useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import UserDataContext from "./Context/UserDataContext";
const LabEdit = () => {
const location = useLocation()
const singleLab = location.state.user;
console.log(singleLab);
const {setSelectedBtnName,setSelectedButton}=useContext(UserDataContext)
const navigate = useNavigate()

const handleDataSend = () => {
    setSelectedBtnName("LAB")
navigate("/home/admin/adminsetting")
setSelectedButton(1)
  };

    const [regLab, setRegLab] = useState({
        lab_Name: "",
        contact_Person: "",
        mobile_Number: "",
        email_Id: "",
        address: "",
        city: "",
        state: "",
        country: "",
        landmark: "",
        pincode: "",
        role: "",
        group: "",
        date_of_reg: "",
      });


      useEffect(()=>{
        if(singleLab){
            setRegLab({
                lab_Name: singleLab.lab_Name,
                contact_Person: singleLab.contact_Person,
                mobile_Number: singleLab.mobile_Number,
                email_Id: singleLab.email_Id,
                address: singleLab.address,
                city: singleLab.city,
                state: singleLab.state,
                country: singleLab.country,
                landmark: singleLab.landmark,
                pincode: singleLab.pincode,
                role: singleLab.role,
                group: singleLab.group,
                date_of_reg: singleLab.date_of_reg,

            })
        }
            
      },[singleLab])
    
      const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
        const formattedDate = value
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
    
      const handleInDateChange = (date) => {
        const selectedDate = new Date(date);
    
        const formatDate = selectedDate.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        // Generate slots for the selected date
        setRegLab((prevFormData) => ({
          ...prevFormData,
          date_of_reg: formatDate,
        }));
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegLab((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
  return (
    <div>
          {" "}
          <p className="clinecs-1stdiv-text">Lab Edit</p>
          <div className="labregistration-main-div  row bg pe-0">
            <div className="row pe-0">
              <div className="col d-flex flex-column pe-4">
                <label className="labregistration-label">Lab Name*</label>
                <input
                  placeholder="Enter Lab Name"
                  className="labregistration-input"
                  type="text"
                  name="lab_Name"
                  value={regLab.lab_Name}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="col d-flex flex-column pe-0 ps-4">
                <label className="labregistration-label">Contact Person*</label>
                <input
                  placeholder="Enter Contact Person Name"
                  className="labregistration-input"
                  type="text"
                  name="contact_Person"
                  value={regLab.contact_Person}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="row pe-0">
              <div className="col d-flex flex-column pe-0">
                <label className="labregistration-label">Address*</label>
                <input
                  placeholder="Enter Address"
                  className="labregistration-input"
                  type="text"
                  name="address"
                  value={regLab.address}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="row pe-0">
              <div className="col d-flex flex-column pe-4">
                <input
                  placeholder="Enter Country"
                  className="labregistration-input mt-2"
                  type="text"
                  name="country"
                  value={regLab.country}
                  onChange={handleInputChange}
                ></input>
                <input
                  placeholder="Enter State"
                  className="labregistration-input mt-2"
                  type="text"
                  name="state"
                  value={regLab.state}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="col d-flex flex-column pe-0 ps-4">
                <input
                  placeholder="Enter City"
                  className="labregistration-input mt-2"
                  type="text"
                  name="city"
                  value={regLab.city}
                  onChange={handleInputChange}
                ></input>
                <input
                  placeholder="Enter Landmark"
                  className="labregistration-input mt-2"
                  type="text"
                  name="landmark"
                  value={regLab.landmark}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="row pe-0">
              <div className="col d-flex flex-column pe-4">
                <label className="labregistration-label">Pincode*</label>
                <input
                  placeholder="Enter Pincode"
                  className="labregistration-input"
                  type="text"
                  name="pincode"
              value={regLab.pincode}
              onChange={handleInputChange}
                ></input>
              </div>
              <div className="col pe-0 ps-4">
                <div className="d-flex flex-column  mb-4">
                  <label className="labregistration-label">
                    Date Of Registration
                  </label>
                  <DatePicker
                    selected={regLab.date_of_reg}
                    onChange={handleInDateChange}
                    customInput={<CustomInput />}
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={80}
                    scrollableMonthYearDropdown
                  />
                </div>
              </div>
            </div>
            <div className="row pe-0">
              <div className="col d-flex flex-column pe-4">
                <label className="labregistration-label">Mobile Number*</label>
                <input
                  placeholder="Enter Mobile Number"
                  className="labregistration-input"
                  type="text"
                  name="mobile_Number"
                  value={regLab.mobile_Number}
                ></input>
              </div>
              <div className="col d-flex flex-column pe-0 ps-4">
                <label className="labregistration-label">Email*</label>
                <input className="labregistration-input" type="text" 
                name="email_Id"
                value={regLab.email_Id}
                onChange={handleInputChange} 
                
                ></input>
              </div>
            </div>
            <div className="row pe-0">
              <div className="col d-flex flex-column pe-4">
                <label className="labregistration-label">Role</label>
                <input
                  placeholder="Enter Role"
                  className="labregistration-input"
                  type="text"
                  name="role"
                  value={regLab.role}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="col d-flex flex-column pe-0 ps-4">
                <label className="labregistration-label">Group</label>
                <input
                  className="labregistration-input"
                  type="text"
                  placeholder="Group"
                  name="group"
                  value={regLab.group}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-4">
              <button
                onClick={handleDataSend}
                className="labregistration-cancel-button"
              >
                CANCEL
              </button>
              <button className="labregistration-add-button">ADD</button>
            </div>
          </div>
        </div>
  )
}

export default LabEdit
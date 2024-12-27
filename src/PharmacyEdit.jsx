import React, { useEffect,useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import UserDataContext from "./Context/UserDataContext";

const PharmacyEdit = () => {
    const location = useLocation()
    const singlePharmacy = location.state.singlePharmacy
    console.log(singlePharmacy)
    const {setSelectedBtnName,setSelectedButton}=useContext(UserDataContext)
    const navigate = useNavigate()
    console.log(singlePharmacy)

    const handleDataSend = () => {
        setSelectedBtnName("PHARMACY")
        setSelectedButton(2)
        navigate("/home/admin/adminsetting")
      };

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

       const [regPharmacy, setRegPharmacy] = useState({
            hospital: "",
            location: "",
            pharmacy_name: "",
            added_by: "",
            contact_no: "",
            added_on: "",
            email_id: "",
            status: "",
            role: "",
            group: "",
            date_of_reg: "",
          });


          useEffect(()=>{
if(singlePharmacy){
    setRegPharmacy(
        {
            hospital: singlePharmacy.hospital,
            location: singlePharmacy.location,
            pharmacy_name: singlePharmacy.pharmacy_name,
            added_by: singlePharmacy.added_by,
            contact_no: singlePharmacy.contact_no,
            added_on: singlePharmacy.added_on,
            email_id: singlePharmacy.email_id,
            status: singlePharmacy.status,
            role: singlePharmacy.role,
            group: singlePharmacy.group,
            date_of_reg: singlePharmacy.date_of_reg
            }
    )}
          },[singlePharmacy])
        
          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setRegPharmacy((prevData) => ({ ...prevData, [name]: value }));
          };
      
          const handleInDateChange = (date) => {
            const selectedDate = new Date(date);
        
            const formatDate = selectedDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
            // Generate slots for the selected date
            setRegPharmacy((prevFormData) => ({
              ...prevFormData,
              date_of_reg: formatDate,
            }));
          };
      
          const handleAddDateChange = (date) => {
            const selectedDate = new Date(date);
        
            const formatDate = selectedDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
            // Generate slots for the selected date
            setRegPharmacy((prevFormData) => ({
              ...prevFormData,
              added_on: formatDate,
            }));
          };

  return (
   <div className="pharmacy-registration-mainTop-div">
         <p className="pharamacy-registration-1stdiv-text">
           Pharmacy Edit
         </p>
         <div className=".pharmacyr-registration-main-div row bg">
           <div className="col pharmacy-registration-first-col">
             <div className="d-flex flex-column  mb-4">
               <label>Hospital/Clinic</label>
               <input type="text"
               name="hospital"
               value={regPharmacy.hospital}
               onChange={handleInputChange}
               
               ></input>
             </div>
             <div className="d-flex flex-column mb-4">
               <label>Pharmacy Name</label>
               <input type="text"
               name="pharmacy_name"
               value={regPharmacy.pharmacy_name}
               onChange={handleInputChange}
               ></input>
             </div>
             <div className="d-flex flex-column mb-4 ">
               <label>Contact No</label>
               <input type="text"
               name="contact_no"
               value={regPharmacy.contact_no}
               onChange={handleInputChange}
               ></input>
             </div>
             <div className="d-flex flex-column  mb-4">
               <label>Email Id </label>
               <input type="text"
               name="email_id"
               value={regPharmacy.email_id}
               onChange={handleInputChange}
               ></input>
             </div>
             <div className="d-flex flex-column  mb-4">
               <label>Role </label>
               <input type="text"
               name="role"
               value={regPharmacy.role}
               onChange={handleInputChange}
   
               ></input>
             </div>
             <div className="d-flex flex-column mb-4">
               <label>Date Of Registration</label>
              <DatePicker
                              selected={regPharmacy.date_of_reg}
                              onChange={handleInDateChange}
                              customInput={<CustomInput />}
                              showYearDropdown
                              scrollableYearDropdown
                              yearDropdownItemNumber={80}
                              scrollableMonthYearDropdown
                            />
             </div>
           </div>
           <div className="col pharmacy-registration-second-col">
             <div className="d-flex flex-column mb-4">
               <label>Location</label>
               <input type="text"
               name="location"
                value={regPharmacy.location}
                onChange={handleInputChange}
               ></input>
             </div>
             <div className="d-flex flex-column mb-4">
               <label>Added By</label>
               <input type="text"
                name="added_by"
                 value={regPharmacy.added_by}
                 onChange={handleInputChange}
               ></input>
             </div>
             <div className="d-flex flex-column mb-4">
               <label>Added On</label>
               <DatePicker
                              selected={regPharmacy.added_on}
                              onChange={handleAddDateChange}
                              customInput={<CustomInput />}
                              showYearDropdown
                              scrollableYearDropdown
                              yearDropdownItemNumber={80}
                              scrollableMonthYearDropdown
                            />
             </div>
             <div className="d-flex flex-column mb-4">
               <label> Status</label>
               <input type="text"
                name="status"
                value={regPharmacy.status}
                onChange={handleInputChange}

               ></input>
             </div>
             <div className="d-flex flex-column mb-4">
               <label> Group</label>
               <input type="text"
               name="group"
                value={regPharmacy.group}
                onChange={handleInputChange}

               ></input>
             </div>
           </div>
           <div className="d-flex justify-content-center gap-2 mt-4">
             <button
               onClick={handleDataSend}
               className="pharmacy-labregistration-cancel-button"
             >
               CANCEL
             </button>
             <button className="pharmacy-registration-add-button">ADD</button>
           </div>
         </div>
       </div>
  )
}

export default PharmacyEdit
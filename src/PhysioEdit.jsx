import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from 'date-fns'

const PhysioEdit = () => {
    const location = useLocation()
    const singlePhysio = location.state
    const [regDate, setRegDate]=useState(null)
    const [docDob, setDocDob]=useState(null)
     const navigate = useNavigate();
    const [physioDet,setPhysioDet]=useState(null)
    console.log(singlePhysio)
    
      useEffect(() => {
        if (singlePhysio) {
            setPhysioDet({
            Clinic: singlePhysio.Clinic,
            date_of_joining:null,
            physio_achievement: singlePhysio.physio_achievement,
            physio_address:singlePhysio.physio_address,
            physio_dob: null,
            physio_education: singlePhysio.physio_education,
            physio_email: singlePhysio.physio_email,
            physio_experience: singlePhysio.physio_experience,
            physio_fee: singlePhysio.physio_fee,
            physio_gender:singlePhysio.physio_gender,
            physio_group: singlePhysio.physio_group,
            physio_id:singlePhysio.physio_id,

            physio_mobile : singlePhysio.physio_mobile,
            physio_name : singlePhysio.physio_name,
            physio_reg_no:singlePhysio.physio_reg_no,
            physio_specialist:singlePhysio.physio_specialist,
          });
        }
        setRegDate(singlePhysio.date_of_joining)
        setDocDob(singlePhysio.physio_dob)
      }, [singlePhysio]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPhysioDet((prevData) => ({ ...prevData, [name]: value }));
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
        
          
    const handleJoinDateChange = (date) => {
        setRegDate(date)
        const selectedDate = new Date(date)
        
            const formatDate = selectedDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
            // Generate slots for the selected date
            setPhysioDet((prevFormData)=>({
              ...prevFormData,
              date_of_joining: formatDate
            }))
          };

          const handleDobDateChange = (date) => {
            setDocDob(date)
            const selectedDate = new Date(date)
            
                const formatDate = selectedDate.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });
                // Generate slots for the selected date
                setPhysioDet((prevFormData)=>({
                  ...prevFormData,
                  physio_dob: formatDate
                }))
              };

  return (
    <div>
         <div className="doc-page-table">
                <div className="d-flex flex-column gap-3">
                  <div className="row">
                    <div className="col d-flex justify-content-center me-1 mb-4">
                      <span className="doctor-profile text-end">
                      Edit Physio Details
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Name</label>
                      <input
                        name="physio_name"
                        value={physioDet?.physio_name}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Clinic</label>
                      <input
                        name="Clinic"
                        value={physioDet?.Clinic}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Mobile</label>
                      <input
                        name="physio_mobile"
                        value={physioDet?.physio_mobile}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Email</label>
                      <input
                        name="physio_email"
                        value={physioDet?.physio_email}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Address</label>
                      <input
                        name="physio_address"
                        value={physioDet?.physio_address}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Date Of Birth</label>
                      <DatePicker
                                          selected={docDob}
                                          showYearDropdown
                                          scrollableYearDropdown
                                          yearDropdownItemNumber={80}
                                          scrollableMonthYearDropdown
                                          onChange={handleDobDateChange}
                                          customInput={<CustomInput />}
                                        />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Gender</label>
                      <select
                        name="physio_gender"
                        value={physioDet?.physio_gender}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      >
                        <option value="">select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Education</label>
                      <input
                        name="physio_education"
                        value={physioDet?.physio_education}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">
                    Experience
                      </label>
                      <input
                        name="physio_experience"
                        value={physioDet?.physio_experience}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">physio_id</label>
                      <input
                        name="physio_id"
                        value={physioDet?.physio_id}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">
                     Joined Date
                      </label>
                      <DatePicker
                                          selected={regDate}
                                          minDate={new Date()}
                                          onChange={handleJoinDateChange}
                                          customInput={<CustomInput />}
                                        />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Reg No</label>
                      <input
                        name="physio_reg_no"
                        value={physioDet?.physio_reg_no}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">
                      Specialist
                      </label>
                      <input
                        name="physio_specialist"
                        value={physioDet?.physio_specialist}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Fee</label>
                      <input
                        name="physio_fee"
                        value={physioDet?.physio_fee}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">
                      Achievements
                      </label>
                      <input
                        name="physio_achievement"
                        value={physioDet?.physio_achievement}
                        onChange={handleInputChange}
                        className="medicalhistory-records-para"
                      />
                    </div>
                    <div className="d-flex flex-column col">
                      <label className="medichistory-lable">Group</label>
                      <input
                        name="physio_group"
                        value={physioDet?.physio_group}
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
  )
}

export default PhysioEdit
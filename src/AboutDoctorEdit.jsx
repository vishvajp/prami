import React, { useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AboutDoctorEdit.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const AboutDoctorEdit = () => {
  const aboutDocNavigate = useNavigate();
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];

  const location = useLocation();
  const specDoc = location.state;
  const specificDoc = specDoc?.singleDoc;
  console.log(specificDoc);

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");

  const handleAboutNavigate = () => {
    aboutDocNavigate("/home/doctor");
  };
  const [docDob, setDocDob] = useState();
  const [docJoin, setDocJoin] = useState(null);
  const [DocData, setDocData] = useState({});

  useEffect(() => {
    if (specificDoc) {
      setDocData({
        doc_name: specificDoc.doc_name || "",
        doc_dob: specificDoc.doc_dob || "",
        Clinic: specificDoc.Clinic,
        date_of_joining: specificDoc.date_of_joining,
        doc_achievement: specificDoc.doc_achievement,
        doc_address: specificDoc.doc_address,
        doc_education: specificDoc.doc_education,
        doc_email: specificDoc.doc_email,
        doc_experience: specificDoc.doc_experience,
        doc_fee: specificDoc.doc_fee,
        doc_gender: specificDoc.doc_gender,
        doc_group: specificDoc.doc_group,
        doc_mobile: specificDoc.doc_mobile,
        doc_reg_no: specificDoc.doc_reg_no,
        doc_role: specificDoc.doc_role,
        doc_specialist: specificDoc.doc_specialist,
        doctor_id: specificDoc.doctor_id,
      });
    }
    setDocDob(specificDoc.doc_dob);
    setDocJoin(specificDoc.date_of_joining)
  }, [specificDoc]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateChange = (specdate) => {
    setDocDob(specdate);
    const selectedDate = new Date(docDob);

    // Format the date to 'DD MMM YYYY'
    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setDocData((prevdata) => ({ ...prevdata, date_of_joining: formattedDate }));
  };

  const handleJoinChange = (specdate) => {
    setDocJoin(specdate);
    const selectedDate = new Date(docDob);

    // Format the date to 'DD MMM YYYY'
    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setDocData((prevdata) => ({ ...prevdata, doc_j: formattedDate }));
  };
  return (
    <div>
      <div className=" m-3 profile-container pt-1">
        <div className="d-flex profile-details-div">
          <div className="col-5 profile-detail-1col">
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Doctor Name</label>
              <input
                className="profile-input"
                type="text"
                name="doc_name"
                value={DocData.doc_name}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Experience</label>
              <input
                className="profile-input"
                type="text"
                name="doc_experience"
                value={DocData.doc_experience}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">EMail ID</label>
              <input
                className="profile-input"
                type="email"
                placeholder="Karunakaran@gmail.com"
                name="doc_email"
                value={DocData.doc_email}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Date Of Birth</label>
              <DatePicker
                selected={docDob}
                onChange={(date) => handleDateChange(date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
                maxDate={new Date()}
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Address</label>
              <input
                className="profile-input"
                type="text"
                name="doc_address"
                value={DocData.doc_address}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column">
              <label className="docdetail-input-label">Doctor Fees</label>
        
                <input
                  type="text"
                 className="profile-input"
                  name="doc_fee"
                  value={DocData.doc_fee}
                  onChange={handleChange}
                />
       
            </div>
            <div className="d-flex flex-column">
              <label className="docdetail-input-label">Specialist</label>
          
               
                <input
                  type="text"
                   className="profile-input"
                  name="doc_specialist"
                  value={DocData.doc_specialist}
                  onChange={handleChange}
                />
             
            </div>
            <div className="d-flex flex-column">
              <label className="docdetail-input-label">Doctor Id</label>
             
                <input
                  type="text"
               className="profile-input"
                  name="doc_role"
                  value={DocData.doctor_id}
                  onChange={handleChange}
                />
            
            </div>
            <div className="d-flex flex-column">
              <label className="docdetail-input-label">
                Doctor Achievements
              </label>
             
               
                <input
                  type="text"
               className="profile-input"
                  name="doc_achievement"
                  value={DocData.doc_achievement}
                  onChange={handleChange}
                />
             
            </div>
          </div>
          <div className="col-5 profile-detail-2col">
            <div className="d-flex flex-column">
              <label className="profile-input-label">Role</label>
              <input
                className="profile-input"
                type="text"
                name="doc_role"
                value={DocData.doc_role}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
            <div className="d-flex flex-column">
              <label className="profile-input-label">
                Medical Registration No
              </label>
              <input
                className="profile-input"
                type="text"
                name="doc_reg_no"
                value={DocData.doc_reg_no}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
            <div className="d-flex flex-column">
              <label className="profile-input-label">Mobile No</label>
              <input
                className="profile-input"
                type="tel"
                name="doc_mobile"
                value={DocData.doc_mobile}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Education">
                Education
              </label>
              <input
                className="profile-input"
                name="doc_education"
                type="text"
                value={DocData.doc_education}
              />
            </div>
            <div className="d-flex flex-column">
              <label className="profile-input-label">Gender</label>

              <input
                className="profile-input"
                type="tel"
                name="doc_gender"
                value={DocData.doc_gender}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Clinic Name
              </label>
              <input
                className="profile-input"
                type="text"
                name="Clinic"
                value={DocData.Clinic}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Date Of Joining</label>
              <DatePicker
                selected={docJoin}
                onChange={(date) => handleJoinChange(date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
                maxDate={new Date()}
              />
            </div>

            <div className="d-flex flex-column ">
              <label className="profile-input-label">Group</label>
              <input
                className="profile-input"
                type="text"
                name="doc_group"
                value={DocData.doc_group}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-column docabout-days ">
          <label className="docdetail-input-label">Days</label>
          <div className="d-flex justify-content-evenly align-items-center docdetail-days">
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <label for="Gender">Sunday</label>
            </div>
            <div className="docdetail-days-vertical-line"></div>
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="female" />
              <label for="Gender">Monday </label>
            </div>
            <div className="docdetail-days-vertical-line"></div>
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <label for="Gender">Tuesday</label>
            </div>
            <div className="docdetail-days-vertical-line"></div>
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <label for="Gender">Wednesday</label>
            </div>
            <div className="docdetail-days-vertical-line"></div>
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <label for="Gender">Thursday</label>
            </div>
            <div className="docdetail-days-vertical-line"></div>
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <label for="Gender">Friday</label>
            </div>
            <div className="docdetail-days-vertical-line"></div>
            <div className="d-flex flex-column">
              <input type="checkbox" id="Gender" name="Gender" value="male" />
              <label for="Gender">Saturday</label>
            </div>
          </div>
        </div> */}
        <div className="d-flex flex-column docabout-time-container mt-3">
          <label className="docdetail-input-label">Time</label>
          <div className="d-flex justify-content-evenly align-items-center docdetail-medical-registration py-1">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Sunday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
            <div className="docabout-time-vertical-line"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Monday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
            <div className="docabout-time-vertical-line"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Tuesday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
            <div className="docabout-time-vertical-line"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Wednesday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
            <div className="docabout-time-vertical-line"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Thursday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
            <div className="docabout-time-vertical-line"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Friday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
            <div className="docabout-time-vertical-line"></div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label for="Gender" className="me-1">
                  Saturday
                </label>
                <p className="mb-0 docabout-time">10 AM to 1 PM</p>
              </div>
              <input type="checkbox" className="docabout-checkbox"></input>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="aboutdoedit-button" onClick={handleAboutNavigate}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctorEdit;

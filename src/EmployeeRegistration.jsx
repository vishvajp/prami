import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";

const EmployeeRegistration = () => {
  const [formData, setFormData] = useState({
    empName: "",
    date_of_join: "",
    contact_no: "",
    dob: "",
    role: "",
    group: "",
    experience: "",
    salary: "",
  });
  const navToEmp = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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

  const handleAddDateChange = (specDate, date) => {
    const selectedDate = new Date(date);

    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    // Generate slots for the selected date
    setFormData((prevFormData) => ({
      ...prevFormData,
      [specDate]: formatDate,
    }));
  };

  return (
    <div>
      {" "}
      <div>
        {" "}
        <p className="clinecs-1stdiv-text">Employee Registration</p>
        <div className="labregistration-main-div  row bg pe-0">
          <div className="row pe-0">
            <div className="col d-flex flex-column pe-4">
              <label className="labregistration-label">Employee Name*</label>
              <input
                className="labregistration-input"
                type="text"
                name="empName"
                value={formData.empName}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col d-flex flex-column pe-0 ps-4">
              <label className="labregistration-label">Date Of Join*</label>
              <DatePicker
                selected={formData.date_of_join}
                onChange={(date) => handleAddDateChange("date_of_join", date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
              />
            </div>
          </div>
          <div className="row pe-0">
            <div className="col d-flex flex-column pe-4">
              <label className="labregistration-label">Contact Number</label>
              <input
                placeholder="Enter Address"
                className="labregistration-input"
                type="text"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col d-flex flex-column pe-0 ps-4">
              <label className="labregistration-label">Date Of Birth</label>
              <DatePicker
                selected={formData.dob}
                onChange={(date) => handleAddDateChange("dob", date)}
                customInput={<CustomInput />}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={80}
                scrollableMonthYearDropdown
              />
            </div>
          </div>
          <div className="row pe-0">
            <div className="col d-flex flex-column pe-4">
              <label className="labregistration-label">Role</label>
              <input
                placeholder="Enter Address"
                className="labregistration-input"
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col d-flex flex-column pe-0 ps-4">
              <label className="labregistration-label">Group</label>
              <input
                placeholder="Enter Contact Person Name"
                className="labregistration-input"
                type="text"
                name="group"
                value={formData.group}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="row pe-0">
            <div className="col d-flex flex-column pe-4">
              <label className="labregistration-label">Experience</label>
              <input
                placeholder="Enter Address"
                className="labregistration-input"
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col d-flex flex-column pe-0 ps-4">
              <label className="labregistration-label">Salary</label>
              <input
                placeholder="Enter Contact Person Name"
                className="labregistration-input"
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-2 mt-4">
            <button
              onClick={() => navToEmp("/home/employee")}
              className="labregistration-cancel-button"
            >
              CANCEL
            </button>
            <button className="labregistration-add-button">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegistration;

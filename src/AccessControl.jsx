import React, { useState } from "react";
import "./AccessControl.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import AddProfileModal from "./AddProfileModal";

const AccessControl = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const roles = [
    { name: "Admin", subName: "Admin profile" },
    { name: "Doctor", subName: "Doctor" },
    { name: "Receptionist", subName: "Receptionist" },
    { name: "Pharmacy", subName: "Pharmacy" },
    { name: "Lab", subName: "Lab" },
  ];

  const pagesShow = [
    {
      title: "ADMIN",
      subTitles: [
        "Edit Access to all Branches/users",
        "Feedback Question",
        "Manage Branches",
        "Manage Users",
        "Profile Setting",
      ],
    },
    {
      title: "APPOINTMENT",
      subTitles: [
        "All Doctors List",
        "All Pending Payments",
        "All-branches book appointment by receptionist",
        "Billing-Appointment View",
      ],
    },
    {
      title: "CONSULTATION",
      subTitles: ["Billing Consultation", "Start Consultation"],
    },
    {
      title: "MY PATIENTS",
      subTitles: [
        "List Doctor Patients",
        "Patient Listing",
        "Register patient",
        "View Case History",
      ],
    },
    {
      title: "OTHERS",
      subTitles: [
        "Care Team",
        "Communication",
        "Edit Profile",
        "Veterinary Details",
      ],
    },
    {
      title: "SETTING",
      subTitles: [
        "IVF Access",
        "Incentives",
        "Loyalty Bonus",
        "Manual Search",
      ],
    },
    {
      title: "STATS",
      subTitles: [
        "All Doctors / Branches Reports",
        "Appointment Status Report",
        "Branches Report",
        "Cash Received report",
        "Consultants report",
      ],
    },
  ];

  const handleRoleSelect = (index) => {
    setSelectedRoleIndex(index);
  };



  return (
    <div className="bg" style={{ padding: "10px" }}>
      <div className="d-flex flex-column">
        <p className="mb-0 adminset-profile-text">PROFILE SETTINGS</p>
        <p className="mb-0 adminset-profile-below-text">
          Create Custom profile, Set User roles, Set Page level access to users
        </p>
      </div>
      <div className="row">
        <div className="col-3 accesscontro-1st-col">
          <div className="d-flex align-items-center adminset-search-div">
            <input type="text" className="accesscontrol-serach-input"></input>
            <span style={{ padding: "0px 5px" }}>
              <FaMagnifyingGlass className="accesscontrol-search-icon" />
            </span>
          </div>
          <div className="d-flex accesscontrol-1st-col-2nd-div">
            <p className="mb-0 accesscontrol-listprofile-text">
              List of Profile Roles
            </p>
            <div className="d-flex align-items-center accesscontrol-addprofile-btn-div" onClick={showModal}>
              <span>
                <FaPlus  className="accesscontrol-addprofile-plus-icon" />
              </span>
              Add profile
            </div>
          </div>
          <div className="d-flex flex-column gap-3">
            {roles.map((rol, index) => (
              <div
                key={index}
                className="d-flex justify-content-between"
                onClick={() => handleRoleSelect(index)}
              >
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedRoleIndex === index ? "red" : "transparent",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                  className="accesscontrol-1stcol-4div"
                >
                  <p
                    style={{
                      color: selectedRoleIndex === index ? "white" : "red",
                    }}
                    className="accesscontrol-1stcol-top-text"
                  >
                    {rol.name}
                  </p>
                  <p
                    style={{
                      color: selectedRoleIndex === index ? "black" : "gray",
                    }}
                    className="accesscontrol-1col-below-text"
                  >
                    {rol.subName}
                  </p>
                </div>
                {selectedRoleIndex === index && (
                  <div
                    className="accesscontrol-1col-empty-div"
                    style={{ width: "5px" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className="col-8 accesscontro-2nd-col"
          style={{ marginTop: "10px" }}
        >
          <div className="accesscontrol-2ndcol-topdiv">
            <p className="accesscontrol-updateprofile-text">UPDATE PROFILE</p>
            <div className="row" style={{marginTop:"10px"}}>
              <div className="col d-flex">
                <div className="row" style={{ width: "100%" }}>
                  <div className="col d-flex flex-column">
                    <label className="acesscontrol-2nd-col-label">
                      Role Name
                    </label>
                    <select className="accesscontrol-2nd-col-select">
                      <option></option>
                    </select>
                  </div>
                  <div className="col d-flex flex-column">
                    <label className="acesscontrol-2nd-col-label">
                     Group Name
                    </label>
                    <input
                      type="text"
                      className="accesscontrol-2nd-col-input"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-end justify-content-end gap-3">
                <button className="accesscontrol-2nd-col-btns">
                  Select all
                </button>
                <button className="accesscontrol-2nd-col-btns">
                 reset
                </button>
              </div>
            </div>
          </div>
          <div style={{ padding: "10px" }}>
            <div className="row d-flex gap-3">
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label>ADMIN</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[0].subTitles.map(
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label>APPOINTMENT</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[1].subTitles.map(
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="row d-flex gap-3">
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label>CONSULTATION</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[2].subTitles.map(
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label style={{width:"100%"}}>MY PATIENT</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[3].subTitles.map(
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="row d-flex gap-3">
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label>OTHER</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[4].subTitles.map(
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label>SETTING</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[5].subTitles.map(
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="row d-flex gap-3">
              <div className="col accesscontrol-pages-div">
                <div className="d-flex align-items-center gap-2 accesscontrol-admin-text-div">
                  <input type="checkbox"></input>
                  <label>STATS</label>
                  <span style={{ width: "100%", textAlign: "end" }}>
                    <FaRegQuestionCircle className="accesscontrol-question-icon" />
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 accesscontrol-pages-checkbox-div">
                  {pagesShow[6].subTitles.map(
                  
                    (subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className="d-flex align-items-center gap-2"
                      >
                        <input type="checkbox"></input>
                        <label>{subtitle}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col access-control-last-col-div">
                {/* Render null for the second column in the last row */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AddProfileModal isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel} />
      </div>
    </div>
  );
};

export default AccessControl;

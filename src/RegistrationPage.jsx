import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import RegistrationModal from "./RegistrationModal";
import { useNavigate } from "react-router-dom";
const RegistrationPage = () => {
  const [basicisModalOpen, basicsetIsModalOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [elementInput, setElementInput]=useState()
  const navToRegisterMore = useNavigate()

const handleNavToSpecPat = (element)=>{
navToRegisterMore("/home/register/moredetail" , {state:{element}})
}

  const basicshowModal = () => {
    basicsetIsModalOpen(true);
  };
  const basichandleOk = () => {
    basicsetIsModalOpen(false);
  };
  const basichandleCancel = () => {
    basicsetIsModalOpen(false);
  };


  
 

  const tableContent = [
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
    {
      patientRegistrationDate: ["08-30-24"],
    patientDOB: "08-30-24",
    patientName: "Kathir",
    patientMobile: "8564153458",
    // email: "",
    patientOccupation: "Business",
    patientLocation: "Chennai Tamilnadu",
    doctor_id:["doc1"],
    maritalStatus: "married",
    patientInssured: "Yes",
    patientGender: "male",
    patientBloodGroup: "O+",
    patientHeight: "185",
    patientWeight: "60",
    doctorPrescription: [[]],
    patientPhoto: null,
    },
  ];

  const RefreshIcons = ({ user }) => {
    return (
      <div className="refresh-icons-container justify-content-center">
       <div>
          <button onClick={()=>handleNavToSpecPat(user)} className="registerpatient-table-update-button">
            More Details
          </button>
        </div>    
      </div>
    );
  };

  const filteredItem = tableContent.filter((tab) => {
    const searchTerm = tab.patientMobile && tab.patientMobile.includes(searchInput);
    const nameSearchTerm =
      tab.patientName &&
      searchInput &&
      tab.patientName.toLowerCase().includes(searchInput.toLowerCase());

    return searchTerm || nameSearchTerm;
  });

  return (
    <div>
        <div >
      <div className="d-flex align-items-center appointment-input-register">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className="appointment-1stdiv-input"
          type="search"
          placeholder="Enter Name / Number"
        ></input>
        <p
          onClick={()=>{navToRegisterMore("/home/patient/registration")}}
          className="mb-0 appointment-1stdiv-register me-5"
        >
          REGISTER
        </p>
      </div>
      <div className="registerPatient-table-div">
        <Table responsive>
        <thead className="patienttable-head-container">
        <tr>
        {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "doctorPrescription" &&
              key !== "patientPhoto" &&
              key !== "doctor_id" &&
              key !== "patientRegistrationDate" &&
              key !== "landmark" &&
              key !== "occupation" &&
              key !== "email"
             
            
             ? (
                // Filter out unwanted columns
                <th className="table-header-col" key={index}>
                  {key.replace(/_/g, " ").toUpperCase()}{" "}
                  {/* Capitalize key and replace underscores with spaces */}
                  {index < Object.keys(filteredItem[0]).length && (
                    <div className="table-header-div"></div>
                  )}
                </th>
              ) : null
            )}
          <th className="table-header-col" key="refresh">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredItem.map((element) => {
          return (
            <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
              if (
                rowData === "doctorPrescription" ||
                rowData === "patientPhoto" ||
                rowData === "doctor_id" ||
                rowData === "patientRegistrationDate" ||
                rowData === "landmark" ||
                rowData === "occupation" ||
                rowData === "email"
           
              
               
              ) {
                return null;
              }

              return (
                <td className="patienttable-body-row" key={cellIndex}>
                  {element[rowData]}
                  {cellIndex < Object.keys(element).length && (
                    <div className="clinicstable-header-div"></div>
                  )}
                </td>
              );
            })}

            <td className="patienttable-body-row" key="refresh-icon">
              <RefreshIcons user={element} />
            </td>
            </tr>
          );
        })}
      </tbody>
        </Table>
      </div>
      <div>
        <RegistrationModal
          basicisModalOpen={basicisModalOpen}
          basichandleOk={basichandleOk}
          basichandleCancel={basichandleCancel}
        />
      </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

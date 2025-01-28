import React, { useState,useContext,useEffect } from "react";
import Table from "react-bootstrap/Table";
import RegistrationModal from "./RegistrationModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserDataContext from "./Context/UserDataContext";
import docimg from "./img/Doc.png"
const RegistrationPage = () => {
  const [basicisModalOpen, basicsetIsModalOpen] = useState(false);
  const [tableContent, setTableContent] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [elementInput, setElementInput]=useState()
  const { apiBaseUrl } = useContext(UserDataContext);
  const [totalCount, setTotalCount]= useState("")
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


  useEffect(() => {
    const getPastPatientRec = async () => {
      try {
        // const response = await axios.post(`https://saaluvar.com/Backend/prami/public/api/getActivePatientDetails`);
         const response = await axios.post(`${apiBaseUrl}getActivePatientDetails`)
        if (response.data) {
          setTableContent(response.data.data);
          setTotalCount(response.data.totalPatient)
          console.log(response.data.data);
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    getPastPatientRec();
  }, [apiBaseUrl]);
 

  // const tableContent = [
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Kathir",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Kathir",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Kathir",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Kathir",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Kathir",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Kathir",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  //   {
  //     patientRegistrationDate: ["08-30-24"],
  //   patientDOB: "08-30-24",
  //   patientName: "Manikkam",
  //   patientMobile: "8564153458",
  //   // email: "",
  //   patientOccupation: "Business",
  //   patientLocation: "Chennai Tamilnadu",
  //   doctor_id:["doc1"],
  //   maritalStatus: "married",
  //   patientInssured: "Yes",
  //   patientGender: "male",
  //   patientBloodGroup: "O+",
  //   patientHeight: "185",
  //   patientWeight: "60",
  //   doctorPrescription: [[docimg,docimg]],
  //   patientPhoto: docimg,
  //   },
  // ];

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

  // console.log(tableContent)
  const filteredItem = tableContent?.filter((tab) => {
    const searchTerm =
      tab.patient_mobile &&
      String(tab.patient_mobile).includes(searchInput); // Convert to string
    const nameSearchTerm =
      tab.patient_name &&
      searchInput &&
      tab.patient_name.toLowerCase().includes(searchInput.toLowerCase());
  
    return searchTerm || nameSearchTerm;
  });
  

  return (
    <div>
        <div >
          <div className="row appointment-input-register">
            <div className="col d-flex align-items-center" >
              <div><span style={{fontWeight:"600", fontSize:"larger"}}>Total Count - {totalCount}</span></div>
            </div>
            <div className="col">
            <div className="d-flex align-items-center ">
      
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
            </div>
          </div>
      
      <div className="registerPatient-table-div">
        <Table responsive >
        <thead className="patienttable-head-container">
        <tr>
        {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0])?.map((key, index) =>
              key !== "prescriptions" &&
              key !== "patient_photo" &&
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
        {filteredItem?.map((element) => {
          return (
            <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
              if (
                rowData === "prescriptions" ||
                rowData === "patient_photo" ||
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

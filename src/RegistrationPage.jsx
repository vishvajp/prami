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


  
  const tableHeader = [
    {
      name: "Reg_No",
    },
    {
      name: "Reg_Date",
    },
    {
      name: "Name",
    },
    {
      name: "Address",
    },
    {
      name: "Mobile",
    },
    {
      name: "Marital_Status",
    },
    {
      name: "Gender",
    },
    {
      name: "Age",
    },
    {
      name: "Action",
    },
  ];

  const tableContent = [
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      reg_city:"Chennai",
      reg_state:"Tamil Nadu",
      reg_country:"India",
      pincode:"600001",
      landmark:"Near Bus Stand",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
       email:"monica@gmail.com",
      occupation:"Business"
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      reg_city:"Chennai",
      reg_state:"Tamil Nadu",
      reg_country:"India",
      pincode:"600001",
      landmark:"Near Bus Stand",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
       email:"monica@gmail.com",
      occupation:"Business"
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      reg_city:"Chennai",
      reg_state:"Tamil Nadu",
      reg_country:"India",
      pincode:"600001",
      landmark:"Near Bus Stand",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
       email:"monica@gmail.com",
      occupation:"Business"
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      reg_city:"Chennai",
      reg_state:"Tamil Nadu",
      reg_country:"India",
      pincode:"600001",
      landmark:"Near Bus Stand",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
       email:"monica@gmail.com",
      occupation:"Business"
 
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      reg_city:"Chennai",
      reg_state:"Tamil Nadu",
      reg_country:"India",
      pincode:"600001",
      landmark:"Near Bus Stand",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
       email:"monica@gmail.com",
      occupation:"Business"
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      reg_city:"Chennai",
      reg_state:"Tamil Nadu",
      reg_country:"India",
      pincode:"600001",
      landmark:"Near Bus Stand",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
      email:"monica@gmail.com",
      occupation:"Business"
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
    const searchTerm = tab.mobile && tab.mobile.includes(searchInput);
    const nameSearchTerm =
      tab.name &&
      searchInput &&
      tab.name.toLowerCase().includes(searchInput.toLowerCase());

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
          onClick={basicshowModal}
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
              key !== "reg_city" &&
              key !== "reg_state" &&
              key !== "reg_country" &&
              key !== "pincode" &&
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
                rowData === "reg_city" ||
                rowData === "reg_state" ||
                rowData === "reg_country" ||
                rowData === "pincode" ||
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

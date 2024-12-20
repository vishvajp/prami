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
      name: "Monica",
      reg_Address: "Chennai",
      mobile: "9874563211",
      marital_status: "Married",
      gender: "female",
      age: "34",
      action: "",
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Monica",
      reg_Address: "Chennai",
      mobile: "9874563211",
      marital_status: "Married",
      gender: "female",
      age: "34",
      action: "",
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Monica",
      reg_Address: "Chennai",
      mobile: "9874563211",
      marital_status: "Married",
      gender: "female",
      age: "34",
      action: "",
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
      action: "",
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
      action: "",
    },
    {
      reg_No: "Ih475",
      reg_Date: "08-30-24",
      name: "Kathir",
      reg_Address: "Chennai",
      mobile: "8564153458",
      marital_status: "Married",
      gender: "male",
      age: "28",
      action: "",
    },
  ];

  const RefreshIcons = ({ element }) => {
    return (
      <div className="refresh-icons-container justify-content-center">
       <div>
          <button onClick={()=>handleNavToSpecPat(element)} className="registerpatient-table-update-button">
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
              {[...tableHeader].map((ele, index) => (
                <th className="patienttable-header-col" key={index}>
                  {ele.name}
                  {index < tableHeader.length - 1 && (
                    <>
                      <div className="clinicstable-header-div"></div>
                    </>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredItem.map((element) => {
              return (
                <tr className="patienttable-body-row-container">
                  {Object.keys(element).map((rowData, cellIndex) => {
                    if (cellIndex === Object.keys(element).length - 1) { 
                      return <RefreshIcons element={element} />;
                    }
                    return (
                      <td className="patienttable-body-row" key={cellIndex}>
                        {cellIndex < Object.keys(element).length - 1 ? (
                          <>
                            {element[rowData]}
                            <div className="clinicstable-header-div"></div>
                          </>
                        ) : (
                          element[rowData]
                        )}
                      </td>
                    );
                  })}
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

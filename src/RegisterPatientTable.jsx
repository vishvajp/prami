import React from 'react'
import "./RegisterPatient.css"
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const RegisterPatientTable = ({searchInput}) => {
  const navToRegisterMore = useNavigate()
    const tableHeader = [
        {
          name: "Admission_No",
        },
        {
          name: "Admission_Date",
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
          admission_No: "Ih475",
          admission_Date: "08-30-24",
          // consultingDocName: "karunakaran",
          // doctorsContactNumber: "7412365897",
          name: "Monica",
          admission_Address: "Chennai",
         mobile: "9874563211",
          marital_status: "Married",
          // emailId:"jimjam@gmail.com",
         gender:"female",
         age:"34",
         action: "",
        },
        {
            reg_No: "Ih475",
        reg_Date: "08-30-24",
            name: "Monica",
            reg_Address: "Chennai",
           mobile: "9874563211",
            marital_status: "Married",
           gender:"female",
           age:"34",
           action: "",
          },
          {
            reg_No: "Ih475",
            reg_Date: "08-30-24",
            name: "Monica",
            reg_Address: "Chennai",
           mobile: "9874563211",
            marital_status: "Married",
           gender:"female",
           age:"34",
           action: "",
          },
          {
            reg_No: "Ih475",
            reg_Date: "08-30-24",
            name: "Kathir",
            reg_Address: "Chennai",
           mobile: "8564153458",
            marital_status: "Married",
           gender:"male",
           age:"28",
           action: "",
          },
          {
            reg_No: "Ih475",
            reg_Date: "08-30-24",
            name: "Kathir",
            reg_Address: "Chennai",
           mobile: "8564153458",
            marital_status: "Married",
           gender:"male",
           age:"28",
           action: "",
          },
          {
            reg_No: "Ih475",
            reg_Date: "08-30-24",
            name: "Kathir",
            reg_Address: "Chennai",
           mobile: "8564153458",
            marital_status: "Married",
           gender:"male",
           age:"28",
           action: "",
          },
      ];

      const filteredItem = tableContent.filter((tab) => {
        const searchTerm = tab.mobile && tab.mobile.includes(searchInput);
        const nameSearchTerm = tab.name && searchInput && tab.name.toLowerCase().includes(searchInput.toLowerCase());
        
       
        
        return searchTerm || nameSearchTerm;
    });
console.log(searchInput)

const handleNavToSpecPat = (element)=>{
  navToRegisterMore("/home/patientadmission/moredet" , {state:{element}})
  }
  

const RefreshIcons = ({ element }) => {
  return (
    <div className="refresh-icons-container justify-content-center">
     <div>
        <button  onClick={()=>handleNavToSpecPat(element)}  className="registerpatient-table-update-button">
          More Details
        </button>
      </div>    
    </div>
  );
};
  return (
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
  )
}

export default RegisterPatientTable
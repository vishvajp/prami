import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

export function LabTable({searchInput}) {
  const navigate = useNavigate()
  const tableHeader = [
    {
      name: "Lab Name",
    },
    {
      name: "Contact Person",
    },
    {
      name: "Mobile Number",
    },
    {
      name: "Email Id",
    },
    {
      name: "Address",
    },
  ];

  const tableContent = [
    {
      lab_Name: "Labtest",
      contact_Person: "Respected Person",
      mobile_Number: "7894561231",
      email_Id: "testing@gmail.com",
      address: "No25 A guindy chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      landmark:"Near Bus Stand",
      pincode:"600001",
      role:"Chemist",
      group:"A+",
      date_of_reg:"12/12/2021"
    },
    {
      lab_Name: "Labtest",
      contact_Person: "Respected Person",
      mobile_Number: "7894561231",
      email_Id: "testing@gmail.com",
      address: "No25 A guindy chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      landmark:"Near Bus Stand",
      pincode:"600001",
      role:"Chemist",
      group:"A+",
      date_of_reg:"12/12/2021",
      group:"A+",
    },
    {
      lab_Name: "Labtest",
      contact_Person: "Respected Person",
      mobile_Number: "7894561231",
      email_Id: "testing@gmail.com",
      address: "No25 A guindy chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      landmark:"Near Bus Stand",
      pincode:"600001",
      role:"Chemist",
      group:"A+",
    date_of_reg:"12/12/2021",
    group:"A+",
    },
    {
      lab_Name: "Labtest",
      contact_Person: "Respected Person",
      mobile_Number: "7894561231",
      email_Id: "testing@gmail.com",
      address: "No25 A guindy chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      landmark:"Near Bus Stand",
      pincode:"600001",
      role:"Chemist",
  date_of_reg:"12/12/2021",
  group:"A+",
    },
    {
      lab_Name: "Labtest",
      contact_Person: "Respected Person",
      mobile_Number: "7894561231",
      email_Id: "testing@gmail.com",
      address: "No25 A guindy chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      landmark:"Near Bus Stand",
      pincode:"600001",
      role:"Chemist",
    date_of_reg:"12/12/2021",
    group:"A+",
    },
    {
      lab_Name: "Labtest",
      contact_Person: "Respected Person",
      mobile_Number: "7894561231",
      email_Id: "testing@gmail.com",
      address: "No25 A guindy chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      landmark:"Near Bus Stand",
      pincode:"600001",
      role:"Chemist",
      date_of_reg:"12/12/2021",
      group:"A+",
    },
  ];

  const handleNavToSpecPat = (user) => {
    navigate("/home/patient/labmoredet", { state: { user } })
  }

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
    const searchTerm = tab.mobile_Number && tab.mobile_Number.includes(searchInput);
    const nameSearchTerm =
      tab.lab_Name &&
      searchInput &&
      tab.lab_Name.toLowerCase().includes(searchInput.toLowerCase());

    return searchTerm || nameSearchTerm;
  });

  return (
    <Table responsive>
       <thead className="patienttable-head-container">
        <tr>
        {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "city" &&
              key !== "state" &&
              key !== "country" &&
              key !== "pincode" &&
              key !== "landmark" &&
              key !== "role" &&
              key !== "group"
             
            
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
                rowData === "city" ||
                rowData === "state" ||
                rowData === "country" ||
                rowData === "pincode" ||
                rowData === "landmark" ||
                rowData === "role" ||
                rowData === "group"
           
              
               
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
  );
}

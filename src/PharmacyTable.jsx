import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./PharmacyTable.css";
import { useNavigate } from "react-router-dom";
export function PharmacyTable({searchInput}) {
  const tableHeader = [
    {
      name: "Hospital / Clinic",
    },
    {
      name: "Pharmacy Name",
    },
    {
      name: "Contact No",
    },
    {
      name: "Email Id",
    },
    {
      name: "Location",
    },
    {
      name: "Added By",
    },
    {
      name: "Added On",
    },
    {
      name: "Status",
    },
    {
      name: "Action",
    },
  ];

  const tableContent = [
    {
      hospital: "Labtest",
      pharmacy_name: "Respected Person",
      contact_no: "7894561231",
      email_id: "testing@gmail.com",
      location: "No25 A guindy chennai",
      added_on: "2021-01-01",
      added_by: "Admin",
      status: "active",
      role: "check",
      group: "check",
      date_of_reg: "12/12/2023",
    },
    {
      hospital: "Labtest",
      pharmacy_name: "Respected Person",
      contact_no: "7894561231",
      email_id: "testing@gmail.com",
      location: "No25 A guindy chennai",
      added_on: "2021-01-01",
      added_by: "Admin",
      status: "active",
      role: "check",
      group: "check",
      date_of_reg: "12/12/2023",
    },
    {
      hospital: "Labtest",
      pharmacy_name: "Respected Person",
      contact_no: "7894561231",
      email_id: "testing@gmail.com",
      location: "No25 A guindy chennai",
      added_on: "2021-01-01",
      added_by: "Admin",
      status: "active",
      role: "check",
      group: "check",
      date_of_reg: "12/12/2023",
    },
    {
      hospital: "Labtest",
      pharmacy_name: "Respected Person",
      contact_no: "7894561231",
      email_id: "testing@gmail.com",
      location: "No25 A guindy chennai",
      added_on: "2021-01-01",
      added_by: "Admin",
      status: "active",
      role: "check",
      group: "check",
      date_of_reg: "12/12/2023",
    },
    {
      hospital: "Labtest",
      pharmacy_name: "Respected Person",
      contact_no: "7894561231",
      email_id: "testing@gmail.com",
      location: "No25 A guindy chennai",
      added_on: "2021-01-01",
      added_by: "Admin",
      status: "active",
      role: "check",
      group: "check",
      date_of_reg: "12/12/2023",
    },
    {
      hospital: "Labtest",
      pharmacy_name: "Respected Person",
      contact_no: "7894561231",
      email_id: "testing@gmail.com",
      location: "No25 A guindy chennai",
      added_on: "2021-01-01",
      added_by: "Admin",
      status: "active",
      role: "check",
      group: "check",
      date_of_reg: "12/12/2023",
    },
  ];
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate()

  const handleclick = () => {
    setChecked(!checked);

    console.log(checked);
  };

  const handleNavToSpecPat = (user) => {
   navigate("/home/pharmacy/moredet",{state:{user:user}})
  }

  const filteredItem = tableContent.filter((tab) => {
    const searchTerm = tab.contact_no && tab.contact_no.includes(searchInput);
    const nameSearchTerm =
      tab.pharmacy_name &&
      searchInput &&
      tab.pharmacy_name.toLowerCase().includes(searchInput.toLowerCase());

    return searchTerm || nameSearchTerm;
  });

  const RefreshIcons = ({ user }) => {
    return (
      <div className="d-flex align-items-center pharmacy-table-last-child">
        <div className="d-flex">
          <p
            onClick={handleclick}
            className="pharmacy-3rd-col-yes mb-0"
            style={{ backgroundColor: checked ? "green" : "gray" }}
          >
            Active
          </p>
          <p
            onClick={handleclick}
            className="pharmacy-3rd-col-no mb-0"
            style={{ backgroundColor: checked ? "gray" : "green" }}
          >
            Inactive
          </p>
        </div>
        <div className="refresh-icons-container justify-content-center">
       <div>
          <button onClick={()=>handleNavToSpecPat(user)} className="registerpatient-table-update-button">
            More Details
          </button>
        </div>    
      </div>
      </div>
    );
  };

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

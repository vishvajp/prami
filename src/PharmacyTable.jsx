import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./PharmacyTable.css";
export function PharmacyTable() {
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
      branch: "Labtest",
      pharmacyName: "Respected Person",
      contactNo: "7894561231",
      emailId: "testing@gmail.com",
      location: "No25 A guindy chennai",
      addedBy: "Admin",
      addedOn: "2021-01-01",
      status: "Active",
      Default: "",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
      addedBy: "Admin",
      addedOn: "2021-01-01",
      status: "Active",
      Default: "",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
      addedBy: "Admin",
      addedOn: "2021-01-01",
      status: "Active",
      Default: "",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
      addedBy: "Admin",
      addedOn: "2021-01-01",
      status: "Active",
      Default: "",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
      addedBy: "Admin",
      addedOn: "2021-01-01",
      status: "Active",
      Default: "",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
      addedBy: "Admin",
      addedOn: "2021-01-01",
      status: "Active",
      Default: "",
    },
  ];
  const [checked, setChecked] = useState(false);

  const handleclick = () => {
    setChecked(!checked);

    console.log(checked);
  };

  const Defaultlastdata = () => {
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
        <MdDelete className=" pharmacy-table-delete-icon" />
        {/* <FaStar className="pharmacy-table-star-icon" /> */}
        <FaEdit className="pharmacy-table-edit-icon"/>
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
              <div className="pharmacyTable-header-div"></div>
            </>
          )}
        </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((element) => {
          return (
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
                if (cellIndex === Object.keys(element).length - 1) {
                  return <Defaultlastdata />;
                }
                return (
                  <td className="patienttable-body-row" key={cellIndex}>
                  {cellIndex < Object.keys(element).length - 1 ? (
                    <>
                      {element[rowData]}
                      <div className="pharmacyTable-content-div"></div>
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
  );
}

import React from "react";
import Table from "react-bootstrap/Table";

export function LabTable() {
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
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
    },
    {
      labName: "Labtest",
      contactPerson: "Respected Person",
      mobileNumber: "7894561231",
      emailId: "testing@gmail.com",
      address: "No25 A guindy chennai",
    },
  ];

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
        {tableContent.map((element) => {
          return (
            <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
           
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
  );
}

import Table from "react-bootstrap/Table";
import "./Patienttable.css";
import { useState } from "react";
export function Patienttable({
  startDate,
  toDate,
  clinicName,
  docName,
  treatmentName,
}) {
  const [searchValue,setSearchValue]=useState("")
  const tableHeader = [
    {
      name: "Consultaion Date",
    },
    {
      name: "Patient Id",
    },
    {
      name: "Patient Name",
    },
    {
      name: "Gender",
    },
    {
      name: "D.O.B",
    },
    {
      name: "Contact Number",
    },
    {
      name: "Referal Source",
    },

    {
      name: "Patient Type",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Treatment",
    },
    {
      name: "Hospital / Clinic",
    },
    {
      name: "Amount Recieved (INR)",
    },
  ];

  const tableContent = [
    {
      date: "08-29-2024",
      patientId: "UHID 282",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",

      patientType: "Follow Up",
      doctorName: "Dr Karunakaran",
      treatment: "Neuro",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "07-09-2024",
      patientId: "UHID 283",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",

      patientType: "Follow Up",
      doctorName: "Dr Karunakaran",
      treatment: "Spine",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "08-31-2024",
      patientId: "UHID 284",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",

      patientType: "Follow Up",
      doctorName: "Dr Senthil",
      treatment: "Full Body",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "09-2-2024",
      patientId: "UHID 286",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",

      patientType: "Follow Up",
      doctorName: "Dr Karunakaran",
      treatment: "Neuro",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "10-08-2024",
      patientId: "UHID 285",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",

      patientType: "Follow Up",
      doctorName: "Dr Kumar",
      treatment: "Spine",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
    {
      date: "09-01-2024",
      patientId: "UHID 287",
      patientName: "Mrs. Monica",
      gender: "female",
      dob: "23-Jan-2000",
      contactNumber: "9874563211",
      referal: "Others",

      patientType: "Follow Up",
      doctorName: "Dr Senthil",
      treatment: "Full Body",
      branch: "Dr.Karunakaran Spine Centre",
      amount: "0",
    },
  ];

  const filteredItems = tableContent.filter((tabdata) => {
    const filtDate =
      startDate && toDate
        ? new Date(tabdata.date) >= startDate &&
          new Date(tabdata.date) <= toDate
        : true;
    const filtdoc =
      docName === "All" ||
      docName.toLowerCase() === tabdata.doctorName?.toLowerCase();
    const filtTreat =
      treatmentName === "All" ||
      tabdata.treatment?.toLowerCase() === treatmentName.toLowerCase();
const searchTerm = tabdata.patientId ? tabdata.patientId.toLowerCase().includes((searchValue?.toLowerCase())) : true;
    return filtDate && filtdoc && filtTreat && searchTerm;
  });
  return (
<div>
<div className="d-flex align-items-center justify-content-end" style={{width:"100%"}}>
      <input className="patient-table-search-input" placeholder="Search Patient Id" type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>
      </div>
    <Table responsive>
      
      <thead className="patienttable-head-container">
        <tr>
          {[...tableHeader].map((ele, index) => (
            <th className="patienttable-header-col" key={index}>
              {ele.name}
              {index < tableHeader.length - 1 && (
                <>
                  <div className="patienttable-header-div"></div>
                </>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((element, index) => {
          return (
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
                return (
                  <td className="patienttable-body-row" key={cellIndex}>
                    {cellIndex < Object.keys(element).length - 1 ? (
                      <>
                        {element[rowData]}
                        <div className="patienttable-header-div"></div>
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
  );
}

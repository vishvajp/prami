import React from 'react'
import Table from "react-bootstrap/Table";
import "./PatientTreatmentTable.css"

const PatientTreatmentTable = ({medicineDetail}) => {
    const tableHeader = [
        {
          name: "Medicine Name",
        },
        {
          name: "Dosage",
        },
        {
          name: "Duration",
        },
        {
          name: "Notes",
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
      {medicineDetail.map((element) => {
        return (
          <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
           
              return (
                <td className="patienttable-body-row" key={cellIndex}>
                {cellIndex < Object.keys(element).length - 1 ? (
                  <>
                    {element[rowData]}
                    <div className="patientTreatmentTable-header-div"></div>
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

export default PatientTreatmentTable
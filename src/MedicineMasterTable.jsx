import React from 'react'
import Table from "react-bootstrap/Table";
const MedicineMasterTable = () => {
    const tableHeader = [
        {
          name: "Medicine Name",
        },
        {
          name: "Generic Name",
        },
        {
          name: "Medicine Type",
        },
        {
          name: "Dosage",
        },
      ];
    
      const tableContent = [
        {
          MedicineName: "Paracetamol",
          GenericName: "Paracetamol",
          MedicineType: "Analgesic (pain reliever) and antipyretic (fever reducer)",
          Dosage: "4 grams",
        },
        {
            MedicineName: "Novomax",
            GenericName: "Metformin",
            MedicineType: "Antidiabetic agent",
            Dosage: "500 mg to 1000 mg",
        },
        {
            MedicineName: "Dolo 650",
            GenericName: "Paracetamol (Acetaminophen)",
            MedicineType: "Analgesic (pain reliever) and antipyretic (fever reducer)",
            Dosage: "650 mg",
        },
        {
            MedicineName: "Ibuprofen",
            GenericName: "Ibuprofen",
            MedicineType: "Nonsteroidal anti-inflammatory drug (NSAID)",
            Dosage: "200 mg to 400 mg",
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
  )
}

export default MedicineMasterTable
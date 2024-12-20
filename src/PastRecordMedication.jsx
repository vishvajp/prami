import React, { useEffect, useState } from 'react';
import Table from "react-bootstrap/Table";
import "./PatientTreatmentTable.css";

const PastRecordMedication = () => {
  const [medicineDetails, setMedicineDetails] = useState([]);
  const [visitDates, setVisitDates] = useState([]);

  const todayDate = new Date().toLocaleDateString();

  const tableHeader = [
    { name: "Medicine Name" },
    { name: "Dosage" },
    { name: "Duration" },
    { name: "Notes" },
  ];

  useEffect(() => {
    const storedMedicines = JSON.parse(localStorage.getItem("meicine_detail"));
    if (storedMedicines) {
      // Assuming storedMedicines is an array of objects, each containing medicine details and a visit date
      const groupedByDate = storedMedicines.reduce((acc, medicine) => {
        const visitDate = medicine.visitDate || todayDate;
        if (!acc[visitDate]) {
          acc[visitDate] = [];
        }
        acc[visitDate].push(medicine);
        return acc;
      }, {});

      setVisitDates(Object.keys(groupedByDate));
      setMedicineDetails(groupedByDate);
    }
  }, [todayDate]);

  return (
    <div style={{ padding: "10px" }}>
      {visitDates.map((date, dateIndex) => (
        <div key={dateIndex}>
          <div className="mb-2">
            <span className="me-1">Visit Date</span>:<span className="ms-2">{date}</span>
          </div>
          <Table responsive>
            <thead className="patienttable-head-container">
              <tr>
                {tableHeader.map((ele, index) => (
                  <th className="patienttable-header-col" key={index}>
                    {ele.name}
                    {index < tableHeader.length - 1 && (
                      <div className="clinicstable-header-div"></div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {medicineDetails[date].map((element, rowIndex) => (
                <tr className="patienttable-body-row-container" key={rowIndex}>
                  {Object.keys(element).map((rowData, cellIndex) => (
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
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default PastRecordMedication;

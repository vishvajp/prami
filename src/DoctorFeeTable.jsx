import React, { useState, useEffect, useRef } from "react";
import Table from "react-bootstrap/Table";
import "./DoctorFeeTable.css";
import { DownloadTableExcel } from "react-export-table-to-excel";

const DoctorFeeTable = ({
  handleDataFromfeetable,
  pageCount,
  handlePageCount,
  selectTreatment,
  startDate,
  toDate,
  selectedUser,
  selectedPaymentType,
  totalData,
}) => {
  const tableRef = useRef(null);
  const [totalAmount, setTotalAmount] = useState("0");
  const itemsPerPage = 5;

  const tableHeader = [
    {
      name: "Consultation Date",
    },
    {
      name: " Hospital / Clinic",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Treatment Type",
    },
    {
      name: "Payment Type",
    },
    {
      name: "Amount Recieved",
    },
  ];
  const tableContent = [
    {
      consultationDate: "30-March-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Physio",
      paymentType: "online",
      AmountRecieved: "8000",
    },
    {
      consultationDate: "30-March-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Neuro",
      paymentType: "Cash",
      AmountRecieved: "8000",
    },
    {
      consultationDate: "15-August-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "full body",
      paymentType: "Online",
      AmountRecieved: "8000",
    },
    {
      consultationDate: "30-March-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Physio",
      paymentType: "Cash",
      AmountRecieved: "8000",
    },
    {
      consultationDate: "30-March-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Physio",
      paymentType: "upi",
      AmountRecieved: "9000",
    },
    {
      consultationDate: "30-March-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Neuro",
      paymentType: "Cash",
      AmountRecieved: "8000",
    },
    {
      consultationDate: "18-August-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Neuro",
      paymentType: "Cash",
      AmountRecieved: "8000",
    },
    {
      consultationDate: "30-March-2024",
      hospital: "Dr.Karunakaran S Spine center",
      doctorName: "Dr. Karunakaran",
      treatmentType: "Physio",
      paymentType: "Cash",
      AmountRecieved: "8000",
    },
  ];

  const filteredContent = tableContent.filter((item) => {
    const isTreatmentMatch =
      selectTreatment === "All" ||
      (selectTreatment &&
        item.treatmentType?.toLowerCase() === selectTreatment.toLowerCase());

    const isDateInRange =
      startDate && toDate
        ? new Date(item.consultationDate) >= startDate &&
          new Date(item.consultationDate) <= toDate
        : true;
    const isUserMatch = selectedUser ? item.doctorName === selectedUser : true;
    const isPaymentTypeMatch =
      selectedPaymentType === "All" ||
      (selectedPaymentType &&
        item.paymentType?.toLowerCase() === selectedPaymentType.toLowerCase());

    return (
      isTreatmentMatch && isDateInRange && isUserMatch && isPaymentTypeMatch
    );
  });

  const lastItem = itemsPerPage * pageCount;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = filteredContent.slice(firstItem, lastItem);
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

  useEffect(() => {
    handlePageCount(totalPages);
  }, [totalPages, handlePageCount]);

  useEffect(() => {
    const newTotalAmount = currentItems.reduce((accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue.AmountRecieved);
    }, 0);

    setTotalAmount(newTotalAmount);
    const sendData = () => {
      handleDataFromfeetable(newTotalAmount);
    };

    sendData();
  }, [tableContent, handleDataFromfeetable]);

  return (
    <div>
      <div ref={tableRef}>
        <Table responsive>
          <thead className="doctorfeetable-head-container">
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
            {currentItems.map((element) => {
              return (
                <tr className="doctorfeetable-body-row-container">
                  {Object.keys(element).map((rowData, cellIndex) => {
                    return (
                      <td className="patienttable-body-row" key={cellIndex}>
                        {cellIndex < Object.keys(element).length - 1 ? (
                          <>
                            {element[rowData]}
                            <div className="clinicstable-header-div"></div>
                          </>
                        ) : (
                          <div style={{ color: "red", fontWeight: "500" }}>
                            {element[rowData]}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end">
          <p className="docfee-total-amount-div">INR : {totalData}</p>
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-end"
        style={{ marginTop: "10px" }}
      >
        <p className="mb-0" style={{ color: "gray" }}>
          {" "}
          Detailed Cash Recieved
        </p>
        <DownloadTableExcel
          filename="users table"
          sheet="users"
          currentTableRef={tableRef.current}
        >
          <button className="invoice-export-button">Export To Excel</button>
        </DownloadTableExcel>
      </div>
    </div>
  );
};

export default DoctorFeeTable;

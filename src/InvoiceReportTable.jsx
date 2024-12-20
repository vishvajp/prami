import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
const InvoiceReportTable = () => {
  const converter = require("number-to-words");
  const [amountInWords, setAmountInWords] = useState();
  const [amount, setAmount] = useState();
  const tableHeader = [
    {
      name: "S.No",
    },
    {
      name: "Particular",
    },
    {
      name: "Quantity",
    },
    {
      name: "Amount(Rs)",
    },

    {
      name: "Unit Price",
    },
  ];

  const tableContent = [
    {
      sno: "1",
      Particular: "Consulatation Fee",
      Mode: "1",
      amountRs: "500.00",
      unitPrice: "250.00",
    },
  ];

  useEffect(() => {
    const amountData = tableContent[0].amountRs;
    const amountInWordsData = converter.toWords(Number(amountData));
    setAmount(amountData);
    setAmountInWords(amountInWordsData);
  }, []);
  return (
    <div>
      <Table responsive>
        <thead
          className="patienttable-head-container"
          style={{ borderColor: "#bebebe" }}
        >
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
              <tr
                className="patienttable-body-row-container"
                style={{ borderColor: "#bebebe" }}
              >
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
      <div>
        <p className="mb-0 text-end">
          <b>Paid Amount (Rupees {amountInWords} only)</b>
          <span>
            {" "}
            <b>{amount}</b>
          </span>
        </p>
        <p className="mb-0">
          Received with thanks <b>Rs {amount}</b> from Mr.KARAN
        </p>
        <p className="text-end">Authorized Signature</p>
      </div>
    </div>
  );
};

export default InvoiceReportTable;

import React from 'react'
import Table from "react-bootstrap/Table";
import "./InvoiceTable.css"

const InvoiceTable = () => {
    const tableHeader = [
        {
          name: "Date    ",
        },
        {
          name: "Patient Name",
        },
        {
          name: "Treated Doctor",
        },
        {
          name: "Treatement Name",
        },
        {
          name: "Payment Type",
        },
        {
          name: "Invoice Amount",
        },
        {
            name: "Receipt Amount",
          },
          {
            name: "Balance Outstanding",
          },
          {
            name: "Invoice No",
          },
          {
            name: "Discount Cost",
          },
          {
            name: "Qty",
          },
          {
            name: "Created By",
          },
          {
            name: "Created On",
          },
          
          {
            name: "Updated On",
          },
      ];
    
      const tableContent = [
        {
          date: "23-03-24",
          patientName: "M. Raja",
         treatedDoctor: "S.Karunakaran",
          treatmentName: "Surgeon",
          paymentType: "Cash",
          invoiceAmount: "Rs. 8000",
          receiptAmount: "Rs. 8000",
          balanceOutstanding: "-",
          invoiceNo: "002",
          discountCost: "1800",
          qty: "1",
          createdBy: "-",
          createdOn: "-",
          updatedOn: "-",

        },
        {
            date: "23-03-24",
            patientName: "M. Raja",
           treatedDoctor: "S.Karunakaran",
            treatmentName: "Surgeon",
            paymentType: "Cash",
            invoiceAmount: "Rs. 8000",
            receiptAmount: "Rs. 8000",
            balanceOutstanding: "-",
            invoiceNo: "002",
            discountCost: "1800",
            qty: "1",
            createdBy: "-",
            createdOn: "-",
            updatedOn: "-",
  
          },
          {
            date: "23-03-24",
            patientName: "M. Raja",
           treatedDoctor: "S.Karunakaran",
            treatmentName: "Surgeon",
            paymentType: "Cash",
            invoiceAmount: "Rs. 8000",
            receiptAmount: "Rs. 8000",
            balanceOutstanding: "-",
            invoiceNo: "002",
            discountCost: "1800",
            qty: "1",
            createdBy: "-",
            createdOn: "-",
            updatedOn: "-",
  
          },
          {
            date: "23-03-24",
            patientName: "M. Raja",
           treatedDoctor: "S.Karunakaran",
            treatmentName: "Surgeon",
            paymentType: "Cash",
            invoiceAmount: "Rs. 8000",
            receiptAmount: "Rs. 8000",
            balanceOutstanding: "-",
            invoiceNo: "002",
            discountCost: "1800",
            qty: "1",
            createdBy: "-",
            createdOn: "-",
            updatedOn: "-",
  
          },
        
         
      ];
    
  return (
    <Table responsive style={{width:"140%"}}>
    <thead className="invoice-table-header-row-container">
      <tr>
        {[...tableHeader].map((ele, index) => (
        <th className="patienttable-header-col" key={index}>
        {ele.name}
        {index < tableHeader.length - 1 && (
          <>
            <div className="invoicetable-header-div"></div>
          </>
        )}
      </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableContent.map((element) => {
        return (
          <tr className="invoice-table-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
           
              return (
                <td className="patienttable-body-row" key={cellIndex}>
                {cellIndex < Object.keys(element).length - 1 ? (
                  <>
                    {element[rowData]}
                    <div className="invoicetable-header-div"></div>
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

export default InvoiceTable
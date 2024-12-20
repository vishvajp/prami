import { useState } from "react";
import React from 'react'
import Table from "react-bootstrap/Table";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const ExpenseDetailTable = () => {
    const [startDate, setStartDate] = useState();
    const [toDate, setToDate] = useState();
    const [totalPageCount, setTotalPageCount] = useState(null);
  const [pageCount, setPageCount] = useState(1);


    const CustomInput = ({ value, onClick }) => (
        <button className="appintment-date-input" onClick={onClick}>
          {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
        </button>
      );

    const tableHeader = [
        {
          name: "Date",
        },
        {
          name: "Method Of Payment",
        },
        {
            name:"Paid To"
        },
      
        {
            name:"Item"
        },
        {
            name:"Amount Paid"
        },
        {
            name:"Balance To Pay"
        },
        {
            name:"Total Amount"
        },
      
      ];

      const tableContent = [
        {
           Date: "10-23-2024",
           MethodOfPayment: "Cash",
       PaidTo:"Counter",
       Item:"Water",
       AmountPaid:"500",
        BalanceToPay:"0",
        TotalAmount:"500"
   
        },
        {
            Date: "10-25-2024",
            MethodOfPayment: "Cash",
        PaidTo:"Counter",
        Item:"Water",
        AmountPaid:"500",
         BalanceToPay:"0",
        TotalAmount:"500"
    
         },
         {
            Date: "11-01-2024",
            MethodOfPayment: "Cash",
        PaidTo:"Counter",
        Item:"Water",
        AmountPaid:"500",
         BalanceToPay:"0",
        TotalAmount:"500"
    
         },
         {
            Date: "10-28-2024",
            MethodOfPayment: "Cash",
        PaidTo:"Counter",
        Item:"Water",
        AmountPaid:"500",
         BalanceToPay:"0",
        TotalAmount:"500"
    
         },
         {
            Date: "10-30-2024",
            MethodOfPayment: "Cash",
        PaidTo:"Counter",
        Item:"Water",
        AmountPaid:"500",
        BalanceToPay:"0",
        TotalAmount:"500"
    
         },
      ];


      const filteredItem = tableContent.filter((item) => {
        const isDateInRange =
          startDate && toDate
            ? new Date(item.Date) >= startDate && new Date(item.Date) <= toDate
            : true;
            return isDateInRange 
      }
    )

    const increasePageCount = () => {
        if (pageCount < totalPageCount) {
          setPageCount(pageCount + 1);
        }
      };
    
      const decreasePageCount = () => {
        setPageCount(pageCount < 1 ? pageCount - 1 : 1);
      };
  return (
    <div>
        <div className="inventory-expense-detail-table-main-div">
        <div className='d-flex justify-content-end'>
            <button className='inventory-expense-table-excel-button'>Export To Excel</button>
        </div>
        <div className="d-flex justify-content-evenly">
        <div className='row mb-2 ms-2'>
            <div className='col'>
                <div className="d-flex gap-3">
                <div className='d-flex'>
                    <label className="inventory-label me-2">From</label>
                    <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            customInput={<CustomInput />}
          />
                </div>
                <div className='d-flex'>
                    <label className="inventory-label me-2">To</label>
                    <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            customInput={<CustomInput />}
          />
          </div>
                </div>
            </div>
            <div className='col'></div>
        </div>
        <div>
        <div className="d-flex align-items-center gap">
            <p
              className="mb-0 doctorfee-previous-text"
              onClick={decreasePageCount}
            >
              Previous
            </p>
            <p className="mb-0 doctorfee-1-text">{pageCount}</p>
            <p className="mb-0 doctorfee-next-text" onClick={increasePageCount}>
              Next
            </p>
          </div>
        </div>
        </div>
         <Table responsive>
    
    <thead className="patienttable-head-container">
      <tr>
        {tableHeader.map((ele, index) => (
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
      {filteredItem.map((element) => {
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
  <div>

  </div>
  </div>
  </div>
  )
}

export default ExpenseDetailTable
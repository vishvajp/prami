import React from "react";
import Table from "react-bootstrap/Table";
const InvoiceAddTab = ({addedItem}) => {


  const quantityValue = addedItem?.reduce((accum, item) => {
    return parseInt(item.quantity, 10) + accum;
  }, 0);

const costValue = addedItem?.reduce((accum, item) => {
    return parseInt(item.value, 10) + accum;
  }, 0);

  return (
    <div>
    {addedItem?.length > 0 && 
        <div>
      {" "}
      <Table responsive>
        <thead className="patienttable-head-container">
          <tr>
            {addedItem &&
              addedItem.length > 0 &&
              Object.keys(addedItem[0]).map((key, index) =>
                key !== "agency_name" &&
                key !== "agency_contactNo" &&
                key !== "gst_no" &&
                key !== "invoice_date" &&
                key !== "invoice_no" &&
                key !== "role" &&
                key !== "group" ? (
                  // Filter out unwanted columns
                  <th className="table-header-col" key={index}>
                    {key.replace(/_/g, " ").toUpperCase()}{" "}
                    {/* Capitalize key and replace underscores with spaces */}
                    {index < Object.keys(addedItem[0]).length-1 && (
                      <div className="table-header-div"></div>
                    )}
                  </th>
                ) : null
              )}
             
           
          </tr>
        </thead>
        <tbody>
          {addedItem.map((element) => {
            return (
              <tr className="patienttable-body-row-container">
                {Object.keys(element).map((rowData, cellIndex) => {
                  if (
                    rowData === "agency_name" ||
                    rowData === "agency_contactNo" ||
                    rowData === "gst_no" ||
                    rowData === "invoice_date" ||
                    rowData === "invoice_no" ||
                    rowData === "role" ||
                    rowData === "group"
                  ) {
                    return null;
                  }

                  return (
                    <td className="patienttable-body-row" key={cellIndex}>
                      {element[rowData]}
                      {cellIndex < Object.keys(element).length-1 && (
                        <div className="clinicstable-header-div"></div>
                      )}
                    </td>
                  );
                })}

               
              </tr>
            );
          })}
        </tbody>
      </Table>
      {addedItem.length > 0 && 
        <div className="d-flex justify-content-end gap-4 mb-3">
        <div className="d-flex align-items-center">
            <label className="invoice-reg-value">
                Total Quantity
            </label>
            <span className="invoice-reg-total">{quantityValue}</span>
        </div>
        <div className="d-flex align-items-center">
            <label className="invoice-reg-value">Total value</label>
            <span className="invoice-reg-total">{costValue}</span>
        </div>
      </div>}

    </div>
     }
    </div>
  );
};

export default InvoiceAddTab;

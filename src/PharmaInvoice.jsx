import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

const PharmaInvoice = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState();
  const [toDate, setToDate] = useState();
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/home/pharmacy/invoiceregistration");
  };

  const handleEdit = (specAgency) => {
    // console.log(specAgency)
    navigate("/home/invoice/edit", { state: specAgency });
  };
  const tableContent = [
    {
      agency_name: "Madurai ",
      agency_contactNo: "7794556221",
      product_name: "paracetomol",
      exp_date: "30 Jan 2025",
      invoice_date: "01/15/2025",
      invoice_no: "8596",
      batch: "2",
      hsn: "5",
      free: "10",
      quantity: "50",
      rate: "25",
      discount: "45",
      mrp: "15",
      gst: "18%",
      gst_no: "5466556",
      value: "500",
    },
    {
      agency_name: "Kovai ",
      agency_contactNo: "7794556221",
      product_name: "paracetomol",
      exp_date: "30 Jan 2025",
      invoice_date: "01/20/2025",
      invoice_no: "8596",
      batch: "2",
      hsn: "5",
      free: "10",
      quantity: "50",
      rate: "25",
      discount: "45",
      mrp: "15",
      gst: "18%",
      gst_no: "5466556",
      value: "500",
    },
    {
      agency_name: "Chennai pharmacy ",
      agency_contactNo: "7794556221",
      product_name: "paracetomol",
      exp_date: "30 Jan 2025",
      invoice_date: "01/20/2025",
      invoice_no: "8596",
      batch: "2",
      hsn: "5",
      free: "10",
      quantity: "50",
      rate: "25",
      discount: "45",
      mrp: "15",
      gst: "18%",
      gst_no: "5466556",
      value: "500",
    },
    {
      agency_name: "Chennai pharmacy ",
      agency_contactNo: "7794556221",
      product_name: "paracetomol",
      exp_date: "30 Jan 2025",
      invoice_date: "01/23/2025",
      invoice_no: "8596",
      batch: "2",
      hsn: "5",
      free: "10",
      quantity: "50",
      rate: "25",
      discount: "45",
      mrp: "15",
      gst: "18%",
      gst_no: "5466556",
      value: "500",
    },
    {
      agency_name: "Kovai ",
      agency_contactNo: "7794556221",
      product_name: "paracetomol",
      exp_date: "30 Jan 2025",
      invoice_date: "01/20/2025",
      invoice_no: "8596",
      batch: "2",
      hsn: "5",
      free: "10",
      quantity: "50",
      rate: "25",
      discount: "45",
      mrp: "15",
      gst: "18%",
      gst_no: "5466556",
      value: "500",
    },
    {
      agency_name: "Kovai ",
      agency_contactNo: "7794556221",
      product_name: "calpal",
      exp_date: "30 Jan 2025",
      invoice_date: "01/20/2025",
      invoice_no: "8596",
      batch: "2",
      hsn: "5",
      free: "10",
      quantity: "50",
      rate: "25",
      discount: "45",
      mrp: "15",
      gst: "18%",
      gst_no: "5466556",
      value: "500",
    },
  ];

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate = value
      ? format(new Date(value), "dd/MM/yyyy")
      : "DD/MM/YYYY";

    return (
      <button
        ref={ref}
        type="button"
        className="pharma-invoice-from-to-date"
        onClick={onClick}
      >
        {formattedDate} <FaCalendarAlt className="homepage-date-icon" />
      </button>
    );
  });

  const filteredItem = tableContent?.filter((data) => {
    const searchData = searchTerm
      ? data.agency_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.product_name?.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    // const searchProduct = searchTerm
    // ? data.product_name?.toLowerCase().includes(searchTerm.toLowerCase())
    // : true;

    const isDateInRange =
      startDate && toDate
        ? new Date(data.invoice_date) >= startDate &&
          new Date(data.invoice_date) <= toDate
        : true;

    //   const searchCLinic = docSearch
    //   ? data.Clinic?.toLowerCase().includes(docSearch.toLowerCase())
    //   : true;
    return searchData && isDateInRange;
  });

  const quantityValue = filteredItem?.reduce((accum, item) => {
    return parseInt(item.quantity, 10) + accum;
  }, 0);

  const costValue = filteredItem?.reduce((accum, item) => {
    return parseInt(item.value, 10) + accum;
  }, 0);

  const RefreshIcons = ({ user }) => {
    return (
      <div className="refresh-icons-container justify-content-center">
        <div>
          <FaTrash className="clinicstable-trash-icon" />{" "}
          <BiEdit
            onClick={() => handleEdit(user)}
            className="clinicstable-Edit-icon"
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>
        <p className="pharmacy-1stdiv-text">Pharmacy Invoice</p>

        <div className="pharmacy-1st-div row">
          <div className="col-3 d-flex align-items-center">
            <input
              type="search"
              className="pharmacy-1st-search-input-div p-2"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search by agency name"
            ></input>
          </div>

          <div className="d-flex flex-column col-2 ">
            <label className="docdetail-input-label" for="Education">
              From
            </label>

            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              customInput={<CustomInput />}
            />
          </div>
          <div className="d-flex flex-column col-2 ">
            <label className="dashboard-input-label ms-3">To</label>
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              customInput={<CustomInput />}
            />
          </div>
          <div className="col-3">
            <div className="d-flex pharma-invoice-total flex-column me-0">
              <div className="row">
                <div className="col-7">
                  <p className="mb-0  text-white text-end">Total Quantity: </p>
                </div>
                <div className="col">
                  <span style={{ color: "yellow" }}> {quantityValue}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <p className="mb-0  text-white text-end">Total Value: </p>
                </div>
                <div className="col">
                  <span style={{ color: "yellow" }}>(₹) {costValue}</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-2 d-flex align-items-center">
            <button
              onClick={handleAdd}
              className="pharmacy-add-pharmacy-button"
            >
              ADD INVOICE
            </button>
          </div>
        </div>
        <div className="pharmacy-table-div">
          <Table responsive>
            <thead>
              <tr>
                {filteredItem &&
                  filteredItem.length > 0 &&
                  Object.keys(filteredItem[0]).map((key, index) =>
                    key !== "clinic_id" &&
                    key !== "doc_dob" &&
                    key !== "doc_experience" &&
                    key !== "doc_group" &&
                    key !== "doc_fee" &&
                    key !== "doc_achievement" &&
                    key !== "doc_education" ? (
                      // Filter out unwanted columns
                      <th className="table-header-col" key={index}>
                        {key.replace(/_/g, " ").toUpperCase()}{" "}
                        {/* Capitalize key and replace underscores with spaces */}
                        {index < Object.keys(filteredItem[0]).length && (
                          <div className="table-header-div"></div>
                        )}
                      </th>
                    ) : null
                  )}
                <th className="table-header-col" key="refresh">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItem?.map((element, rowIndex) => {
                return (
                  <tr className="patienttable-body-row-container">
                    {Object.keys(element).map((rowData, cellIndex) => {
                      if (
                        rowData === "clinic_id" ||
                        rowData === "doc_dob" ||
                        rowData === "doc_experience" ||
                        rowData === "doc_group" ||
                        rowData === "doc_fee" ||
                        rowData === "doc_achievement" ||
                        rowData === "doc_education"
                      ) {
                        return null;
                      }

                      return (
                        <td className="patienttable-body-row" key={cellIndex}>
                          {element[rowData]}
                          {cellIndex < Object.keys(element).length && (
                            <div className="clinicstable-header-div"></div>
                          )}
                        </td>
                      );
                    })}

                    <td className="patienttable-body-row" key="refresh-icon">
                      <RefreshIcons user={element} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PharmaInvoice;

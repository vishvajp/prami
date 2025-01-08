import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const InoviceEdit = () => {
  const location = useLocation();
  const specAgency = location.state;
  const navigate = useNavigate();
  console.log(specAgency);
  const [invoiceDate, setInvoiceDate] = useState("");

  const [inReg, setInReg] = useState({
    agency_name: "",
    agency_contactNo: "", // Corrected key
    gst_no: "",
    invoice_no: "",
    invoice_date: "",
    batch: "",
    hsn: "",
    exp_date: "",
    product_name: "",
    free: "",
    quantity: 0,
    rate: "",
    mrp: "",
    discount: "",
    gst: "",
    value: 0,
  });

  useEffect(() => {
    if (specAgency) {
      setInReg({
        agency_name: specAgency.agency_name,
        agency_contactNo: specAgency.agency_contactNo,
        gst_no: specAgency.gst_no,
        invoice_no: specAgency.invoice_no,
        invoice_date: specAgency.invoice_date,
        batch: specAgency.batch,
        hsn: specAgency.hsn ,
        exp_date:specAgency.exp_date,
        product_name: specAgency.product_name,
        free:specAgency.free,
        quantity: specAgency.quantity,
        rate:specAgency.rate,
        mrp:specAgency.mrp,
        discount:specAgency.discount,
        gst:specAgency.gst,
        value:specAgency.value,
      });
    }
  }, [specAgency]);

  console.log(inReg.invoice_date);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInReg((prevData) => ({ ...prevData, [name]: value }));
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate = value
      ? format(new Date(value), "dd/MM/yyyy")
      : "DD/MM/YYYY";

    return (
      <button
        ref={ref}
        type="button"
        className="patientBooking-date-input"
        onClick={onClick}
      >
        {formattedDate} <FaCalendarAlt className="homepage-date-icon" />
      </button>
    );
  });

  const handleInDateChange = (date) => {
    const selectedDate = new Date(date);

    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    // Generate slots for the selected date
    setInReg((prevFormData) => ({
      ...prevFormData,
      invoice_date: formatDate,
    }));
  };

  const handleExpDateChange = (date) => {
    const selectedDate = new Date(date);

    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    // Generate slots for the selected date
    setInReg((prevFormData) => ({
      ...prevFormData,
      exp_date: formatDate,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", inReg);
  };

  return (
    <div>
      <p className="clinecs-1stdiv-text">Invoice Registration</p>
      <form onSubmit={handleFormSubmit}>
        <div className="clinic-main-div bg p-3">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Agency Name</label>
                <input
                  className="labregistration-input"
                  name="agency_name"
                  onChange={handleInputChange}
                  value={inReg.agency_name}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Contact No</label>
                <input
                  className="labregistration-input"
                  name="agency_contactNo"
                  maxLength={10}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setInReg((prevData) => {
                      return { ...prevData, agency_contactNo: value };
                    });
                  }}
                  value={inReg.agency_contactNo}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Gst No</label>
                <input
                  className="labregistration-input"
                  name="gst_no"
                  onChange={handleInputChange}
                  value={inReg.gst_no}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Invoice No</label>
                <input
                  className="labregistration-input"
                  name="invoice_no"
                  onChange={handleInputChange}
                  value={inReg.invoice_no}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Invoice Date</label>
                <DatePicker
                  selected={inReg.invoice_date}
                  onChange={handleInDateChange}
                  customInput={<CustomInput />}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={80}
                  scrollableMonthYearDropdown
                />
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Batch</label>
                <input
                  className="labregistration-input"
                  name="batch"
                  onChange={handleInputChange}
                  value={inReg.batch}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">HSN</label>
                <input
                  className="labregistration-input"
                  name="product_Name"
                  onChange={handleInputChange}
                  value={inReg.hsn}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Exp Date</label>
                <DatePicker
                  selected={inReg.exp_date}
                  onChange={handleExpDateChange}
                  customInput={<CustomInput />}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={80}
                  scrollableMonthYearDropdown
                />
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Product Name</label>
                <input
                  className="labregistration-input"
                  name="product_Name"
                  onChange={handleInputChange}
                  value={inReg.product_name}
                ></input>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Free</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.free}
                  // required
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Qty</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.quantity}
                  // required
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Rate</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.rate}
                  // required
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">MRP</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.mrp}
                  // required
                ></input>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Discount</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.discount}
                  // required
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Gst</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.gst}
                  // required
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <label className="labregistration-label">Value</label>
                <input
                  className="labregistration-input"
                  name="invoice_amt"
                  onChange={handleInputChange}
                  value={inReg.value}
                  // required
                ></input>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <button
              type="button"
              className="medicalhistory-back-button"
              onClick={() => navigate("/home/pharmacy/invoice")}
            >
              CANCEL
            </button>
            <button type="submit" className="medicalhistory-nex-button">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InoviceEdit;

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const InvoiceMoreDet = () => {
    const location = useLocation()
    const specAgency = location.state
    const navigate = useNavigate()
    console.log(specAgency)
    const handleEdit=()=>{
        navigate('/home/invoice/edit', {state:specAgency})
    }
  return (
    <div><div className="doc-page-table">
    <div className="row">
          <div className="col d-flex justify-content-center me-1 mb-4">
            <span className="doctor-profile text-end">
        Invoice More Detail
            </span>
          </div>
        </div>
      <div className="row">
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Agency Name</label>
          <p className="medicalhistory-records-para">
            {specAgency.agency_name}
          </p>
        </div>
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Contact No</label>
          <p className="medicalhistory-records-para">
            {specAgency.agency_contactNo}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Gst No</label>
          <p className="medicalhistory-records-para">
            {specAgency.gst_no}
          </p>
        </div>
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Invoice No</label>
          <p className="medicalhistory-records-para">
            {specAgency.invoice_no}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Invoice Date</label>
          <p className="medicalhistory-records-para">
            {specAgency.invoice_date}
          </p>
        </div>
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Product Name</label>
          <p className="medicalhistory-records-para">
            {specAgency.product_Name}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Exp Date</label>
          <p className="medicalhistory-records-para">
            {specAgency.exp_date}
          </p>
        </div>
        <div className="d-flex flex-column col">
          <label className="medichistory-lable">Invoice Amount</label>
          <p className="medicalhistory-records-para">
            {specAgency.invoice_amt}
          </p>
        </div>
      </div>
     
      
      <div className="d-flex justify-content-center gap-2">
      <button
            className="medicalhistory-back-button"
            onClick={() => navigate("/home/pharmacy/invoice")}
          >CANCEL</button>
        <button
          className="medicalhistory-nex-button"
          onClick={() => handleEdit(specAgency)}
        >
          EDIT
        </button>
      </div>
    </div></div>
  )
}

export default InvoiceMoreDet
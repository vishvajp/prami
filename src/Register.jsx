import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicContact, setClinicContact] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [invoice, setInvoice] = useState("");
  //   const [visibleShow, setvisibleShow] = useState(false);
  const loginNavigate = useNavigate();

  const formData = {
    clinicName: clinicName,
    clinicAddress: clinicAddress,
    clinicContact: clinicContact,
    contactPerson: contactPerson,
    invoice: invoice,
  };

  //   console.log(formData);

  const [submitData, setSubmitData] = useState(null);

  const handleSubmit = async function (e) {
    try {
      setClinicName("");
      setClinicAddress("");
      setClinicContact("");
      setContactPerson("");
      setInvoice("");
      e.preventDefault();
      const response = await axios.post(
        "http://localhost/backend/prami_register.php",
        formData
      );
      if (response.status === 200) {
        loginNavigate("/");
        setSubmitData(response.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      className="wholelogin"
      style={{ backgroundImage: "url(/loginimages/bg.jpg)" }}
    >
      <img className="bukijpg" src="/loginimages/buki.png"></img>
      <img className="chapng" src="/loginimages/cha-1.png"></img>
      <img
        className="img-fluid registerimage mt-4"
        style={{ width: "400px", height: "180px" }}
        src="/loginimages/logo.jpg"
      ></img>
      <form className="registerform mt-4 ">
        <p className="user h4 py-1">Registeration Form</p>
        <div className="lineuser mt-3"></div>
        <div className="insideregister d-flex flex-column  ">
          <div className="form-group mt-2 d-flex">
            <label className="  ms-2 userlabelregister">Clinic Name *</label>
            <input
              className="w-100 rounded-5 py-2 inputuser"
              type="text"
              placeholder="name"
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group mt-3 d-flex">
            <label className="  ms-2 userlabelregister">Clinic Address *</label>
            <input
              className="w-100 rounded-5 inputuser py-2 "
              type="text"
              placeholder="address"
              value={clinicAddress}
              onChange={(e) => setClinicAddress(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group mt-3 d-flex">
            <label className="  ms-2 userlabelregister">Clinic Contact *</label>
            <input
              className="w-100 rounded-5 inputuser py-2 "
              type="text"
              placeholder="Contact"
              value={clinicContact}
              onChange={(e) => setClinicContact(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group mt-3 d-flex">
            <label className="  ms-2 userlabelregister">Contact Person *</label>
            <input
              className="w-100 rounded-5 inputuser py-2 "
              type="text"
              placeholder="person"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group mt-3 d-flex">
            <label className="  ms-2 userlabelregister">Invoice No *</label>
            <input
              className="w-100 rounded-5 inputuser py-2 "
              type="text"
              placeholder="invoice"
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
              required
            ></input>
          </div>
          <button
            className="btn w-100 rounded-5  text-white py-1  signinbutton"
            onClick={handleSubmit}
          >
            REGISTER
          </button>
          <p className="d-flex justify-content-center py-2 mb-0">
            If you have doubt contact{" "}
            <span className="ps-1 mobregister">
              <a className="mobregister" href="tel:+918220412157">
                Marketing team
              </a>
            </span>
          </p>
        </div>
      </form>

      <div className="emptydivregister mt-1 "></div>
      <div className="bottomdiv "></div>
    </div>
  );
};

export default Register;

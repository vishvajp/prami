import React, { useContext,useState,useEffect } from 'react';
import UserDataContext from "./Context/UserDataContext";
import { useLocation, useNavigate } from 'react-router-dom';

const ClinecEditPage = () => {
  const { selectedButton, setSelectedButton, selectedBtnName, setSelectedBtnName } = useContext(UserDataContext);
  const location = useLocation();
  const singleClinic = location.state.game;

  console.log(singleClinic); 

  const [clinicDetails, setclinicDetails] = useState({
    name: '',
    reg_No: '',
    hospital: '',
    reg_Address: '',
    mobile: '',
    marital_status: '',
    contactPerson: ''
});

const navigate = useNavigate()


useEffect(() => {
    if (singleClinic) {
        setclinicDetails({
            name: singleClinic.doctorName,
            reg_No: singleClinic.registrationNumber,
            hospital: singleClinic.hospital,
            reg_Address: singleClinic.location,
            mobile: singleClinic.contactNumber,
            marital_status: singleClinic.marital_status,
            contactPerson: singleClinic.contactPerson
        });
    }
}, [singleClinic]);



const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setclinicDetails((prevData)=>({...prevData, [name]: value}));
    

}


  return (
    <div>
      <div className="doc-page-table">
                <div className='d-flex flex-column gap-3'>
                <div className="row">
                    <div className="col d-flex justify-content-center me-1 mb-4">
                        <span className="doctor-profile text-end">
                            Registration More Detail
                        </span>
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Doctor Name</label>
                        <input
                            name="name"
                            value={clinicDetails.name}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Registration Number</label>
                        <input
                            name="reg_No"
                            value={clinicDetails.reg_No}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Hosiptal</label>
                        <input
                            name="hospital"
                            value={clinicDetails.hospital}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Address</label>
                        <input
                            name="reg_Address"
                            value={clinicDetails.reg_Address}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Mobile No</label>
                        <input
                            name="mobile"
                            value={clinicDetails.mobile}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">contactPerson</label>
                        <input
                            name="mobile"
                            value={clinicDetails.contactPerson}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Pincode</label>
                        <p className='medicalhistory-records-para'>-</p>
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Registration Date</label>
                        <input
                            name="marital_status"
                            value={clinicDetails.marital_status}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Practising Licence Number</label>
                        <input
                            name="reg_Date"
                            value={clinicDetails.reg_Date}
                            onChange={handleInputChange}
                            className='medicalhistory-records-para'
                        />
                    </div>
                    <div className="d-flex flex-column col">
                        <label className="medichistory-lable">Enter TIN Number</label>
                        <p className='medicalhistory-records-para'>-</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center gap-3'>
                    <button className='medicalhistory-back-button' onClick={()=>navigate("/home/admin/adminsetting")}>CANCEL</button>
                    <button className='medicalhistory-nex-button '>UPDATE</button>
                </div>
                </div>
            </div>
    </div>
  );
};

export default ClinecEditPage;

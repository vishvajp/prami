import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RegistrationMoreDet = () => {
    const navToRegistrationEdit = useNavigate()
  const location = useLocation();
  const singlePatient = location.state;

const singleData = singlePatient.element
console.log(singlePatient,"data",singleData);

  const handleNavToRegistrationEdit = ()=>{
    console.log("game")
navToRegistrationEdit("/home/register/edit",{state:{singleData}})
  }
  return (
    <div>
      <div className="doc-page-table">
        <div className="row">
            <div className="col d-flex justify-content-end"> <span className="doctor-profile text-end" >Registration More Detail</span></div>
            <div className="col text-end"> <button onClick={handleNavToRegistrationEdit} className="profile-edit-button me-4">Edit</button></div>
           
        </div>
      < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
           Patient Name
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.name}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                Registration Number
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.reg_No}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                 DOB or Age
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.age}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                 Address
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.reg_Address}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
               City
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.reg_city}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
               State
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.reg_state}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Country
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.reg_country}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                 Pincode
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.pincode}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col-6">
        <lable className="medichistory-lable">
                  {" "}
                 Landmark
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.landmark}</p>
        </div>
         
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Mobile No
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.mobile}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
              Email
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.email}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Occupation
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.occupation}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
               Marital Status
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.marital_status}</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                 Registration Date
                </lable>
                <p className='medicalhistory-records-para'>{singlePatient.element.reg_Date}</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                  Insurance
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>   
        </div> 
      </div>
    </div>
  );
};

export default RegistrationMoreDet;

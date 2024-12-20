import React,{ useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EmployeeEdit = () => {
    const location = useLocation();
  const singleEmp = location.state.game;
  const navigate = useNavigate()

console.log(singleEmp)
  const [singleEmpDetails, setSingleEmpDetails] = useState({
    name: '',
    dateOfJoin: '',
    mobileno: '',
    dob: '',
    role: '',
    group: '',
    experience: '',
    salary:""
});



useEffect(() => {
    if (singleEmp) {
        setSingleEmpDetails({
            name: singleEmp.name,
            dateOfJoin: singleEmp.dateOfJoin,
            mobileno: singleEmp.mobileno,
            dob: singleEmp.dob,
            role: singleEmp.role,
            group: singleEmp.group,
            experience: singleEmp.experience,
            salary:singleEmp.salary
        });
    }
}, [singleEmp]);

const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setSingleEmpDetails((prevData)=>({...prevData, [name]: value}));
    

}
  return (
    <div>  <div className="doc-page-table">
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
            <label className="medichistory-lable">Employee Name</label>
            <input
                name="name"
                value={singleEmpDetails.name}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Date Of Join</label>
            <input
            type='date'
                name="dateOfJoin"
                value={singleEmpDetails.dateOfJoin}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Contact Number</label>
            <input
                name="mobileno"
                value={singleEmpDetails.mobileno}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Date Of Birth</label>
            <input
            type='date'
                name="dob"
                value={singleEmpDetails.dob}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Role</label>
            <input
                name="role"
                value={singleEmpDetails.role}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Group</label>
            <input
                name="group"
                value={singleEmpDetails.group}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
    <div className='row'>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Experience</label>
            <input
                name="experience"
                value={singleEmpDetails.experience}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Salary</label>
            <input
                name="salary"
                value={singleEmpDetails.salary}
                onChange={handleInputChange}
                className='medicalhistory-records-para'
            />
        </div>
    </div>
   
    <div className='d-flex justify-content-center gap-3'>
        <button className='medicalhistory-back-button' onClick={()=>navigate("/home/employee")} >CANCEL</button>
        <button className='medicalhistory-nex-button '>UPDATE</button>
    </div>
    </div>
</div></div>
  )
}

export default EmployeeEdit
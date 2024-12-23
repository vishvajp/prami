import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PhysioMoreDet = () => {
    const location = useLocation()
    const { state } = location
    const navigate = useNavigate()
    // console.log(state)
    const singlePhysio = state.doc

    const handleEdit = ()=>{
        navigate('/home/physiotheray/edit', {state: singlePhysio})
    }
  return (
    <div>
         <div className="doc-page-table">
      <div className="row">
            <div className="col d-flex justify-content-center me-1 mb-4">
              <span className="doctor-profile text-end">
         Physio More Detail
              </span>
            </div>
          </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Name</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_name}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Clinic </label>
            <p className="medicalhistory-records-para">
              {singlePhysio.Clinic}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Mobile</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_mobile}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Email</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_email}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable"> Address</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_address}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Date Of Birth</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_dob}
            </p>
          </div>
        </div>
        <div className="row">
        <div className="d-flex flex-column col">
            <label className="medichistory-lable">Gender</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_gender}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Education</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_education}
            </p>
          </div>
         
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Experience</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_experience}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Physio Id</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_id}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Joined Date</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.date_of_joining}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Registration No</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_reg_no}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Specialist</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_specialist}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Fee</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_fee}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Acheievements</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_achievement}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <label className="medichistory-lable">Group</label>
            <p className="medicalhistory-records-para">
              {singlePhysio.physio_group}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2">
        <button
              className="medicalhistory-back-button"
              onClick={() => navigate("/home/admin/adminsetting")}
            >CANCEL</button>
          <button
            className="medicalhistory-nex-button"
            onClick={() => handleEdit(singlePhysio)}
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhysioMoreDet
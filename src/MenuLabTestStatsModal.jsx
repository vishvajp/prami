
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MdCancel } from "react-icons/md";
import "./MenuLabStatsModal.css"

const MenuLabTestStatsModal = ( {isModalOpen,showModal,setIsModalOpen}) => {
    
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>

    
    <Modal className='menulabstatsmodal-modal'  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='menulabstatsmodal-cancel-icon-div' onClick={handleCancel}><MdCancel className='menulabstatsmodal-cancel-icon'/></div>
     <div className='d-flex flex-column gap-3'>
      <div className='d-flex flex-column'>
        <lable className="menulabstatsmodal-modal-label">Lab Categories</lable>
        <input className='menulabstatsmodal-input' type='text'></input>
      </div>
      <div className='d-flex flex-column'>
        <lable className="menulabstatsmodal-modal-label">Test Name</lable>
        <input className='menulabstatsmodal-input' type='text'></input>
      </div>
      <div className='d-flex flex-column'>
        <lable className="menulabstatsmodal-modal-label">Test Price</lable>
        <input className='menulabstatsmodal-input' type='text'></input>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='menulabstatsmodal-update-button'>UPDATE</button>
      </div>
     </div>
    </Modal>
  </>
  )
}

export default MenuLabTestStatsModal
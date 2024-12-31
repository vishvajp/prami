import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import "./MenuLabStatsModal.css";

const MenuLabTestStatsModal = ({
  isModalOpen,
  showModal,
  setIsModalOpen,
  specUser,
}) => {

const [EditData, setEditData] = useState({
    lab_Categorie: "",
    test_Name: "",
    test_Price: "",
})

useEffect(()=>{
  if(specUser){
    setEditData({
      lab_Categorie: specUser.lab_Categorie,
      test_Name: specUser.test_Name,
      test_Price: specUser.test_Price,
    })
  }
},specUser)


  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...EditData,
      [name]: value,
    });
  }
  return (
    <>
      <Modal
        className="menulabstatsmodal-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          className="menulabstatsmodal-cancel-icon-div"
          onClick={handleCancel}
        >
          <MdCancel className="menulabstatsmodal-cancel-icon" />
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">
              Lab Categories
            </lable>
            <input className="menulabstatsmodal-input" type="text" name="lab_Categorie" value={EditData.lab_Categorie} onChange={handleInputChange} >

            </input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Test Name</lable>
            <input className="menulabstatsmodal-input" type="text" name="test_Name" value={EditData.test_Name} onChange={handleInputChange} >

            </input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Test Price</lable>
            <input className="menulabstatsmodal-input" type="text" name="test_Price" value={EditData.test_Price} onChange={handleInputChange} >
             
            </input>
          </div>
          <div className="d-flex justify-content-center">
            <button className="menulabstatsmodal-update-button">UPDATE</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MenuLabTestStatsModal;

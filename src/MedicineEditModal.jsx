import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
const MedicineEditModal = ({
  isModalOpen,
  showModal,
  setIsModalOpen,
  specUser,
}) => {
  const [EditData, setEditData] = useState({
    Medicine_Name: "",
    Generic_Name: "",
    Medicine_Type: "",
    Dosage: "",
  });

  useEffect(() => {
    if (specUser) {
      setEditData({
        Medicine_Name: specUser.Medicine_Name,
        Generic_Name: specUser.Generic_Name,
        Medicine_Type: specUser.Medicine_Type,
        Dosage: specUser.Dosage,
      });
    }
  }, specUser);

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
  };
  return (
    <div>
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
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="Medicine_Name"
              value={EditData.Medicine_Name}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Test Name</lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="Generic_Name"
              value={EditData.Generic_Name}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Medicine Type</lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="Medicine_Type"
              value={EditData.Medicine_Type}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Dosage</lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="Dosage"
              value={EditData.Dosage}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <button className="menulabstatsmodal-update-button">UPDATE</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MedicineEditModal;

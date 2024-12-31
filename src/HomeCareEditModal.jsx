import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
const HomeCareEditModal = ({
  isModalOpen,
  showModal,
  setIsModalOpen,
  specUser,
}) => {
  const [EditData, setEditData] = useState({
    Asset_Type: "",
    Asset_Price: "",
   
  });

  useEffect(() => {
    if (specUser) {
      setEditData({
        Asset_Type: specUser.Asset_Type,
        Asset_Price: specUser.Asset_Price,
       
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
            <lable className="menulabstatsmodal-modal-label">Asset Type</lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="Asset_Type"
              value={EditData.Asset_Type}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Asset Price</lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="Asset_Price"
              value={EditData.Asset_Price}
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

export default HomeCareEditModal;

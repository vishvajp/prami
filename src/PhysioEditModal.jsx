import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
const PhysioEditModal = (
    {
        isModalOpen,
        showModal,
        setIsModalOpen,
        specUser,
      }
) => {
    const [EditData, setEditData] = useState({
        asset_price: "",
        asset_type: "",
        homeCare_Physio: "",
      });
    
      useEffect(() => {
        if (specUser) {
          setEditData({
            asset_price: specUser.asset_price,
            asset_type: specUser.asset_type,
            homeCare_Physio: specUser.homeCare_Physio,
          
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
            Asset Type
            </lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="asset_type"
              value={EditData.asset_type}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">Asset Price</lable>
            <input
              className="menulabstatsmodal-input"
              type="text"
              name="asset_price"
              value={EditData.asset_price}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <lable className="menulabstatsmodal-modal-label">     Do you want to add this asset to the Homecare?</lable>
            <select
              className="menulabstatsmodal-input"
              type="text"
              name="homeCare_Physio"
              value={EditData.homeCare_Physio}
              onChange={handleInputChange}
            >
                <option>Select Options</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>
          
          <div className="d-flex justify-content-center">
            <button className="menulabstatsmodal-update-button">UPDATE</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PhysioEditModal
import "./SearchPatient.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";

import { FaPhoneAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const SearchPatient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal open={isModalOpen} onOk={handleOk} className="searchpatient-modal">
        <div>
          <div className="searchpatient-head d-flex justify-content-center">
            <p className="mb-0">Search Existing Patient</p>
          </div>
          <div className="searchpatient-center-div">
            <div className="d-flex flex-column justify-content-center">
              <label className="text-center searchpatient-label">
                MOBILE NUMBER
              </label>
              <div className="d-flex bg-white searchpatient-mobile-landline align-items-center ">
                <p className="searchpatient-mobile-text me-1 ">
                  <FaPhoneAlt />
                </p>

                <span className="searchpatient-mobile-91">+91</span>
                <input className="searchpatient-mobile-input" type="text" />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <label className="text-center searchpatient-label">
                LANDLINE NUMBER
              </label>
              <div className="d-flex bg-white searchpatient-mobile-landline align-items-center">
                <p className="searchpatient-mobile-text">
                  <GiRotaryPhone style={{ width: "20px", height: "20px" }} />
                </p>

                <span className="searchpatient-mobile-91">+91</span>
                <input className="searchpatient-mobile-input" type="text" />
              </div>
            </div>
          </div>
          <p className="searchpatient-dont text-center">Don't Know Number?</p>
          <div className="d-flex justify-content-center">
            <button onClick={handleCancel} className="searchpatient-cancel">Cancel</button>
            <button className="searchpatient-next">Next</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchPatient;

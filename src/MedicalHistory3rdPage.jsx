import React, { useContext } from "react";
import UserDataContext from "./Context/UserDataContext";
const MedicalHistory3rdPage = () => {
  const { mediFormData, setMediFormData, handleMediHisInputChange } =
    useContext(UserDataContext);
  return (
    <div className="mt-2">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column gap-5  medicalhistory-3rd-page-1st-col">
            <div className="d-flex justify-content-center">
              <span className="medicalhistory-3rd-page-title">CERVICAL</span>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Flexion
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select
                      className="medicalhistory-2nd-page-duration"
                      value={mediFormData.cervical_flexion_full}
                      onChange={handleMediHisInputChange}
                      name="cervical_flexion_full"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.cervical_flexion_pain}
                    onChange={handleMediHisInputChange}
                    name="cervical_flexion_pain"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Extension
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.cervical_extension_full}
                    onChange={handleMediHisInputChange}
                    name="cervical_extension_full"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.cervical_extension_pain}
                    onChange={handleMediHisInputChange}
                    name="cervical_extension_pain"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Rotation
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData. cervical_rotation_full}
                    onChange={handleMediHisInputChange}
                    name="cervical_rotation_full"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.cervical_rotation_pain}
                    onChange={handleMediHisInputChange}
                    name="cervical_rotation_pain"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Side Flexion
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.cervical_side_flex_full}
                    onChange={handleMediHisInputChange}
                    name="cervical_side_flex_full"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.cervical_side_flex_pain}
                    onChange={handleMediHisInputChange}
                    name="cervical_side_flex_pain"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="d-flex flex-column gap-5">
            <div className="d-flex justify-content-center">
              <span className="medicalhistory-3rd-page-title">
                LUMBO SACRAL
              </span>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Flexion
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_flexion_full}
                    onChange={handleMediHisInputChange}
                    name="lumbo_flexion_full"

                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_flexion_pain}
                    onChange={handleMediHisInputChange}
                    name="lumbo_flexion_painless"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Extension
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_extension_full}
                    onChange={handleMediHisInputChange}
                    name="lumbo_extension_full"

                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_extension_pain}

                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Rotation
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_rotation_full}
                    onChange={handleMediHisInputChange}
                    name="lumbo_rotation_full"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_rotation_pain}
                    name="lumbo_rotation_pain"
                    onChange={handleMediHisInputChange}

                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <span className="medicalhistory-3rd-page-1st-col-title">
                  Side Flexion
                </span>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "40px" }}
                    >
                      Full
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_side_flex_full}
                    name="lumbo_side_flex_full"
                    onChange={handleMediHisInputChange}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <lable
                      className="medicalhistory-3rd-page-label"
                      style={{ marginRight: "14px" }}
                    >
                      Painless
                    </lable>
                    <select className="medicalhistory-2nd-page-duration"
                    value={mediFormData.lumbo_side_flex_pain}
                    name="lumbo_side_flex_pain"
                    onChange={handleMediHisInputChange}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory3rdPage;

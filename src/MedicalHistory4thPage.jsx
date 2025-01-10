import React,{useContext} from "react";
import UserDataContext from "./Context/UserDataContext";
const MedicalHistory4thPage = () => {
  const { mediFormData, setMediFormData, handleMediHisInputChange } =
  useContext(UserDataContext);
  return (
    <div className="mt-2">
      <div className="d-flex flex-column mt-4">
        <label className="medichistory-lable">
          Able to stand on toes single leg
        </label>

        <textarea
          className="medicalhistroy-2nd-page-textarea"
          value={mediFormData.stand_toes_single}
          onChange={handleMediHisInputChange}
          name="stand_toes_single"
      
          rows="5"
          placeholder="Start typing..."
        ></textarea>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column mt-4">
            <label className="medichistory-lable">
              Able to walk on heel
            </label>

            <textarea
              className="medicalhistroy-2nd-page-textarea"
              value={mediFormData.walk_on_heel}
              onChange={handleMediHisInputChange}
              name="walk_on_heel"
              rows="5"
              placeholder="Start typing..."
            ></textarea>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column mb-3 mt-4">
              <label className="medichistory-lable">Right</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration"
                value={mediFormData.walk_on_heel_right}
                onChange={handleMediHisInputChange}
                name="walk_on_heel_right"
                >
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-column mb-3 mt-4">
              <label className="medichistory-lable">left</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration"
                value={mediFormData.walk_on_heel_left}
                onChange={handleMediHisInputChange}
                name="walk_on_heel_left"
                >
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column mt-4">
            <label className="medichistory-lable">
              Able to walk on toes
            </label>

            <textarea
              className="medicalhistroy-2nd-page-textarea"
              value={mediFormData.walk_on_toes}
              onChange={handleMediHisInputChange}
              name="walk_on_toes"
              rows="5"
              placeholder="Start typing..."
            ></textarea>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column mb-3 mt-4">
              <label className="medichistory-lable">Right</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration"
                value={mediFormData.walk_on_toes_right}
                onChange={handleMediHisInputChange}
                name="walk_on_toes_right"
                >
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-column mb-3 mt-4">
              <label className="medichistory-lable">left</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration"
                value={mediFormData.walk_on_toes_left}
                onChange={handleMediHisInputChange}
                name="walk_on_toes_left"
                >
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column mt-4">
            <label className="medichistory-lable">
              Sensation
            </label>

            <textarea
              className="medicalhistroy-2nd-page-textarea"
              value={mediFormData.sensation}
              onChange={handleMediHisInputChange}
              name="sensation"
              // value={value}
              // onInput={handleInput}
              // onKeyPress={handleKeyPress}
              rows="5"
              placeholder="Start typing..."
            ></textarea>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column mb-3 mt-4">
             
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration"
                value={mediFormData.sensation_type}
                onChange={handleMediHisInputChange}
                name="sensation_type"
                >
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory4thPage;

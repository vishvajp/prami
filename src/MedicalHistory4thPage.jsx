import React from "react";

const MedicalHistory4thPage = () => {
  return (
    <div>
      <div className="d-flex flex-column mt-4">
        <label className="medichistory-lable">
          Able to stand on toes single leg
        </label>

        <textarea
          className="medicalhistroy-2nd-page-textarea"
          // value={value}
          // onInput={handleInput}
          // onKeyPress={handleKeyPress}
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
              <label className="medichistory-lable">Right</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration">
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-column mb-3 mt-4">
              <label className="medichistory-lable">left</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration">
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
              <label className="medichistory-lable">Right</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration">
                  <option>Normal</option>
                  <option>Weak</option>
                  <option>Pain</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-column mb-3 mt-4">
              <label className="medichistory-lable">left</label>
              <div className="d-flex">
                <select className="medicalhistory-2nd-page-duration">
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
                <select className="medicalhistory-2nd-page-duration">
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

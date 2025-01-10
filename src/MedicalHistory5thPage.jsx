import React,{useContext} from "react";
import UserDataContext from "./Context/UserDataContext";
const MedicalHistory5thPage = () => {
  const { mediFormData, setMediFormData, handleMediHisInputChange } =
  useContext(UserDataContext);
  return (
    <div className="mt-2">
        <div className="d-flex flex-column gap-3">
      <div className="row">
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Power</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your power"
            name="power"
            value={mediFormData.power}
            onChange={handleMediHisInputChange}

       
          ></textarea>
        </div>
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Knee Jerk</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your knee jerk"
            name="knee_jerk"
            value={mediFormData.knee_jerk}
            onChange={handleMediHisInputChange}
       
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Tone</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your tone"
            name="tone"
            value={mediFormData.tone}
            onChange={handleMediHisInputChange}
        
          ></textarea>
        </div>
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Ankle Jerk</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your ankle jerk"
            name="ankle_jerk"
            value={mediFormData.ankle_jerk}
            onChange={handleMediHisInputChange}
         
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Reflexes</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your reflexes"
            name="reflexes"
            value={mediFormData.reflexes}
            onChange={handleMediHisInputChange}

      
          ></textarea>
        </div>
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Tibialis Posterior Reflex</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your tibialis posterior reflex"
            name="tibialis_posterior_reflex"
            value={mediFormData.tibialis_posterior_reflex}
            onChange={handleMediHisInputChange}
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Biceps Jerk</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your biceps jerk"
            name="biceps_jerk"
            value={mediFormData.biceps_jerk}
            onChange={handleMediHisInputChange}
          ></textarea>
        </div>
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">SLR</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your SLR"
            name="slr"
            value={mediFormData.sler}
            onChange={handleMediHisInputChange}
        
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Supinator Jerk</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your supinator jerk"
            name="supinator_jerk"
            value={mediFormData.supinator_jerk}
            onChange={handleMediHisInputChange}
       
          ></textarea>
        </div>
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Pheripheral Pulse</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your peripheral pulse"
            name="peripheral_pulse"
            value={mediFormData.peripheral_pulse}
            onChange={handleMediHisInputChange}
           
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Triceps Jerk</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your triceps jerk"
            name="triceps_jerk"
            value={mediFormData.triceps_jerk}
            onChange={handleMediHisInputChange}

         
          ></textarea>
        </div>
        <div className="col d-flex flex-column  ">
          <label className="medichistory-lable">Special Tests</label>
          <textarea
            className="medicalhistory-5th-page-textarea"
            placeholder="Enter your special tests"
            name="special_tests"
            value={mediFormData.special_tests}
            onChange={handleMediHisInputChange}

           
          ></textarea>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MedicalHistory5thPage;

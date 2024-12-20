import React, { useState } from "react";
import "./PatientTreatPage.css"
const PatientTreatpage = () => {
  const [labTitle, setLabTitle] = useState("Treatment Plan");

  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault(); // Prevent default line break
  //     const lines = value.split('\n').map(line => line.trim()).filter(line => line);
  //     const newLine = `${lines.length + 1}. `; // New numbered line
  //     setValue(prevValue => prevValue + '\n' + newLine);
  //   }
  // };

  // const formattedValue = value
  // .split('\n')
  // .map((line, index) => (line ? `${index + 1}. ${line.trim()}` : ''))
  // .join('\n');
  return (
    <div>  
      
      <div className="d-flex justify-content-center gap-2 medicinemaster-main-div-row">
    <span
      onClick={() => {
        setLabTitle("Treatment Plan");
      }}
      className="menu-lab-heading"
      style={{
        color: labTitle === "Treatment Plan" ? "white" : "black",
        backgroundColor:
          labTitle === "Treatment Plan" ? "Green" : "gainsboro",
      }}
    >
    Treatment Plan
    </span>
    <span
      onClick={() => {
        setLabTitle("Treatment Stats");
      }}
      className="menu-lab-heading"
      style={{
        color: labTitle === "Treatment Stats" ? "white" : "black",
        backgroundColor:
          labTitle === "Treatment Stats" ? "Green" : "gainsboro",
      }}
    >
    Treatment Stats
    </span>
  </div>
  {labTitle==="Treatment Plan" && 
    <div className="d-flex flex-column gap-4 medicinemaster-main-div-row">
    <div className="row mt-4">
   <div className="col-3 d-flex justify-content-end align-items-center">
     <label className="dashboard-input-label">Investigation</label>
   </div>
   <div className="col-9 d-flex align-items-center">
     <textarea className="patientTreat-page-textarea" 
      // value={value}
      // onInput={handleInput}
      // onKeyPress={handleKeyPress}
      rows="5"
      placeholder="Start typing..."></textarea>
   </div>
    </div>
    <div className="row">
   <div className="col-3 d-flex justify-content-end align-items-center">
     <label className="dashboard-input-label">Diagnosis</label>
   </div>
   <div className="col-9 d-flex align-items-center">
     <textarea   rows="5" className="patientTreat-page-textarea"></textarea>
   </div>
    </div>
    <div className="row">
   <div className="col-3 d-flex justify-content-end align-items-center">
     <label className="dashboard-input-label">Advice</label>
   </div>
   <div className="col-9 d-flex align-items-center">
     <textarea   rows="5" className="patientTreat-page-textarea"></textarea>
   </div>
    </div>
   <div className="d-flex justify-content-center">
     <button className="patienttreatpage-submit-button">SUBMIT</button>
   </div>
     </div>
  }
  {
    labTitle==="Treatment Stats" &&
    <div className="d-flex flex-column gap-4 medicinemaster-main-div-row">
    <div className="row mt-4">
   <div className="col-3 d-flex justify-content-end align-items-center">
     <label className="dashboard-input-label">Investigation</label>
   </div>
   <div className="col-9 d-flex align-items-center">
     <p className="patientTreat-page-para" 
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, cumque nobis excepturi sint eaque inventore, expedita velit natus nam ea quia molestias omnis quaerat fuga similique ab nisi a molestiae qui aperiam, dignissimos aliquid. Ipsam perspiciatis esse assumenda pariatur facilis fugiat unde dolorem magni labore mollitia, ab maiores ea quod praesentium incidunt saepe debitis illum officiis iusto quisquam, ex adipisci? Nihil earum sequi sint dolorem? Corporis vero quidem perspiciatis nam tenetur harum unde blanditiis? Quas provident ratione distinctio et dolorum cumque exercitationem odio dolore quibusdam quae, magnam dicta doloribus optio totam sequi est, praesentium, molestiae incidunt. Ratione odio aperiam impedit.</p>
   </div>
    </div>
    <div className="row">
   <div className="col-3 d-flex justify-content-end align-items-center">
     <label className="dashboard-input-label">Diagnosis</label>
   </div>
   <div className="col-9 d-flex align-items-center">
     <p className="patientTreat-page-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate dolore ipsam consequuntur voluptas modi sequi minima, odit, porro tenetur cumque, harum possimus. Quo ex iste excepturi asperiores soluta accusamus, debitis sapiente fugit. Est nam hic numquam nemo in eveniet maxime quos obcaecati illum suscipit tenetur libero inventore, esse dolorem?</p>
   </div>
    </div>
    <div className="row">
   <div className="col-3 d-flex justify-content-end align-items-center">
     <label className="dashboard-input-label">Advice</label>
   </div>
   <div className="col-9 d-flex align-items-center">
     <p className="patientTreat-page-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque iusto quas ratione veritatis sed, a tempora modi placeat ducimus minima impedit laboriosam inventore ipsum repellat provident mollitia? Voluptate, unde.</p>
   </div>
    </div>
   
     </div>
  }
  
  </div>
  )
}

export default PatientTreatpage
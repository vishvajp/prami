import React, { useState } from 'react'
import { FaWeightScale } from "react-icons/fa6";

const ParameterRecords = () => {
  const [recData, setRecData]=useState({
    bp_bef: 125,
      bp_after: 145,
      height: 185,
      weight: 63,
      temperature: 98.5,
      fasting_pp_bef: 78,
      fasting_pp_aft: 144,
      bmi:80,
      spo2: 52,
      pulse_rate: 68,
      sugar_random: 125,
      hba1c: 45,
      pefr: 78,
      res_rate: 12,
      liquid_profile: 63,
      total_cholesterol: 136,
      hdl: 15,
      serum_creatine: 14,
      tryglycerides: 96,
      ldl: 78,
      blood_group: 15,
      head_circumference: 45,
      waist_circumference: 60,
  })
  return (
     <div>
         <div className="medic-his-parent-div">
           <p className="mb-0 medic-parameter-text">Parameters</p>
   
           <div className="row parameter-1st-rwo">
             <div className="col  ">
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column me-2">
                   <label className="docdetail-input-label">BP (Mm/ Hg)</label>
                   <span
                     className="medic-parameter-double-input-parameter-record"
                   >{recData.bp_bef} 
                  </span>
                 </div>
                 <div className="d-flex align-items-end">
                 <span
                     className="medic-parameter-double-input-parameter-record"
                   >{recData.bp_after} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column me-2">
                   <label className="docdetail-input-label">Fasting & PP</label>
                   <span
                     className="medic-parameter-double-input-parameter-record"
                   >{recData.fasting_pp_bef} 
                  </span>
                 </div>
                 <div className="d-flex align-items-end">
                 <span
                     className="medic-parameter-double-input-parameter-record"
                   >{recData.fasting_pp_aft} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">Sugar Random</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.sugar_random} 
                  </span>
                 </div>
               </div>
             </div>
             <div className="col">
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">Height(cms)</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.height} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">BMI</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.bmi} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">HbA1c(%)</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.hba1c} 
                  </span>
                 </div>
               </div>
             </div>
   
             <div className="col">
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">Weight (Kgs)</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.weight} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">SPO2(%)</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.spo2} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">PEFR(L/min)</label>
                    <span
                     className="medic-parameter-single-input"
                   >{recData.pefr} 
                  </span>
                 </div>
               </div>
             </div>
             <div className="col">
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">Temperature</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.temperature} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Pulse Rate (Bpm)
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.pulse_rate} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-1col-container mt-3">
                 <div className="d-flex align-items-center m-2">
                   <FaWeightScale style={{ width: "30px", height: "30px" }} />
                 </div>
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Respiratory Rate (per Min)
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.res_rate} 
                  </span>
                 </div>
               </div>
             </div>
           </div>
   
           <div className="row parameter-2nd-row">
             <div className="col">
               <div className="d-flex medic-2col-container mt-3 ">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Lipid Profile (Mg/DL)
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.liquid_profile} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">Serum Creatine</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.serum_creatine} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">Blood Group</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.blood_group} 
                  </span>
                 </div>
               </div>
             </div>
             <div className="col">
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Total Cholesterol (Mg/DL)
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.total_cholesterol} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Triglycerides (Mg/DL)
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.tryglycerides} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Head Cirumference
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.head_circumference} 
                  </span>
                 </div>
               </div>
             </div>
             <div className="col">
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">HDL (Mg/DL)</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.bp_bef} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">LDL (Mg/Dl)</label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.ldl} 
                  </span>
                 </div>
               </div>
               <div className="d-flex medic-2col-container mt-3">
                 <div className="d-flex flex-column flex-column-div">
                   <label className="docdetail-input-label">
                     Waist Circumference (cm)
                   </label>
                   <span
                     className="medic-parameter-single-input"
                   >{recData.waist_circumference} 
                  </span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default ParameterRecords
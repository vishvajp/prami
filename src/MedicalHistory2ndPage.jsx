import React from 'react'

const MedicalHistory2ndPage = () => {
  return (
    <div> <div>
    <div className="row">
     <div className="col d-flex align-items-center">
       <div className="d-flex flex-column mb-3">
<label className="medichistory-lable">Duration</label>
<div className="d-flex">
<select className='medicalhistory-2nd-page-duration'>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
</select>
<select className='medicalhistory-2nd-page-duration'>
<option>Days</option>
<option>Weeks</option>
<option>Months</option>

<option>Years</option>
</select>
</div>
       </div>
       </div>
       <div className="col d-flex align-items-center mb-3">
       <div className="col d-flex flex-column">
           <label className="medichistory-lable">
             {" "}
    Bowel
           </label>
           <div className="d-flex">
             <div className=" d-flex align-items-center medicalhistory-yes-no-input">
               <input
                 className="medicalhistory-radio-input"
                 type="radio"
               ></input>
               <label>Yes</label>
             </div>
             <div className=" d-flex align-items-center medicalhistory-yes-no-input">
               <input
                 className="medicalhistory-radio-input"
                 type="radio"
               ></input>
               <label>No</label>
             </div>
           </div>
         </div>
       </div>
       </div>
       <div className="row">
       <div className="col d-flex align-items-center">
       <div className="d-flex flex-column mb-3">
<label className="medichistory-lable">Severe</label>
<div className="d-flex">
<select className='medicalhistory-2nd-page-duration'>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
</select>
<select className='medicalhistory-2nd-page-duration'>
<option>Days</option>
<option>Weeks</option>
<option>Months</option>

<option>Years</option>
</select>
</div>
       </div>
       </div>
       <div className="col d-flex align-items-center">
       <div className="col d-flex flex-column">
           <label className="medichistory-lable">
             {" "}
   Micturation
           </label>
           <div className="d-flex">
             <div className=" d-flex align-items-center medicalhistory-yes-no-input">
               <input
                 className="medicalhistory-radio-input"
                 type="radio"
               ></input>
               <label>Yes</label>
             </div>
             <div className=" d-flex align-items-center medicalhistory-yes-no-input">
               <input
                 className="medicalhistory-radio-input"
                 type="radio"
               ></input>
               <label>No</label>
             </div>
           </div>
         </div>
       </div>
       </div>
       <div className="d-flex flex-column mt-4">

<label className="medichistory-lable">How did the pain start?</label>


<textarea className="medicalhistroy-2nd-page-textarea" 
 // value={value}
 // onInput={handleInput}
 // onKeyPress={handleKeyPress}
 rows="5"
 placeholder="Start typing..."></textarea>

</div>
<div className="d-flex flex-column mt-4">

<label className="medichistory-lable">Aggravating</label>


<textarea className="medicalhistroy-2nd-page-textarea" 
// value={value}
// onInput={handleInput}
// onKeyPress={handleKeyPress}
rows="5"
placeholder="Start typing..."></textarea>

</div>
<div className="d-flex flex-column mt-4">

<label className="medichistory-lable">Relieving</label>


<textarea className="medicalhistroy-2nd-page-textarea" 
// value={value}
// onInput={handleInput}
// onKeyPress={handleKeyPress}
rows="5"
placeholder="Start typing..."></textarea>

</div>
     </div></div>
  )
}

export default MedicalHistory2ndPage
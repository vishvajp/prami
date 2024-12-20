import React from 'react'
import Table from "react-bootstrap/Table";
import "./MedicalHistoryRecords.css"
const MedicalHistoryRecords = () => {
  return (
    <div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Have you ever suffered from...?
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Have any of your first degree relatives experienced the following conditions?
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Have you had surgery in the last two years?
                </lable>
                <p className='medicalhistory-records-para'>hello</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Do you have any injuries?
                </lable>
                <p className='medicalhistory-records-para'>hello</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Do you take any ...?
                </lable>
                <p className='medicalhistory-records-para'>hello</p>
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Duration
                </lable>
                <p className='medicalhistory-records-para'>10 Days</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Bowel
                </lable>
                <p className='medicalhistory-records-para'>UTI</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Severe
                </lable>
                <p className='medicalhistory-records-para'>1 week</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Micturation
                </lable>
                <p className='medicalhistory-records-para'>UTI</p>
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  How did the pain starts?
                </lable>
                <p className='medicalhistory-records-para'>Lower back pain and mild cervical pain</p>
        </div>
        <div className="d-flex flex-column col">
       
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Aggravating
                </lable>
                <p className='medicalhistory-records-para'>More Than 30 Mins Sitting</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Relieving
                </lable>
                <p className='medicalhistory-records-para'>Lying, Walking</p>
        </div>
        </div>
        <div>
        <Table responsive>
        <thead className="table-head-container">
        <tr>
        <th rowSpan={2} className="table-head-row-top-left-medicalHistory-record" >
        <div className="table-header-div"></div>
            </th>
            <th colSpan={2} className="table-header-col" >
                CERVICAL
                <div className="table-header-div"></div>
            </th>
            <th colSpan={2} className="table-header-col" >
                LUMBO SACRAL
                
            </th>
        </tr>
        <tr>
       
        <th className="table-head-row-medicalHistory-record" >Full <div className="table-header-div"></div></th>
        <th className="table-head-row-medicalHistory-record" >Painless <div className="table-header-div"></div></th>
        <th className="table-head-row-medicalHistory-record" >Full <div className="table-header-div"></div></th>
        <th className="table-head-row-medicalHistory-last-record-td">painless </th>
        </tr>
            </thead>
            <tbody>
            <tr className="table-body-row-container" >
            <td className="table-1st-td-medicalHistory-record" >
                      Flexion
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                  Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                   -
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                    Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row-medicalHistory-record" >
               No
                      
                    </td>
            </tr>
            <tr className="table-body-row-container" >
            <td className="table-1st-td-medicalHistory-record" >
                      Extension
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                  Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                   -
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                    Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row-medicalHistory-record" >
               No
                     
                    </td>
            </tr>
            <tr className="table-body-row-container" >
            <td className="table-1st-td-medicalHistory-record" >
                    Rotation
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                  Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                   -
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                    Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row-medicalHistory-record" >
               No
                     
                    </td>
            </tr>
            <tr className="table-body-row-container" >
            <td className="table-1st-td-medicalHistory-record" >
                     Side Flexion
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                  Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                   -
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row" >
                    Yes
                      <div className="table-header-div"></div>
                    </td>
                    <td className="table-body-row-medicalHistory-record" >
               No
                     
                    </td>
            </tr>
            </tbody>
            </Table>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Able to stand on toes single leg
                </lable>
                <p className='medicalhistory-records-para'>Putting R leg 1st and climbing stairs is difficult</p>
        </div>
        <div className="d-flex flex-column col">
     
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Able to walk on heel
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>
        <div className="d-flex flex-column col">
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Right
                </lable>
                <p className='medicalhistory-records-para'>Yes</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Left
                </lable>
                <p className='medicalhistory-records-para'>No</p>
        </div>
        </div>
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Able to walk on toes
                </lable>
                <p className='medicalhistory-records-para'>Yes</p>
        </div>
        <div className="d-flex flex-column col">
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Right
                </lable>
                <p className='medicalhistory-records-para'>No</p>
        </div>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                Left
                </lable>
                <p className='medicalhistory-records-para'>Yes</p>
        </div>
        </div>
        </div>
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Sensation
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                Left
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>
        
      
        </div>
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Power
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, omnis?</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                Knee Jerk
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet.</p>
        </div>   
        </div> 
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                 Tone
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                Ankle Jerk
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>   
        </div> 
        <div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Reflexes
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, assumenda?</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                  Tibialis Posterior Reflex
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloremque.</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Biceps Jerk
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                  SLR
                </lable>
                <p className='medicalhistory-records-para'>-</p>
        </div>   
        </div> 
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Supinator Jerk
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                  Pheripheral Pulse
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet.</p>
        </div>   
        </div>
        < div className='row'>
        <div className="d-flex flex-column col">
        <lable className="medichistory-lable">
                  {" "}
                  Triceps Jerk
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facilis.</p>
        </div>
        <div className="d-flex flex-column col">
        
        <lable className="medichistory-lable">
                  {" "}
                  Special Tests
                </lable>
                <p className='medicalhistory-records-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, itaque?</p>
        </div>   
        </div>      
        
    
    </div>
  )
}

export default MedicalHistoryRecords
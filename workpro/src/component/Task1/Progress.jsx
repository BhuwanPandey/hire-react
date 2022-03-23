import React, { useState} from 'react'

function Progress() {

    const [data,setData]=useState("progressbar");
    const [btnclass,setbtnclass]=useState("progressbtn");
    const [btnstatus,setBtnstatus]=useState(false);
    const progressbar=()=>{
        setData("progressbar-active")
        setBtnstatus(true);
        setbtnclass("")
    }

  return (
    <div className="progressbarContainer">
        <h1>Progressbar</h1>
        <div className="progressbar-border">
        <div className={data}></div>
        </div>
        

        <div className="btnsection">
            <button type="button" disabled={btnstatus} className={btnclass} onClick={progressbar} >Click me</button>
        </div>
    </div>
  )
}

export default Progress
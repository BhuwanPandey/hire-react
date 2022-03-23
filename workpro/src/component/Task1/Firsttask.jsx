import React,{useState} from 'react'
import './Firsttask.css';
import Slider from './Slider';
import Progress from './Progress';
import Buttonp from './Buttonp';

function Firsttask() {
    const [value,setValue]=useState("50");
    const [div,setDiv]=useState({
        sliderdiv:true,
        btndiv:false,
        progressdiv:false
    })

    const changeValue=(event)=>{
        setValue(event.target.value);
    }

    const changeSlider=(event)=>{
        event.preventDefault();
        
        if(event.target.name==="sliderdiv"){
            setDiv(
                {
                    sliderdiv:true,
                    btndiv:false,
                    progressdiv:false
                
            })
        }
        if(event.target.name==="btndiv"){
            setDiv(
                {
                    sliderdiv:false,
                    btndiv:true,
                    progressdiv:false
                
            })
        }
        if(event.target.name==="progressdiv"){
            setDiv(
                {
                    sliderdiv:false,
                    btndiv:false,
                    progressdiv:true
                
            })
        }
    }
  return (
    <>
    <div className="taskcontainer">
        <div className="sideNavbar">
            <a href="#" name='sliderdiv' onClick={changeSlider}>Slider</a>
            <a href="#" name='btndiv' onClick={changeSlider}>Button5sec</a>
            <a href="#" name='progressdiv' onClick={changeSlider}>Progressbar</a>
        </div>
        <div className="subtaskcontainer">
            {div.sliderdiv===true?<Slider changeValue={changeValue} value={value}/>: ""}
            {div.btndiv===true?<Buttonp changeValue={changeValue} value={value}/>: ""}
            {div.progressdiv===true?<Progress changeValue={changeValue} value={value}/>: ""}
        
        </div> 
    </div>
    </>
    


    )}

export default Firsttask;
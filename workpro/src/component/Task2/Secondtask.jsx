import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Secondtask.css';

function Secondtask() {
    const [urldata,setUrl]=useState();
    useEffect(()=>{
        async function geturl(){
            const res=await axios.get("https://api.github.com/repos/facebook/react/issues");
            setUrl(res.data)
        }
        geturl();
    },[])
return (
    <div className="issueContainer">
        <div className="issuesubcontainer">
            <h1>List of Issues </h1>
            <ul>
                {urldata?urldata.map((e)=>{
                    return(
                        <li className='urlLink'><a href={e.url} target="_blank">{e.url}</a> </li>
                    )
                }):'Loading..'}
            </ul>
        </div>

        <div className="labelnamecontainer">
            <h1>List of name in corresponding Label </h1>
            {urldata?urldata.map((e)=>{
                return(
                    <li className='labeldata'>{e.labels.map((ee)=>{
                        return(ee.name)
                    })} </li>
                )
            }):'Loading..'}
        </div>
    </div>
)
}

export default Secondtask
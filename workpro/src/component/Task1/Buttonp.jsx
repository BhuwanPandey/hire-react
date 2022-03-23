import React, { useState } from 'react'

function Buttonp() {

    const [content,setContent]=useState("Click me");
    const [name,setName]=useState('');
    const loading=(e)=>{
        setName("loader");
        setContent("loading..");
        setTimeout(()=>{
            setName("");
            setContent('Click me')
        },5000);
    }

  return (
    <div className='btnloading'>
        <button onClick={loading}>
            <div className={name}></div>
            {content}</button>
        
    </div>
)
}

export default Buttonp
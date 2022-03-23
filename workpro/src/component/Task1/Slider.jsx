import React from 'react'

function Slider(props) {
  return (
    <div className='simpleSlider'>
        <h1>Slider </h1>
        <div className="sub_simpleSlider">
            <input type="range" min="0" max="100"  step="5" className="slider"  onChange={props.changeValue} value={props.value}/>
        </div>
        <p className='result'> <span>Value:{props.value}</span></p>
    </div>
            
  )
}

export default Slider
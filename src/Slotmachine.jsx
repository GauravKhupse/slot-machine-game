import React from "react";

const SlotM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z = '🎅';
  
    let{x,y,z} = props;
  
    if(x===y && y==z){
      return (
        <>
        <div className='card'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
        </div>
  
        </>
      )
    } else{
      return (
        <>
        <div className='card'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
        </div>
  
        </>
      )
    }
  }

  export default SlotM
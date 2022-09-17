import React, { useLayoutEffect, useRef, useState } from 'react'
import './02-useEffect/effects.css';
export const Prueba = () => {
    const [counter, setCounter] = useState(0);
    const [dimension, setDimension] = useState({
        height:0,
        width:0
    });
    const refDiv = useRef();
    useLayoutEffect(() => {
       setDimension({
           height:refDiv.current.offsetHeight,
           width:refDiv.current.offsetWidth
       })
    },[counter]);
    // useEffect(() => {
    //     console.log(refInput.current.offsetWidth,refInput.current.offsetHeight);
    //     if(counter >= 10) {
    //         refInput.current.style.background="#056";
    //     }
    // },[counter]);
    const setUpBackground = (counter) => {
        if(counter >= 10){
            return 'blue';
        } else{
            return 'orange';
        }
    }
     const handleClick = () => {
        setCounter(counter+1);
    }
    
    return (
        <div>
            <h1>Contador: {counter}%</h1>
            <hr/>
             <div
              ref={refDiv} 
              className={`form-control ${setUpBackground(counter)}`} 
              style={{width:`${counter}%`}}>
                  {counter}%
              </div>
              <pre>Dimensiones: {JSON.stringify(dimension,null,2)}</pre>
             <button onClick={handleClick} className="btn btn-danger">Increment</button>
             <button onClick={() => setCounter(counter-1)} className="btn btn-dark">Decrement</button>
        </div>
    )
}

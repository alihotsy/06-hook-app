import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';
export const Memorize = () => {
    const {counter,increment} = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value = {counter}/></h1>
            <hr/>
            <button onClick={increment} className="btn btn-outline-info">+1</button>
            <button 
            className="btn btn-outline-danger m-4"
            onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h2>This is first child using Counter Context</h2>
            <h3>Counter value is: {counterValue[0]}</h3>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}> Increment Context</button>
            <br />
            <button onClick={()=> {counterValue[1](--counterValue[0])}}> Decrement Context</button>
        </div>
    )
}

export default Child;
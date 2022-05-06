import React, { useContext } from 'react';
import { CounterContext } from '../context/globalState';

const Home = () => {
    const { counter } = useContext(CounterContext);
    const { incFunc, decFunc } = useContext(CounterContext);
    return ( 
        <div>
            <h1>Home</h1>
            <span>counter: {counter}</span><br />
            <button onClick={ () => incFunc() }>increment</button>
            <button onClick={ () => decFunc() }>decrement</button>
        </div>
     );
}
 
export default Home;
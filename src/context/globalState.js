import React, { createContext, useState} from 'react'
//import counterReducer from './counterReducer';

// const initialState = {
//     counter : [
//         { id:1, num: 0, text: 'counter'},
//         // { id:2, num: 10, text: 'counter'}
//     ]
// }
//const [counter, setCounter] = useState(0);

export const CounterContext = createContext(undefined);

export const CounterProvider = ({ children }) =>{
    let [counter, setCounter] = useState(0);

    // const incFunc = () =>{
    //     dispatch({
    //         type: 'INC'
    //     })
    // }

    const incFunc = () =>{
        setCounter(counter+=1);
    }
    const decFunc = () =>{
        setCounter(counter-=1);
    }

    return <CounterContext.Provider value = {{ counter: counter, incFunc, decFunc}}>
        {children}
    </CounterContext.Provider>
}
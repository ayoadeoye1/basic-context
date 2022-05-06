import React, {useContext} from 'react';
import { CounterContext } from '../context/globalState';


const Signin = () => {

    const { counter } = useContext(CounterContext);
    return ( 
        <div>
            <p>Sign-in</p><br />
            <span> counter: {counter}</span>
        </div>
     );
}
 
export default Signin;
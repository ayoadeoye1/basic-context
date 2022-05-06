import React, {useContext} from 'react';
import { CounterContext } from '../context/globalState';

const Profile = () => {

    const { counter } = useContext(CounterContext)
    return ( 
        <div>
            <p>Profile</p><br />
            <h1>counter: {counter}</h1>
        </div>
     );
}
 
export default Profile;
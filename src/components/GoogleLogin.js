import React, {useState} from 'react';
import Login from './Login';
import Logout from './Logout';

function GoogleLogin(){
    const [login, setLogin] = useState(false);

    const updateLogin = (boolean) => {
        setLogin(boolean);
    }
    
    return(
        login ? <Logout updateLogin={updateLogin} /> : <Login updateLogin={updateLogin} />
    )
}

export default GoogleLogin;
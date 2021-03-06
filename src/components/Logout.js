import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '868018496849-qs2192fi3avad23mgaicmqup4asltpil.apps.googleusercontent.com'

function Logout({updateLogin}){
    const onSuccess = () => {
       alert('Logout made successfully');
       updateLogin(false);
    };

    return (
        <div>
            <GoogleLogout 
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;
import React from 'react';
import { GoogleLogin} from 'react-google-login';

const clientId = '868018496849-qs2192fi3avad23mgaicmqup4asltpil.apps.googleusercontent.com'

function Login({updateLogin}){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj);
        updateLogin(true);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin 
                clientId={clientId}
                buttonText= "Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
import React from 'react';
import Cookies from 'universal-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


export default function GoogleOAuth() {

    const cookies = new Cookies()
    return (
        <div>
            <GoogleOAuthProvider clientId="566497594016-lclesuiugcuj6g88ms8c6mt1ocvv3bb8.apps.googleusercontent.com">
                <GoogleLogin
                onSuccess={credentialResponse =>{
                    const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                    cookies.set('nombre', credentialResponseDecode.nombre,{
                        secure:true,
                        sameSite:"None",
                        path:'/'
                    })
                    cookies.set('apellido', credentialResponseDecode.apellido,{
                        secure:true,
                        sameSite:"None",
                        path:'/'
                    })
                    window.location.hash = '/sesion'
                }}
                onError={()=>{
                    console.log('Login failed')
                }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

import React from "react";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import Cookies from "universal-cookie";
import {jwtDecode} from "jwt-decode";

export default function GoogleOAuth(){
    const cookies = new Cookies()
    return(
        <div>
            <GoogleOAuthProvider clientId="46461868152-om3fj8ervsfiv54o3ho2fdq50eckt0ua.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse =>{
                        const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                        cookies.set('email',credentialResponseDecode.email,{
                            secure:true,
                            sameSite:'none',
                            path:'/'
                        })
                        cookies.set('nombres',credentialResponseDecode.name,{
                            secure:true,
                            sameSite:'none',
                            path:'/'
                        })
                        window.location.hash = '/sesion-iniciada'
                    }}
                    onError={()=>{
                        console.log('Login Failed')
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}
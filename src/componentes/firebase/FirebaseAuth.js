import React from 'react'
import { useState } from 'react'
import {auth, provider} from './FireBaseConfig'
import Cookies from 'universal-cookie'
import { signInWithPopup } from 'firebase/auth'
import GitHubIcon from '@mui/icons-material/GitHub';

function FireBaseAuth(){
    const [user, setUser] = useState(null)
    const cookies = new Cookies()

    const handleGitHubLogin = () => {
        signInWithPopup(auth,provider)
        .then ((result) => {
            setUser(result.user)
            cookies.set("email", result.user.email, {
                secure:true,
                sameSite : 'None',
                path: '/'
            })
            window.location.hash = 'sesion-iniciada'
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>


            
            {user ? (<>{}</>) : (<button type='button' className='btn btn-secondary btn-sm' onClick={handleGitHubLogin}> <GitHubIcon/> Acceder con gitHub</button>)}
        </div>
    )
}

export default FireBaseAuth; 
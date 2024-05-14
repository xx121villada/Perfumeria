import React from 'react'
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { useIdleTimer } from 'react-idle-timer';

const timeout = 10000;

export default function SesionExpired() {
    const cookies = new Cookies();

    const onIdle = () => {
        cookies.remove('email', { path: "/" })
        window.location.hash = '/'
        Swal.fire({
            title: "La sesion expiro por inactividad. Inicie sesion de nuevo",
            icon: "info"
        })
    }
    const getRemainingTime = useIdleTimer({
        onIdle,
        timeout,
        throttle: 500
    })
    console.log(getRemainingTime)
    return (
        <div>
        </div>
    )
}

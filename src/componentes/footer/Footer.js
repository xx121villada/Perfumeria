import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start bg-light text-muted">

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>DULCE FRAGANCIA
                                </h6>
                                <p>
                                    Gracias por confiar en nosotros, aqui encontraras las mejores fragancias creadas para representar la sexualidad y el glamour.
                                </p>
                            </div>



                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Redes sociales
                                </h6>
                                <p>
                                    <FacebookIcon />
                                </p>
                                <p>
                                    <InstagramIcon />
                                </p>
                                <p>
                                    <TwitterIcon/>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Productos
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Chanel</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Victoria Secret</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Gucci</a>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6> CONTACTO </h6>
                                <p>
                                    <RoomIcon/> Pereira, Colombia, 2024</p>
                                <p>
                                    <MarkEmailReadIcon/> x336562@gmail.com
                                </p>
                                <p> <PhoneInTalkIcon/>  +57 314-334-5128</p>

                            </div>

                        </div>

                    </div>
                </section>



                <div class="text-center p-4" >
                    !FRAGANCIAS QUE NARRAN HISTORIAS EN CADA GOTA¡
                </div>

            </footer>
        </div>
    )
}

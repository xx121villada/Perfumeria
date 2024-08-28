import React from "react";
import './barraRedesSociales.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function BarraRedesSociales() {
  return (
    <div className="container-bar">
        <div className="icon-social">
            <a href="" className="me-4 text-reset icon-facebook"> <span id="titleB"> Facebook </span> <i><FacebookIcon/></i> </a>
            <a href="" className="me-4 text-reset icon-twitter"> <span id="titleB"> Twitter X </span> <i><TwitterIcon/></i> </a>
            <a href="x336562@gmail.com" className="me-4 text-reset icon-google"> <span id="titleB"> Google </span> <i><GoogleIcon/></i> </a>
            <a href="" className="me-4 text-reset icon-linkedin"> <span id="titleB"> LinkedIn </span> <i><LinkedInIcon/></i> </a>
            <a href="" className="me-4 text-reset icon-github"> <span id="titleB"> GitHub </span> <i><GitHubIcon/></i> </a>
            <a href="" className="me-4 text-reset icon-pinterest"> <span id="titleB"> Pinterest </span> <i><PinterestIcon/></i> </a>
            <a href="https://wa.me/+573143345128" className="me-4 text-reset icon-whatsapp"> <span id="titleB"> Whatsapp </span> <i><WhatsAppIcon/></i> </a>
        </div>
    </div>
  )
}
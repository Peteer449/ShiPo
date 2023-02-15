/* eslint-disable jsx-a11y/anchor-is-valid */
import {ReactComponent as IconFacebook} from "./icon-facebook.svg"
import {ReactComponent as IconTikTok} from "./icon-tiktok.svg"
import {ReactComponent as IconInstagram} from "./icon-instagram.svg"
import {ReactComponent as Logo} from "./logo-shipo-footer.svg"
import "./footer.css"

export default function Footer(){
  return(
    <footer className="bg-negro-carbon d-flex flex-wrap align-items-center justify-content-center pt-4 pb-5">
      <Logo/>
      <p className="col-12 text-center text-light direccion">Dirección: Lorem ipsum dolor sit
ipsum dolor sit</p>
      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
        <li className="ms-3"><a className="text-light" href="#"><IconFacebook/></a></li>
        <li className="ms-3"><a className="text-light" href="#"><IconTikTok/></a></li>
        <li className="ms-3"><a className="text-light" href="#"><IconInstagram/></a></li>
      </ul>
    </footer>
  )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import {ReactComponent as IconInstagram} from "../../images/icon-instagram.svg"
import {ReactComponent as Logo} from "../../images/logo-shipo-footer.svg"
import "./footer.css"

export default function Footer(){
  return(
    <footer className="bg-negro-carbon d-flex flex-wrap align-items-center justify-content-center pt-4 pb-5">
      <Logo/>
      <p className="col-12 text-center text-light direccion">Dirección: Quintana 680, Villa Bosch</p>
      <div className="ms-3"><a className="text-light" href="https://www.instagram.com/shipo.relax/" target="_blank"><IconInstagram/></a></div>
    </footer>
  )
}
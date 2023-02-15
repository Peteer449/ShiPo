import React from "react";
import './Servicios.css';
import LogoDuracion from '../../images/icon-clock.svg';
import LogoWpp from '../../images/icon-whatsapp.svg';
import { Link } from "react-router-dom";

export default function Servicios(props){
    console.log(typeof(props.parrafoUno));
    console.log(typeof(props.parrafoDos));
    console.log(typeof(props.parrafoTres));
    console.log(typeof(props.parrafoCuatro));
    return(
        <div className="servicios">  
            <img src={props.imagen} className='imagenServicio'/>
            <h3 className="tituloServicio">{props.titulo}</h3>
            {
                props.parrafoUno!== undefined &&
                <p className="descripcionServicio">{props.parrafoUno}</p>
            }
            {
                props.parrafoDos!== undefined &&
                <p className="descripcionServicio">{props.parrafoDos}</p>
            }
            {
                props.parrafoTres!== undefined &&
                <p className="descripcionServicio">{props.parrafoTres}</p>
            }
            {
                props.parrafoCuatro!== undefined &&
                <p className="descripcionServicio">{props.parrafoCuatro}</p>
            }
            <div className="duracionServicio">
                <img src={LogoDuracion} alt='imagen de reloj' className="logoReloj"/>
                <p className="duracion"><span>Duración:</span> de 45 a 75 min</p>
            </div>
            <p className="textoServicios">Apartá tu cita por WhatsApp.<br/>¡Te esperamos!</p>
            <a className="reserva" href="https://api.whatsapp.com/send?phone=5491167370832&text=Hola!%20Bienvenidos%20a%20ShiPo" target="_blank">
                <h4>Quiero una cita</h4>
                <img src={LogoWpp} alt='logo de whatsapp' className="logoWpp"/>
            </a> 
        </div>
    )
}
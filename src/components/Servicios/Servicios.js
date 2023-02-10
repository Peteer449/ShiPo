import React from "react";
import './Servicios.css';
import LogoDuracion from '../../images/icon-clock.svg';
import LogoWpp from '../../images/icon-whatsapp.svg';

export default function Servicios(props){
    return(
        <div className="servicios">  
            <img src={props.imagen} className='imagenServicio'/>
            <h3 className="tituloServicio">{props.titulo}</h3>
            <p className="descripcionServicio">{props.parrafoUno}</p>
            <p className="descripcionServicio">{props.parrafoDos}</p>
            <p className="descripcionServicio">{props.parrafoTres}</p>
            <p className="descripcionServicio">{props.parrafoCuatro}</p>
            <div className="duracionServicio">
                <img src={LogoDuracion} alt='imagen de reloj' className="logoReloj"/>
                <p className="duracion"><span>Duración:</span> de 45 a 75 min</p>
            </div>
            <p className="textoServicios">Apartá tu cita por WhatsApp.<br/>¡Te esperamos!</p>
            <div className="reserva">
                <h4>Quiero una cita</h4>
                <img src={LogoWpp} alt='logo de whatsapp' className="logoWpp"/>
            </div>
        </div>
    )
}
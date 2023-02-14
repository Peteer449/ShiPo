import React from "react";
import './Servicios.css';
import LogoDuracion from '../../images/icon-clock.svg';
import LogoWpp from '../../images/icon-whatsapp.svg';

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
                <p className="descripcionServicio">{props.parrafoUno}</p>
            }
            {
                props.parrafoTres!== undefined &&
                <p className="descripcionServicio">{props.parrafoUno}</p>
            }
            {
                props.parrafoCuatro!== undefined &&
                <p className="descripcionServicio">{props.parrafoUno}</p>
            }
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
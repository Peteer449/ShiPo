import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navegation from "./Navegation/Navegation";
import Servicios from './Servicios/Servicios';
import ManosPies from '../images/belleza-de-manos-y-pies.png';
import Laser from '../images/depilacion-laser-definitiva.png';
import DrenajeLinfatico from '../images/drenaje-linfatico.png';
import Esmalte from '../images/esmalte-semipermanente.png';
import Gluteos from '../images/levantamiento-de-glúteos-electrodos.png';
import Maderoterapia from '../images/masajes-con-maderoterapia.png';
import Piedras from '../images/masajes-descontracturantes-piedras-calientes.png';
import Descontracturantes from '../images/masajes-descontracturantes.png';
import Reductores from '../images/masajes-reductores-electrodos.png';
import Electrodos from '../images/image-sesiones-de-electrodos.png';
import Home from "./home/Home.jsx"
import Footer from "./footer/Footer.jsx"

function App() {
  const propiedades=[
    {url:'/masajes/descontracturantes',imagen:Descontracturantes,titulo:"Masajes descontracturantes",
    textoUno:"Es un tipo de masaje que tiene como propósito relajar y aflojar los músculos rígidos y tensos. Éste es diferente de un masaje únicamente relajante porque se aplica con mayor intensidad y presión. ¡No te preocupes! eso no significa que sea doloroso, al finalizarlo te sentirás como nuevo.",
    textoDos:undefined,
    textoTres:undefined,
    textoCuatro:undefined},
    {url:'/masajes/piedras_calientes',imagen:Piedras,titulo:"Masajes descontracturantes + piedras calientes",
    textoUno:'Un masaje con piedras calientes también se conoce como terapia geotermal. Tiene origen oriental y se basa en combinar masaje terapéutico con piedras frías y calientes, ubicándolas en sitios estratégicos del cuerpo que benefician el flujo de chakras para que la energía fluya adecuadamente.',
    textoDos:'Las piedras calientes poseen numerosas propiedades, entre las más destacadas se encuentran: Reducción y alivio del dolor, eliminación de toxinas de la piel y mejora del sistema circulatorio.',
    textoTres:'¿Te animás a probarlo?',
    textoCuatro:undefined},
    {url:'/masajes/maderoterapia',imagen:Maderoterapia,titulo:"Masajes con maderoterapia",
    textoUno:"Es una terapia natural que trata de estimular el cuerpo a través de una técnica de masaje con herramientas de madera. Se realizan movimientos y presión en puntos del cuerpo con el fin de provocar una reacción de bienestar, reducir los niveles de estrés, y aliviar los dolores musculares y articulares.",
    textoDos:undefined,
    textoTres:undefined,
    textoCuatro:undefined},
    {url:'/electrodos/sesiones',imagen:Electrodos,titulo:"Sesiones de electrodos",
    textoUno:"Disfruta de una sesión de electrodos, también conocida como electroestimluación o electroterapia.",
    textoDos:"Consiste en colocar electrodos en la piel del paciente, estos provocan contracciones musculares involuntarias que tonifican los músculos. Es como tener músculos firmes y piel tonificada sin tener que hacer el riguroso trabajo del ejercicio. ¿No es una maravilla?",
    textoTres:"Si tenés alguna duda o querés saber más sobre los electrodos no dudes en contactarnos",
    textoCuatro:undefined},
    {url:'/electrodos/levantamiento_de_gluteos',imagen:Gluteos,titulo:"Levantamiento de glúteos + electrodos",
    textoUno:"En la sección de electrodos te contamos cómo funciona la electroterapia para tonificar y ejercitar los músculos sin tener que mover un solo dedo para el ejercicio. En esta sección combinamos la maderoterapia con los electrodos para levantamiento de glúteos.",
    textoDos:"Una óptima combinación para combatir la celulitis, reafirmar, tonificar y tornear el cuerpo.",
    textoTres:"Los glúteos pertenecen a un grupo de músculos denominados “sostén”, debido a esto, su fortalecimiento y buen mantenimiento debe ir más allá de lo estético.",
    textoCuatro:"Es ideal proporcionarles la fortaleza y elasticidad suficientes para mantener la postura erguida y evitar problemas de espalda."},
    {url:'/electrodos/reductores',imagen:Reductores,titulo:"Masajes reductores + electrodos",
    textoUno:"Este es un masaje distinto al descontracturante y al relajante. Consiste en movilizar y disminuir la grasa acumulada, principalmente abdomen, piernas y glúteos.",
    textoDos:"En combinación con la aplicación de electrodos estas sesiones ayuda a disminuir la celulitis, combatir la flacidez ya demás reafirma y moldea la figura.",
    textoTres:undefined,
    textoCuatro:undefined},
    {url:'/drenaje_linfatico',imagen:DrenajeLinfatico,titulo:"Drenaje linfático",
    textoUno:"Es un tipo de masaje que tiene como propósito eliminar la acumulación de líquidos y de toxinas. También mejora el sistema inmune y aumenta el metabolismo.",
    textoDos:"Este tratamiento es recomendable para pacientes con problemas de retención de líquidos, edemas traumáticos, linfedemas, complicaciones linfáticas derivadas de una cirugía y estética de la piel.",
    textoTres:undefined,
    textoCuatro:undefined},
    {url:'/belleza_manos_pies',imagen:ManosPies,titulo:"Belleza de manos y pies",
    textoUno:"¿Puede haber algo mejor que tener las uñas de las manos fabulosas? ¡Sí! Tener las uñas de las manos y de los pies más que fabulosas. Si te gustá estar como una reina no dudés en contactarnos y pedir tu cita.",
    textoDos:"Vos merecés que te consientan y que te hagan sentir única.",
    textoTres:undefined,
    textoCuatro:undefined},
    {url:'/esmalte_semipermanente',imagen:Esmalte,titulo:"Esmalte semipermanente",
    textoUno:"Que tus uñas estén siempre lindas para la ocasión. Un esmalte semipermanente te brinda espontaneidad y delicadeza. Con una duración entre 2 y 3 semanas, además muy fácil de remover.",
    textoDos:"¿Qué color te gustaría lucir esta vez? Escribinos a nuestro chat y contanos.",
    textoTres:undefined,
    textoCuatro:undefined},
    {url:'/depilacion_laser_definitiva',imagen:Laser,titulo:"Depilación láser definitiva",
    textoUno:"¿Querés lucir una piel espectacular? Con la depilación láser definitiva tu piel quedará como si acabas de nacer.",
    textoDos:"Este tratamiento convierte la melanina del pelo en calor quemando la matriz para que el pelo no vuelva a salir. El resultado varía entre 8 a 12 meses con una efectividad del 80% y 90%, es decir un mínimo de vello residual, muy claro y fino.",
    textoTres:undefined,
    textoCuatro:undefined}
  ];
  return (
    <>
      <BrowserRouter>
        <Navegation/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          {
            
            propiedades.map(propiedad=>(
              <Route path={propiedad.url} element={<Servicios imagen={propiedad.imagen} titulo={propiedad.titulo} 
              parrafoUno={propiedad.textoUno} parrafoDos={propiedad.textoDos} parrafoTres={propiedad.textoTres} parrafoCuatro={propiedad.textoCuatro}/>}/>
            ))
          }
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

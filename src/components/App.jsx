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
import Electrodos from '../images/sesiones-de-electrodos.png';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navegation/>
        <Routes>
          <Route path='/masajes/descontracturantes' element={<Servicios imagen={Descontracturantes} titulo="Masajes descontracturantes" 
          descripcion="Es un tipo de masaje que tiene como propósito relajar y aflojar los músculos rígidos y tensos. Éste es diferente de un masaje únicamente relajante porque se aplica con mayor intensidad y presión. ¡No te preocupes! eso no significa que sea doloroso, al finalizarlo te sentirás como nuevo."/>}/>
          <Route path='/masajes/piedras_calientes' element={<Servicios imagen={Piedras} titulo="Masajes descontracturantes + piedras calientes" 
          descripcion='Un masaje con piedras calientes también se conoce como terapia geotermal. Tiene origen oriental y se basa en combinar masaje terapéutico con piedras frías y calientes, ubicándolas en sitios estratégicos del cuerpo que benefician el flujo de chakras para que la energía fluya adecuadamente. Las piedras calientes poseen numerosas propiedades, entre las más destacadas se encuentran: Reducción y alivio del dolor, eliminación de toxinas de la piel y mejora del sistema circulatorio. ¿Te animás a probarlo?'/>}/>
          <Route path='/masajes/maderoterapia' element={<Servicios imagen={Maderoterapia} titulo="Masajes con maderoterapia" 
          descripcion="Es una terapia natural que se trata de estimular el cuerpo a través de una técnica de masaje con herramientas de madera. Se realizan movimientos y presión en puntos del cuerpo con el fin de provocar una reacción de bienestar, reducir los niveles de estrés, y aliviar los dolores musculares y articulares."/>}/>
          <Route path='/electrodos/sesiones' element={<Servicios imagen={Electrodos} titulo="Sesiones de electrodos" 
          descripcion="Disfruta de una sesión de electrodos, también conocida como electroestimluación o electroterapia. Consiste en colocar electrodos en la piel del paciente, estos provocan contracciones musculares involuntarias que tonifican los músculos. Es como tener músculos firmes y piel tonificada sin tener que hacer el riguroso trabajo del ejercicio. ¿No es una maravilla? Si tenés alguna duda o querés saber más sobre los electrodos no dudes en contactarnos"/>}/>
          <Route path='/electrodos/levantamiento_de_gluteos' element={<Servicios imagen={Gluteos} titulo="Levantamiento de glúteos + electrodos" 
          descripcion="En la sección de electrodos te contamos cómo funciona la electroterapia para tonificar y ejercitar los músculos sin tener que mover un solo dedo para el ejercicio. En esta sección combinamos la maderoterapia con los electrodos para levantamiento de glúteos. Una óptima combinación para combatir la celulitis, reafirmar, tonificar y tornear el cuerpo. Los glúteos pertenecen a un grupo de músculos denominados “sostén”, debido a esto, su fortalecimiento y buen mantenimiento debe ir más allá de lo estético. Es ideal proporcionarles la fortaleza y elasticidad suficientes para mantener la postura erguida y evitar problemas de espalda."/>}/>
          <Route path='/electrodos/reductores' element={<Servicios imagen={Reductores} titulo="Masajes reductores + electrodos" 
          descripcion="Este es un masaje distinto al descontracturante y al relajante. Consiste en movilizar y disminuir la grasa acumulada, principalmente abdomen, piernas y glúteos. En combinación con la aplicación de electrodos estas sesiones ayuda a disminuir la celulitis, combatir la flacidez ya demás reafirma y moldea la figura."/>}/>
          <Route path='/drenaje_linfatico' element={<Servicios imagen={DrenajeLinfatico} titulo="Drenaje linfático" 
          descripcion="lorem ipsum"/>}/>
          <Route path='/belleza_manos_pies' element={<Servicios imagen={ManosPies} titulo="Belleza de manos y pies" 
          descripcion="¿Puede haber algo mejor que tener las uñas de las manos fabulosas? ¡Sí! Tener las uñas de las manos y de los pies más que fabulosas. Si te gustá estar como una reina no dudés en contactarnos y pedir tu cita. Vos merecés que te consientan y que te hagan sentir única."/>}/>
          <Route path='/esmalte_semipermanente' element={<Servicios imagen={Esmalte} titulo="Esmalte semipermanente" 
          descripcion="Que tus uñas estén siempre lindas para la ocasión. Un esmalte semipermanente te brinda espontaneidad y delicadeza. Con una duración entre 2 y 3 semanas, además muy fácil de remover. ¿Qué color te gustaría lucir esta vez? Escribinos a nuestro chat y contanos."/>}/>
          <Route path='/depilacion_laser_definitiva' element={<Servicios imagen={Laser} titulo="Depilación láser definitiva" 
          descripcion="lorem ipsum"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

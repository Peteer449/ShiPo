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
    <div>
      <BrowserRouter>
        <Navegation/>
        <Routes>
          <Route path='/masajes/descontracturantes' element={<Servicios imagen={Descontracturantes} titulo="Masajes descontracturantes" 
          descripcion="Es un tipo de masaje que tiene como propósito relajar y aflojar los músculos rígidos y tensos. Éste es diferente de un masaje únicamente relajante porque se aplica con mayor intensidad y presión. ¡No te preocupes! eso no significa que sea doloroso, al finalizarlo te sentirás como nuevo."/>}/>
          <Route path='/masajes/piedras_calientes' element={<Servicios imagen={Piedras} titulo="Masajes descontracturantes + piedras calientes" 
          descripcion="Como si un masaje descontracturante no fuera ya suficientemente relajante, también te traemos sesiones que lo combinan con piedras calientes. ¿Sabías que un masaje con piedras calientes también se conoce como terapia geotermal? Tiene origen oriental y se basa en combinar masaje terapéutico con piedras frías y calientes, ubicándolas en sitios estratégicos del cuerpo que benefician el flujo de chakras para que la energía fluya adecuadamente. Las piedras calientes poseen numerosas propiedades, entre las más destacadas se encuentran: Reducción y alivio del dolor, eliminación de toxinas de la piel y mejora del sistema circulatorio. ¿Te animás a probarlo?"/>}/>
          <Route path='/masajes/maderoterapia' element={<Servicios imagen={Maderoterapia} titulo="Masajes con maderoterapia" 
          descripcion="Es una terapia natural que se trata de estimular el cuerpo a través de una técnica de masaje con herramientas de madera. Se realizan movimientos y presión en puntos del cuerpo con el fin de provocar una reacción de bienestar, reducir los niveles de estrés, y aliviar los dolores musculares y articulares."/>}/>
          <Route path='/electrodos/sesiones' element={<Servicios imagen={Electrodos} titulo="Sesiones de electrodos" 
          descripcion="Lorem ipsum"/>}/>
          <Route path='/electrodos/levantamiento_de_gluteos' element={<Servicios imagen={Gluteos} titulo="Levantamiento de glúteos + electrodos" 
          descripcion="lorem ipsum"/>}/>
          <Route path='/electrodos/reductores' element={<Servicios imagen={Reductores} titulo="Masajes reductores + electrodos" 
          descripcion="lorem ipsum"/>}/>
          <Route path='/drenaje_linfatico' element={<Servicios imagen={DrenajeLinfatico} titulo="Drenaje linfático" 
          descripcion="lorem ipsum"/>}/>
          <Route path='/belleza_manos_pies' element={<Servicios imagen={ManosPies} titulo="Belleza de manos y pies" 
          descripcion="lorem ipsum"/>}/>
          <Route path='/esmalte_semipermanente' element={<Servicios imagen={Esmalte} titulo="Esmalte semipermanente" 
          descripcion="lorem ipsum"/>}/>
          <Route path='/depilacion_laser_definitiva' element={<Servicios imagen={Laser} titulo="Depilación láser definitiva" 
          descripcion="lorem ipsum"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

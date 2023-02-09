import MasajesYElectrodosLinks from "./MasajesYElectrodosLinks"
import imageMasajes from "./image-masajes-descontracturantes.png"
import imageElectrodos from "./image-sesiones-de-electrodos.png"
import imageLevantamiento from "./image-levantamiento-electrodos.png"
import imageMaderoterapia from "./image-masajes-con-maderoterapia.png"
import imagePiedras from "./image-masajes-descontracturantes-piedras-calientes.png"
import imageReductores from "./image-masajes-reductores-electrodos.png"


export default function MasajesYElectrodos({title,alt}){
  if(title==="Masajes"){
    return(
      <div className="mt-5">
        <p className="azul-oceano font-gilda masajes-y-electrodos-title text-center">{title}</p>
        <img src={imageMasajes} alt={alt} className="masajes-y-electrodos-image"/>
        <MasajesYElectrodosLinks text="Masajes descontracturantes" link="" image={imageMasajes}/>
        <MasajesYElectrodosLinks text="Masajes descontracturantes + piedras calientes" link=""image={imagePiedras}/>
        <MasajesYElectrodosLinks text="Masajes con maderoterapia" link=""image={imageMaderoterapia}/>
      </div>
    )
  }else{
    return(
      <div className="mt-5">
        <p className="azul-oceano font-gilda masajes-y-electrodos-title text-center">{title}</p>
        <img src={imageElectrodos} alt={alt} className="masajes-y-electrodos-image"/>
        <MasajesYElectrodosLinks text="Sesiones de electrodos" link=""image={imageElectrodos}/>
        <MasajesYElectrodosLinks text="Levantamiento de glúteos + electrodos" link=""image={imageLevantamiento}/>
        <MasajesYElectrodosLinks text="Masajes reductores + electrodos" link=""image={imageReductores}/>
      </div>
    )
  }
}
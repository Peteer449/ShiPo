import MasajesYElectrodosLinks from "./MasajesYElectrodosLinks"
import imageMasajes from "../../images/masajes-descontracturantes.png"
import imageElectrodos from "../../images/image-sesiones-de-electrodos.png"
import imageLevantamiento from "../../images/levantamiento-de-glúteos-electrodos.png"
import imageMaderoterapia from "../../images/masajes-con-maderoterapia.png"
import imagePiedras from "../../images/masajes-descontracturantes-piedras-calientes.png"
import imageReductores from "../../images/masajes-reductores-electrodos.png"


export default function MasajesYElectrodos({title,alt}){
  if(title==="Masajes"){
    return(
      <div className="mt-4">
        <p className="azul-oceano font-gilda masajes-y-electrodos-title text-center">{title}</p>
        <img src={imageMasajes} alt={alt} className="masajes-y-electrodos-image"/>
        <MasajesYElectrodosLinks text="Masajes descontracturantes" link="./masajes/descontracturantes" image={imageMasajes}/>
        <MasajesYElectrodosLinks text="Masajes descontracturantes + piedras calientes" link="./masajes/piedras_calientes" image={imagePiedras}/>
        <MasajesYElectrodosLinks text="Masajes con maderoterapia" link="./masajes/maderoterapia" image={imageMaderoterapia}/>
      </div>
    )
  }else{
    return(
      <div className="mt-4">
        <p className="azul-oceano font-gilda masajes-y-electrodos-title text-center">{title}</p>
        <img src={imageElectrodos} alt={alt} className="masajes-y-electrodos-image"/>
        <MasajesYElectrodosLinks text="Sesiones de electrodos" link="./electrodos/sesiones" image={imageElectrodos}/>
        <MasajesYElectrodosLinks text="Levantamiento de glúteos + electrodos" link="./electrodos/levantamiento_de_gluteos" image={imageLevantamiento}/>
        <MasajesYElectrodosLinks text="Masajes reductores + electrodos" link="./electrodos/reductores" image={imageReductores}/>
      </div>
    )
  }
}
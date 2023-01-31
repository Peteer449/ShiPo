import MasajesYElectrodosLinks from "./MasajesYElectrodosLinks"
export default function MasajesYElectrodos({title,image,alt}){
  if(title==="Masajes"){
    return(
      <div className="mt-5">
        <p className="azul-oceano font-gilda fs-1 text-center">{title}</p>
        <img src={image} alt={alt} className="masajes-y-electrodos-image"/>
        <MasajesYElectrodosLinks text="Masajes descontracturantes" link=""/>
        <MasajesYElectrodosLinks text="Masajes descontracturantes + piedras calientes" link=""/>
        <MasajesYElectrodosLinks text="Masajes con maderoterapia" link=""/>
      </div>
    )
  }else{
    return(
      <div className="mt-5">
        <p className="azul-oceano font-gilda fs-1 text-center">{title}</p>
        <img src={image} alt={alt} className="masajes-y-electrodos-image"/>
        <MasajesYElectrodosLinks text="Sesiones de electrodos" link=""/>
        <MasajesYElectrodosLinks text="Levantamiento de glúteos + electrodos" link=""/>
        <MasajesYElectrodosLinks text="Masajes reductores + electrodos" link=""/>
      </div>
    )
  }
}
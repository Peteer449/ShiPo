export default function MasajesYElectrodosLinks({text,link,image}){
  return(
    <div className="d-xl-flex flex-wrap justify-content-center mb-xl-5 mt-xl-2">
      <img src={image} alt={"foto de "+text} className="masajes-y-electrodos-image-desktop col-4"/>
      <a href={link} className="masajes-y-electrodos-btn btn azul-oceano col-xl-4 ">
        <p className="h-100 align-items-center justify-content-center d-xl-flex">{text}</p>
      </a>
    </div>
  )
}
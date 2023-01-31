export default function Carousel({title,text,active}){
  return(
    <div className={`carousel-item ${active && "active"}`}>
      <div className="d-flex flex-wrap w-100 reseñas-carousel p-4">
        <p className="text-center reseñas-carousel-title col-12">{title}</p>
        <p className="text-center reseñas-carousel-text">{text}</p>
      </div>
    </div>
  )
}
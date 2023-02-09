/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css"
import perfilEspecialista from "./perfil-especialista.png"
import { ReactComponent as IconWpp } from "./icon-whatsapp.svg"
import { ReactComponent as IconArrowDown } from "./vector-down.svg"
import MasajesYElectrodos from "./MasajesYElectrodos.jsx"
import Carousel from "./Carousel.jsx"
export default function Home(){
  return(
    <div>
      {/* Imagen de fondo */}
      <div className="wrapper">
        {/* Titulo regalate el cuidado que mereces */}
        <div className="bg-negro-carbon regalate-el-cuidado">
          <p className="font-gilda piel regalate-el-cuidado-title text-center">Regalate el cuidado que mereces</p>
          <p className="text-light regalate-el-cuidado-text text-center">Masajes descontracturantes, masajes con piedras, sesiones de electrodos y mucho más.</p>
        </div>
        <IconArrowDown className="vector-down"/>
        {/* Boton para hablar por whatsapp */}
        <a className="hablamos btn bg-azul-oceano d-flex" href="#">
          <p className="text-light w-100 hablamos-text">¿Hablamos?</p>
          <IconWpp className="flex-shrink-1 align-self-center"/>
        </a>
      </div>
      {/* Seccion masajes y electrodos */}
      <MasajesYElectrodos
        title="Masajes"
        alt="Mujer recibiendo masajes"
      />
      <MasajesYElectrodos
        title="Electrodos"
        alt="Tratamiento con electrodos"
      />
      {/* Descripcion de especialista */}
      <div className="bg-azul-oceano mt-5 mb-5 d-md-flex flex-wrap align-items-center">
        <div className="text-center pt-3 pt-md-5 pb-md-5 col-md-6">
          <img src={perfilEspecialista} alt="Foto de la especialista en masajes" className="" />
        </div>
        <div className="col-md-6 col-xl-4 pt-5 pb-5 p-2">
          <p className="perfil-especialista-title text-center piel">¡Hola! soy Maru</p>
          <p className="perfil-especialista-text text-center text-light">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
      </div>
      {/* Reseñas clientes */}
      <div>
        <p className="reseñas-title text-center azul-oceano font-gilda">Lo que dicen mis clientes</p>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div className="carousel-inner p-3 p-md-0 pb-md-5">
            <Carousel
              title="Eli"
              text='"Súper relajante, cómodo y hermoso lugar”.'
              active={true}
            />
            <Carousel
              title="Tryni"
              text='"Dios bendiga tus manos. Excelente trabajo, vayan. 100% relax!!! Gracias Mari  por tu esmero”.'
            />
            <Carousel
              title="Aby"
              text='"¡Sos una genia Mari! Obvio volvería a ir. Mujer respetuosa y atenta. Y unos masajes súper reconfortantes”.'
            />
            <Carousel
              title="Gii Morales"
              text='"¡La mejor de todas! Súper recomendable, quiero y tendría que volver a ir pero siempre cuelgo”.'
            />
            <Carousel
              title="Julieta"
              text='"¡Muy linda experiencia! Volvería a ir sin dudas”.'
            />
          </div>
          <button className="carousel-control-prev ps-md-5" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next pe-md-5" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
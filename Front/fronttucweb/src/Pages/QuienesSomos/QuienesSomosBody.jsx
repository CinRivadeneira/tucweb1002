import React from 'react';
import Agustin from "../../Img/Nosotros/Agustin.jpg";
import Cinthia from "../../Img/Nosotros/Cinthia.jpg";
import LogoH from "../../Img/LogoH.png";
import "../../Css/Style.css"



const QuienesSomosBody = () => {
    return (
        <>
            <br /> <br /> 


            <h2 className="nosotros">EQUIPO</h2>
            <div className="contenedorE">
                <div className="gallery__iterm">
                    <img src={Agustin} width="120px" alt="Agustin Villarreal" className="gallery_img" />
                    <h2 className="gallery__title">Agustin Villarreal</h2>
                </div>

                <div className="contenedorE">
                    <div className="gallery__iterm">
                        <img src={Cinthia} width="120px" alt="Cinthia Rivadeneira" className="gallery_img" />
                        <h2 className="gallery__title">Cinthia Rivadeneira</h2>
                    </div>
                </div>
            </div>
            <br /> <br /> <br />




            <p className="intro">
                Radicados en la provincia de Tucumán, somos un equipo de profesionales dedicados a brindar soluciones
                digitales a empresas y personas que tienen como objetivo sumergirse en el ilimitado mundo del Internet.
                <br /> <br />
                Sin importar el tamaño de tu empresa, de lo que ofreces o de quien eres, manteniendo un objetivo claro, un
                compromiso que avale aquello que deseas conseguir y el conocimiento de todo lo que puedes lograr,
                beneficiarte y crecer con nuestros servicios es más que posible.
            </p>



            <h2 className="nosotros">SOMOS</h2>
            <br />
            <section className="logohorizontal">
                <img src={LogoH} width="200px" alt="logo" className="logoH" />
                <br /> <br />
            </section>
            <br /> <br />
        </>
    )
}


export default QuienesSomosBody;
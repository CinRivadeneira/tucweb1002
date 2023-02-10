
import React from 'react';
import "../../Css/Style.css"
import Programación from "../../Img/Servicios/Programación.png"
import Branding from "../../Img/Servicios/Branding.png"
import Marketing from "../../Img/Servicios/Marketing.png"



const InicioBody = () => {
    return (
        <>
            <br /> <br />
            <section classNameName="introduccion">
                <h2> Deje su empresa o emprendimiento en nuestras manos.
                    <br></br>
                    <br></br>
                    Te ayudamos a conseguir tus objetivos de alcance posicionando tu marca en los primeros resultados de búsqueda.
                </h2>
            </section>

            <br /> <br />
            <h1> NUESTROS SERVICIOS </h1>
            <br /> <br />

            <section className="servicios">
                <div className="cardcontainer" >
                    <div className="card" > <br /> <br />
                        <div className="iconitos">
                            <img src={Programación} width="120px" alt="programación" />
                            <br />
                        </div>
                        <div className="contenido">
                            <h3>PROGRAMACIÓN WEB</h3>
                            <br />
                            En base a tus necesidades y completamente personalizable creamos y desarrollamos un sitio web
                            profesional en el que tus posibles clientes llegarán de una manera mucho más directa hacia ti, a
                            tu
                            servicio o a tu empresa.
                            <br /> <br />
                            Con alojamiento pago, dominio .com, diseño adaptable, formulario de contacto, carrito de compras
                            y
                            las
                            últimas medidas de seguridad, tu página obtendrá la optimización necesaria para un crecimiento y
                            mantenimiento orgánico dentro de los buscadores.
                        </div>
                    </div>
                </div>

                <div className="cardcontainer" >
                    <div className="card" > <br /> <br />
                        <div className="iconitos">
                            <img src={Branding} width="120px" alt="branding" />
                            <br />
                        </div>
                        <div className="contenido">
                            <h3>BRANDING</h3>
                            <br />
                            ¿Tu marca es nueva?
                            <br />
                            La lanzamos al mercado tras hacer un intenso estudio previo. Identificaremos tus fortalezas,
                            oportunidades, debilidades y amenazas.
                            <br />
                            En conjunto planearemos y
                            crearemos campañas que impacten y que muestren tu producto o servicio de manera tal que el
                            consumidor final se sienta visiblemente atraído y comience a generar sentimiento por lo que
                            ofreces.
                            <br /> <br />
                            Si tu marca ya se encuentra en el mercado o es reconocida, la optimizamos para un mayor alcance
                            brindándote la oportunidad de llegar a nuevos clientes, expandiendo así tu marca personal o
                            corporativa.
                        </div>
                    </div>
                </div>

                <div className="cardcontainer" >
                    <div className="card" > <br /> <br />
                        <div className="iconitos">
                            <img src={Marketing} width="120px" alt="branding" />
                            <br />
                        </div>
                        <div className="contenido">
                            <h3>MARKETING</h3>
                            <br />
                            Administramos, monitoreamos y optimizamos cada una de tus redes sociales con contenido de valor que sea beneficioso para el receptor.
                            <br /> <br />
                            Nos encargamos de desarrollar posteos y artículos, de mantenernos en contacto con los clientes
                            generando un vínculo amigable y de hacerles seguimiento.
                            <br /> <br />
                            Impulsaremos tu marca con campañas SEO y SEM que serán analizadas, monitoreadas y ajustadas
                            mensualmente.
                        </div>
                    </div>
                </div>
            </section>
            <br /> <br />
        </>
    )
}
export default InicioBody;
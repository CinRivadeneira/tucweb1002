
import Face from "../Img/Redes/Face.png"
import Insta from "../Img/Redes/Insta.png"
import Github from "../Img/Redes/Github.png"
import Linkedin from "../Img/Redes/Linkedin.png"
import "../Css/Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
            <footer>
                <div className="redes">
                    <img src={Face} width="30" alt="face" />
                    <img src={Insta} width="30" alt="insta" />
                    <img src={Github} width="34" alt="Github" />
                    <img src={Linkedin} width="30" alt="Linkedin" />
                </div>
                <div className="menufooter">
                    <Link to="/quienessomos"> Quienes somos  </Link>
                    <Link to="/quienessomos"> — </Link>

                    <Link to="/contacto"> Contacto —</Link>
                    <Link to="/usuarios">   Usuarios </Link>
                </div>
                <div class="copy">
                    tucWEB 2023,  © Todos los derechos reservados.
                </div>
            </footer>
    )
}

export default Footer;
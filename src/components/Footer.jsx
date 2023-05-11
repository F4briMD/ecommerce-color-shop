
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <div>
            <div className="curve">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#ffff" fill-opacity="0.7" d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,101.3C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <div className="container-footer">
                <section className="grid-footer">
                    <div className="links-footer">
                        <div className="redes">
                            <h4>Nuestras Redes</h4>
                            <a href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.twitter.com/">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                        </div>
                    </div>
                    <div className="links-footer">
                        <ul>
                            <h4>Pagos</h4>
                            <li>Compras</li>
                            <li>Creditos</li>
                            <li>Tranferencias</li>
                            <li>Promociones</li>
                            <li>Saber Mas</li>
                        </ul>
                    </div>
                    <div className="links-footer">
                        <ul>
                            <h4>Contactanos</h4>
                            <li>Politicas de Privacidad</li>
                            <li>Trabajos con Nosotros</li>
                            <li>Donde estamos?</li>
                            <li>Comunidad</li>
                            <li>Preguntas frecuentes</li>
                        </ul>
                    </div>

                </section>
                <p>© 2022 Progamacion Web Avanzado</p>
            </div>
        </div>
    )
}
import './styles.css';
import { ReactComponent as Youtube } from '../assets/youtube.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';

function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
            <a href="https;//www.youtube.com/c/DevSuperior" target="_new"> 
            <Youtube />
            </a>
            <a href="https;//www.linkedin.com/school/devsuperior/" target="_new"> 
            <Linkedin />
            </a>
            <a href="https;//www.instagram.com/devsuperior.id/" target="_new"> 
            <Instagram />
            </a>

        </div>
        </footer>
    )
}

export default Footer;
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__description">
                <img
                    src="../assets/icons/aimelogo2.jpeg"
                    alt="Logo Aimé Accesorios"
                    className="aime-store"
                />
                <p className="footer-text">Aimé es una empresa familiar que nació por la necesidad de compartir con las personas nuestros accesorios, nuestro objetivo es ayudarte a encontrar tu accesorio ideal</p>
            </div>
            <div className="footer__contact">
                <h3 className="footer-title">Diseñado por Maru</h3>
                            </div>
            <div className="footer__extra-data">
                <ul>
                    <li>Legales</li>
                    <li>Política de devolución</li>
                    <li>Política de datos</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
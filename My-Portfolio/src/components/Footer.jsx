import facebook from "../img/facebook.png";
import github from "../img/github.png";
import instagram from "../img/instagram.png";
import link from "../img/link2.png";

export default function Footer() {
    return(
        <footer className="footer-container">
            <a href="https://github.com/TravisHaynie" target="_blank"><img className="width" src={github} alt="github image" /></a>
            <a href="https://www.facebook.com/tchaynie" target="_blank"><img className="width" src={facebook} alt="facebook image" /></a>
            <a href="https://www.instagram.com/travishaynie/" target="_blank"><img className="width" src={instagram} alt="instagram image" /></a>
            <a href="https://www.linkedin.com/in/travis-haynie-472b42319/" target="_blank"><img className="width" src={link} alt="instagram image" /></a>
        </footer>
    )
}
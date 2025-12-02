import facebook from "../img/facebook.png"
import github from "../img/github.png"
import instagram from "../img/instagram.png"

export default function Footer() {
    return(
        <footer className="footer-container">
            <a href="https://github.com/TravisHaynie"><img className="width margin" src={github} alt="github image" /></a>
            <a href="https://www.facebook.com/tchaynie"><img className="width " src={facebook} alt="facebook image" /></a>
            <a href="https://www.instagram.com/travishaynie/"><img className="width margin" src={instagram} alt="instagram image" /></a>
        </footer>
    )
}
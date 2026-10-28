import PortfolioImg from "./../img/Profile-pic.jpg"
import Nav from "./Nav"
export default function Header() {
    return(
        <>
            <header className="header white">
                <div className="img-div">
                    <img src={PortfolioImg} className="portfolio-img" alt="picture of a man in a suite smiling" />
                </div>
                <h1 className="name">Travis Haynie</h1>
                <p className="title">Front-End Developer | Technical Support Analyst</p>
                <Nav />
            </header>
        </>
    )
}
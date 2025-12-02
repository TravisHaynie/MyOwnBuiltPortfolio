import MovieWatchlistImg from "./../img/Movie-watchlist.jpeg"
import MyPortfolio from "./../img/My-portfolio.jpeg"
import GetCOlorSchemes from "./../img/get-color-schemes.jpeg"

export default function Projects() {
  return (
    
      <div className="padding-wraper">
        <h2 className="projects-title" id="projects">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h2 className="project-titles">Movie Watchlist</h2>
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <h2 className="project-titles">My React Portfolio</h2>
            <a href="https://my-porfolio-travis.netlify.app/" target="_blank"><img src={MyPortfolio} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <h2 className="project-titles">Color Scheme Generator</h2>
            <a href="https://dazzling-choux-44e22b.netlify.app/" target="_blank"><img src={GetCOlorSchemes} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <h2 className="project-titles">Aws Project(soon to be released)</h2>
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
          </div>
        </div>
      </div>
  );
}

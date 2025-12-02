import MovieWatchlistImg from "./../img/Movie-watchlist.jpeg"
import MyPortfolio from "./../img/My-portfolio.jpeg"

export default function Projects() {
  return (
    <>
        <h2 className="projects-title" id="projects">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <a href="https://my-porfolio-travis.netlify.app/" target="_blank"><img src={MyPortfolio} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
          </div>
        </div>
    </>
  );
}

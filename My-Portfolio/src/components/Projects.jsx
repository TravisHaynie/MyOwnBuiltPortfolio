import MovieWatchlistImg from "./../img/Movie-watchlist.jpeg"

export default function Projects() {
  return (
    <>
        <h2 className="projects-title" id="projects-container">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
          </div>
           <div className="project-card">
            <a href="https://moviewatchlistscrimba.netlify.app/" target="_blank"><img src={MovieWatchlistImg} className="project-img"alt="movie-watchlist" /></a>
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

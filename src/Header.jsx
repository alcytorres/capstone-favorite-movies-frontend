// import { Link } from "react-router-dom";
import { LogoutLink } from './LogoutLink';

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Movies App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Watchlist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favoritemovies">Favorites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies/new">Add a Movie</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Authentication
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/signup">Signup</a></li>
                <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li className="dropdown-item"><LogoutLink /></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


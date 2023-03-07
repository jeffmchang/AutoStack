import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="dropdown">
          <NavLink className="nav-link text-white dropdown-toggle" to="manufacturers" type="button" data-bs-toggle="dropdown" aria-expanded="false">Manufacturers</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="manufacturers">List Manufacturers</NavLink></li>
            <li><NavLink className="dropdown-item" to="manufacturers/new">Create Manufacturer</NavLink></li>
          </ul>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

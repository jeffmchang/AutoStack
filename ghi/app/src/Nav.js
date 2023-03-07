import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>

        {/* manufacturer dropdown.................................................... */}
        <div className="dropdown">
          <NavLink className="nav-link text-white dropdown-toggle" to="manufacturers" type="button" data-bs-toggle="dropdown" aria-expanded="false">Manufacturers</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="manufacturers">List of Manufacturers</NavLink></li>
            <li><NavLink className="dropdown-item" to="manufacturers/new">Create a Manufacturer</NavLink></li>
          </ul>
        </div>

        {/* vehicle models dropdown.................................................... */}
        <div className="dropdown">
          <NavLink className="nav-link text-white dropdown-toggle" to="vehicles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Vehicle Models</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="vehicles">List of Vehicle Models</NavLink></li>
            <li><NavLink className="dropdown-item" to="vehicles/new">Create a Vehicle Model</NavLink></li>
          </ul>
        </div>

        {/* automobile dropdown.................................................... */}
        <div className="dropdown">
          <NavLink className="nav-link text-white dropdown-toggle" to="automobiles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Automobiles</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="automobiles">List of Automobiles</NavLink></li>
            <li><NavLink className="dropdown-item" to="automobiles/new">Create a Automobile</NavLink></li>
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

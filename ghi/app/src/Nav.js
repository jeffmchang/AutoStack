import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>

        {/* collapse bar............................................................*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* manufacturer dropdown.................................................... */}
            <div className="dropdown">
              <Link className="nav-link text-white dropdown-toggle" to="manufacturers" type="button" data-bs-toggle="dropdown" aria-expanded="false">Manufacturers</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="manufacturers">List of Manufacturers</Link></li>
                <li><Link className="dropdown-item" to="manufacturers/new">Create A Manufacturer</Link></li>
              </ul>
            </div>

            {/* vehicle models dropdown.................................................... */}
            <div className="dropdown">
              <Link className="nav-link text-white dropdown-toggle" to="vehicles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Vehicle Models</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="models">List of Vehicle Models</Link></li>
                <li><Link className="dropdown-item" to="models/new">Create a Vehicle Model</Link></li>
              </ul>
            </div>

            {/* automobile dropdown.................................................... */}
            <div className="dropdown">
              <Link className="nav-link text-white dropdown-toggle" to="automobiles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Automobiles</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="automobiles">List of Automobiles</Link></li>
                <li><Link className="dropdown-item" to="automobiles/new">Create an Automobile</Link></li>
              </ul>
            </div>

            {/* Sales------------------------------------------------------- */}
            <div className="dropdown">
              <Link className="nav-link text-white dropdown-toggle" to="automobiles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sales</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="sales/new">Record New Sale</Link></li>
                <li><Link className="dropdown-item" to="salesperson/new">Add New Salesperson</Link></li>
                <li><Link className="dropdown-item" to="customers/new">Add New Customer</Link></li>
                <li><Link className="dropdown-item" to="salesperson/history">Salesperson History</Link></li>
                <li><Link className="dropdown-item" to="sales">All Sales</Link></li>
              </ul>
            </div>

            {/* Services------------------------------------------------------- */}
            <div className="dropdown">
              <Link className="nav-link text-white dropdown-toggle" to="technicians" type="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="technicians/new">Create A New Technician</Link></li>
                <li><Link className="dropdown-item" to="appointments/">Service Appointment List</Link></li>
                <li><Link className="dropdown-item" to="appointments/history">Service Appointment History</Link></li>
                <li><Link className="dropdown-item" to="appointments/new">Create A New Service Appointment</Link></li>
              </ul>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

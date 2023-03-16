import { NavLink, Link } from 'react-router-dom';
import image from './Thank.png';
import './css/styles.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src={image}/></NavLink>

        {/* collapse bar............................................................*/}
        <button className="navbar-toggler text-body-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* manufacturer dropdown.................................................... */}
            <div className="dropdown">
              <Link className="nav-link text-dark" to="manufacturers">Manufacturers</Link>
            </div>

            {/* vehicle models dropdown.................................................... */}
            <div className="dropdown">
              <Link className="nav-link text-dark dropdown-toggle" to="vehicles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Vehicle Models</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" id='mainpage' to="models">List of Vehicle Models</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="models/new">Add a Vehicle Model</Link></li>
              </ul>
            </div>

            {/* automobile dropdown.................................................... */}
            <div className="dropdown">
              <Link className="nav-link text-dark dropdown-toggle" to="automobiles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Automobiles</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" id='mainpage' to="automobiles">List of Automobiles</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="automobiles/new">Add an Automobile</Link></li>
              </ul>
            </div>

          {/* Services------------------------------------------------------- */}
          <div className="dropdown">
              <Link className="nav-link text-dark dropdown-toggle" to="technicians" type="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" id='mainpage' to="technicians"> Our Technicians</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="appointments/new">Schedule A Service Appointment</Link></li>
                <li><Link className="dropdown-item" id='mainpage'to="appointments/">Service Appointments</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="appointments/history">Service Appointment History</Link></li>
              </ul>
            </div>

            {/* Sales------------------------------------------------------- */}
            <div className="dropdown">
              <Link className="nav-link text-dark dropdown-toggle" to="automobiles" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sales</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" id='mainpage' to="customers/new">Add New Customer</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="salesperson">Our Sales People</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="sales/new">Record A New Sale</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="salesperson/history">Salesperson History</Link></li>
                <li><Link className="dropdown-item" id='mainpage' to="sales">All Sales</Link></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

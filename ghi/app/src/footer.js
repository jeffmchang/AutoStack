import "./fonts.css";
import image from "./footer.png";

function Footer() {
    return (
    <div className="container footer">
    <footer className="row row-cols-5 py-4 my-5 border-top" id="footerColor">
        <div className="col">
        <a to="/" className="d-flex align-items-center mb-1 mt-3 mx-1 link-dark text-decoration-none">
            <img src={image}/>
        </a>
        <p className="text-muted mx-3">© 2021</p>
        </div>

        <div className="col">

        </div>

        <div className="col">
        <h5>Section</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Pricing</a></li>
        </ul>
        </div>

        <div className="col">
        <h5>Section</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Pricing</a></li>

        </ul>
        </div>

        <div className="col">
        <h5>Section</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Pricing</a></li>
        </ul>
        </div>
    </footer>
    </div>

    );
}

export default Footer;

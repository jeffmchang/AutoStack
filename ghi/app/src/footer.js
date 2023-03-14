import "./styles.css";
import image from "./footer.png";

function Footer() {
    return (

    <footer className="row row-cols-5 border-top" id="footerColor">
        <div className="col">
        <a to="/" className="d-flex align-items-center mb-1 mt-3 mx-1 link-dark text-decoration-none">
            <img src={image}/>
        </a>
        <p className="text-muted mx-3">© 2021</p>
        </div>

        <div className="col">

        </div>

        <div className="col">
        <h5>Contact Us</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Support</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Email</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Pricing</a></li>
        </ul>
        </div>

        <div className="col">
        <h5>Socials</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">TikTok</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Instagram</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">Facebook</a></li>

        </ul>
        </div>

        <div className="col">
        <h5>Address</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">1232 Pocahontas Way, CA 92877</a></li>
            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-muted">PO. Box #4123</a></li>
        </ul>
        </div>
    </footer>


    );
}

export default Footer;

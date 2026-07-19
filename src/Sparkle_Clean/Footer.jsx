import "./Sparkle_Clean.css/Footer.css";
import logoLight from "../assets/logo-light.svg";

function Footer() {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row gy-5">
          {/* Logo */}

          <div className="col-lg-4 col-md-6">
            <img
              src={logoLight}
              alt="logo"
              className="footer-logo mb-4"
            />

            <p className="footer-text">
              Professional cleaning services for homes and offices. Insured,
              bonded, and eco-friendly.
            </p>

            <div className="social-icons mt-4">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Services */}

          <div className="col-lg-2 col-md-6">
            <h5>SERVICES</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">Regular Cleaning</a>
              </li>
              <li>
                <a href="#">Deep Cleaning</a>
              </li>
              <li>
                <a href="#">Move-In/Out</a>
              </li>
              <li>
                <a href="#">Commercial</a>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div className="col-lg-2 col-md-6">
            <h5>RESOURCES</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">Cleaning Checklist</a>
              </li>
              <li>
                <a href="#">Service Areas</a>
              </li>
              <li>
                <a href="#">Quote Calculator</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div className="col-lg-2 col-md-6">
            <h5>COMPANY</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className="col-lg-2 col-md-6">
            <h5>CONTACT US</h5>

            <ul className="list-unstyled contact-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                456 Clean Street <br />
                Portland, OR 97201
              </li>

              <li>
                <i className="fa-solid fa-phone"></i>
                (555) 867-5309
              </li>

              <li>
                <i className="fa-solid fa-envelope"></i>
                hello@sparkleclean.com
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="bottom-footer d-flex justify-content-between align-items-center flex-wrap">
          <p>© 2026 SparkleClean Pro. All rights reserved.</p>

          <div>
            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Style Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import "./Sparkle_Clean.css/PageContact.css";
import { Link } from "react-router-dom";
import "./Sparkle_Clean.css/Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./Sparkle_Clean.css/Footer.css";
import logoLight from "../assets/logo-light.svg";

function PageContact() {
  return (
    <>
      <div className="header-contact">
        <h1 className="hidden-up">Contact Us</h1>
        <p className="hidden-up">
          Ready for a cleaner space? Reach out and we will get back to you
          within 2 hours.
        </p>

        <div className="breadcrumb-div hidden-up">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className=" nav-link">
                  Home
                </Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="contact section-padding hidden-up" id="contact">
        <div className="container-xxl con-con">
          <div className="contact-title">
            <span>Contact</span>
            <h2>Get in Touch</h2>
            <p>
              Ready for a cleaner space? Book your cleaning or ask us a
              question.
            </p>
          </div>

          <div className="row gx-5">
            <div className="contact-form col-md-8 col-lg-8 col-xl-8 col-sm-12">
              <div className="input-row">
                <div className="input-box">
                  <label>Full Name</label>
                  <input type="text" placeholder="Jane Smith" />
                </div>

                <div className="input-box">
                  <label>Email Address</label>
                  <input type="email" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-box">
                  <label>Phone Number</label>
                  <input type="text" placeholder="(555) 000-0000" />
                </div>

                <div className="input-box">
                  <label>Service Needed</label>

                  <select>
                    <option>Select a service</option>
                    <option>Standard Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In Cleaning</option>
                    <option>Move Out Cleaning</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Preferred Date</label>

                <input type="date" />
              </div>

              <div className="input-box">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your cleaning needs..."
                ></textarea>
              </div>

              <button>Request Cleaning</button>
            </div>

            <div className="contact-info col-md-4 col-lg-4 col-xl-4 col-sm-12">
              <div className="info-box">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5>Visit Us</h5>

                  <p>
                    456 Clean Street
                    <br />
                    Portland, OR 97201
                  </p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h5>Call Us</h5>

                  <p>(555) 867-5309</p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email Us</h5>

                  <p>hello@sparkleclean.com</p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">
                  <FaClock />
                </div>

                <div>
                  <h5>Office Hours</h5>

                  <p>
                    Monday - Friday &nbsp;&nbsp;&nbsp; 7:00 AM - 7:00 PM
                    <br />
                    Saturday
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    8:00 AM - 5:00 PM
                    <br />
                    Sunday
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="map-box">
                <iframe
                  title="SparkleClean Location"
                  src="https://www.google.com/maps?q=Portland,+Oregon&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer pt-5">
        <div className="container">
          <div className="row gy-5">
            {/* Logo */}

            <div className="col-lg-4 col-md-6">
              <img src={logoLight} alt="logo" className="footer-logo mb-4" />

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
    </>
  );
}

export default PageContact;

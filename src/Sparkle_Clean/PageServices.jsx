import { Link } from "react-router-dom";
import "./Sparkle_Clean.css/Services.css";
import "./Sparkle_Clean.css/PageServices.css";
import logoLight from "../assets/logo-light.svg";
import "./Sparkle_Clean.css/Footer.css";

function PageServices() {
  return (
    <>
      <section>
        <div className="header-services">
          <h1>Our Services</h1>
          <p>
            Professional cleaning solutions for homes, offices, and everything
            in between.
          </p>

          <div className="breadcrumb-div">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className=" nav-link">
                    Home
                  </Link>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="titles-services mb-5">
          <span>Our Services</span>
          <h1>Complete Cleaning Solutions</h1>
          <p>
            From regular home maintenance to specialized commercial cleaning, we
            provide the full spectrum of professional cleaning services.
          </p>
        </div>

        <div className=" container-xxl">
          <div className=" row gx-4 gy-5 row-services">
            <div className=" col-md-6 col-lg-4 col-sm-12">
              <div className="card-service card">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={45}
                  height={45}
                  style={{ color: "rgb(5, 250, 213)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>

                <h4>Regular Cleaning</h4>
                <p>
                  Weekly, bi-weekly, or monthly visits to keep your home
                  consistently fresh, tidy, and welcoming for your family.
                </p>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-sm-12">
              <div className="card-service card">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={45}
                  height={45}
                  style={{ color: "rgb(5, 250, 213)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>

                <h4>Deep Cleaning</h4>
                <p>
                  An intensive top-to-bottom clean that reaches every corner,
                  baseboard, and hidden surface for a like-new feeling.
                </p>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-sm-12">
              <div className="card-service card">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={45}
                  height={45}
                  style={{ color: "rgb(5, 250, 213)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>

                <h4>Move-In/Out Cleaning</h4>
                <p>
                  Comprehensive cleaning before you settle in or after you move
                  out, helping you get your full deposit back.
                </p>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-sm-12">
              <div className="card-service card">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={45}
                  height={45}
                  style={{ color: "rgb(5, 250, 213)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <h4>Commercial Cleaning</h4>
                <p>
                  Flexible office and retail cleaning schedules tailored to your
                  business hours and specific requirements.
                </p>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-sm-12">
              <div className="card-service card">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={45}
                  height={45}
                  style={{ color: "rgb(5, 250, 213)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>

                <h4>Post-Construction</h4>
                <p>
                  Dust, debris, and residue removal after renovations or new
                  construction, making your space move-in ready.
                </p>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-sm-12">
              <div className="card-service card">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={45}
                  height={45}
                  style={{ color: "rgb(5, 250, 213)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <h4>Green Cleaning</h4>
                <p>
                  100% eco-friendly products that are safe for children, pets,
                  and theenvironment without sacrificing cleaning power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className=" container-xxl">
          <div className=" title-hiw">
            <h1>How It Works</h1>
            <p>
              Getting your space cleaned is simple. Here is our four-step
              process.
            </p>
          </div>
          <div className="row gx-4 gy-3 row-hiw">
            <div className=" col-md-6 col-xl-3 col-sm-12 col-lg-3">
              <span>1</span>
              <h4>Book Online</h4>
              <p>
                Choose your service, pick a date and time, and get an instant
                quote in under a minute.
              </p>
            </div>
            <div className=" col-md-6 col-xl-3 col-sm-12 col-lg-3">
              <span>2</span>
              <h4>We Prepare</h4>
              <p>
                Our team reviews your requirements and arrives with all
                necessary supplies and equipment.
              </p>
            </div>
            <div className=" col-md-6 col-xl-3 col-sm-12 col-lg-3">
              <span>3</span>
              <h4>We Clean</h4>
              <p>
                Our trained professionals follow a detailed checklist to ensure
                nothing is missed.
              </p>
            </div>
            <div className=" col-md-6 col-xl-3 col-sm-12 col-lg-3">
              <span>4</span>
              <h4>You Inspect</h4>
              <p>
                Walk through the results. If anything is not perfect, we will
                fix it on the spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cleaner-home">
        <div className="container">
          <h1>Ready for a Spotless Space?</h1>

          <p>
            Book your cleaning today and experience the SparkleClean difference.
          </p>

          <div className="buttons">
            <button>
              Get Free Quote
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </button>

            <button>
              <i className="fa-solid fa-phone me-2"></i>
              Call Now
            </button>
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

export default PageServices;

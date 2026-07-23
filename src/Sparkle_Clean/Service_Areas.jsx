import "./Sparkle_Clean.css/Service_Areas.css";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo-light.svg";

function Service_Areas() {
  const areas = [
    {
      id: 1,
      title: "Downtown Austin",
      description:
        "Central Austin including the Capitol district, Rainey Street, and East 6th.",
      zip: "78701 - 78703",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 2,
      title: "South Austin",
      description:
        "South Congress, Zilker, Barton Hills, and surrounding neighborhoods.",
      zip: "78704 - 78745",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 3,
      title: "North Austin",
      description:
        "The Domain, North Loop, Crestview, and North Shoal Creek areas.",
      zip: "78751 - 78759",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 4,
      title: "East Austin",
      description:
        "Mueller, Holly, East Cesar Chavez, and Govalle neighborhoods.",
      zip: "78702 - 78723",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 5,
      title: "West Austin",
      description: "Tarrytown, Westlake Hills, Rollingwood, and Bee Cave.",
      zip: "78731 - 78746",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 6,
      title: "Round Rock",
      description:
        "Round Rock proper, Old Settlers Park area, and surrounding communities.",
      zip: "78664 - 78681",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 7,
      title: "Cedar Park",
      description: "Cedar Park, Leander, and the 183A corridor communities.",
      zip: "78613 - 78641",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 8,
      title: "Pflugerville",
      description: "Pflugerville, Wells Branch, and Dessau area neighborhoods.",
      zip: "78660 - 78691",
      icon: "fa-solid fa-location-dot",
    },
  ];
  return (
    <>
      <div className="header-blog">
        <h1 className="hidden-up">Areas We Serve</h1>
        <p className="hidden-up">
          SparkleClean proudly serves Austin and surrounding communities. Check
          if we cover your area.
        </p>

        <div className="breadcrumb-div mt-5 hidden-up">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className=" nav-link">
                  Home
                </Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Service Areas
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className=" code-box hidden-up">
        <div className="code">
          <h3>Check Your Area</h3>
          <p>Enter your ZIP code to see if we serve your neighborhood.</p>

          <div className="zip-form">
            <input
              type="number"
              className="form-control"
              placeholder="Enter ZIP Code"
            />

            <button>Check</button>
          </div>
        </div>
      </div>
      <section className="service-areas">
        <div className="container">
          <div className="row g-4">
            {areas.map((area) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3 col-sm-12 hidden-up"
                key={area.id}
              >
                <div className="area-card">
                  <div className="area-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <span className="zip">ZIP: {area.zip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cleaner-home hidden-up">
        <div className="container">
          <h1>Don't See Your Area?</h1>

          <p>
            We're constantly expanding our service area. Contact us to check
            <br /> availability or be added to our notification list.
          </p>

          <button className=" btn-light btn text-info fw-bold">
            Contact Us
          </button>
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

export default Service_Areas;

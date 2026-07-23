import { useState } from "react";
import "./Sparkle_Clean.css/Cleaning_Checklist.css";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo-light.svg";

function CleaningChecklist() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      title: "Kitchen",
      icon: "fa-solid fa-kitchen-set",
      items: [
        "Clean and sanitize all countertops",
        "Scrub sink and polish fixtures",
        "Clean stovetop and range hood exterior",
        "Wipe down all appliance exteriors",
        "Clean microwave inside and out",
        "Wipe cabinet fronts and handles",
        "Empty trash and replace liner",
        "Sweep and mop floors",
      ],
    },
    {
      title: "Bathroom",
      icon: "fa-solid fa-sink",
      items: [
        "Scrub toilet",
        "Clean shower",
        "Wash mirrors",
        "Disinfect sink",
        "Clean grout",
        "Replace towels",
        "Mop the floor",
      ],
    },
    {
      title: "Living Areas",
      icon: "fa-solid fa-couch",
      items: [
        "Dust furniture",
        "Vacuum carpet",
        "Clean windows",
        "Dust TV",
        "Organize shelves",
        "Fluff cushions",
        "Mop floors",
        "Empty trash",
      ],
    },
    {
      title: "Bedrooms",
      icon: "fa-solid fa-bed",
      items: [
        "Make the bed",
        "Vacuum floor",
        "Dust furniture",
        "Organize closet",
        "Wash bedding",
        "Clean mirrors",
      ],
    },
  ];

  return (
    <>
      <div className="header-blog">
        <h1 className="hidden-up">What's Included</h1>
        <p className="hidden-up">
          See exactly what our cleaning professionals tackle in every room.
          Transparency is at the heart of everything we do.
        </p>

        <div className="breadcrumb-div mt-5 hidden-up">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Cleaning CheckList
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="checklist">
        {data.map((room, index) => (
          <div className="accordion-card hidden-up" key={index}>
            <div
              className="accordion-header"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="left">
                <div className="icon">
                  <i className={room.icon}></i>
                </div>

                <div>
                  <h3>{room.title}</h3>
                  <span>{room.items.length} items</span>
                </div>
              </div>

              <i
                className={`fa-solid fa-chevron-down arrow ${
                  open === index ? "rotate" : ""
                }`}
              ></i>
            </div>

            {open === index && (
              <div className="accordion-body">
                {room.items.map((item, i) => (
                  <p key={i}>
                    <i className="fa-solid fa-check"></i> {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className=" justify-content-center d-flex align-items-center hidden-up">
          <div className=" text-center mt-5">
            <p className=" lead mb-4">
              Ready to experience our thorough cleaning process?
            </p>
            <button className=" btn btn-lg">Get Free Quote</button>
          </div>
        </div>
      </section>

      <footer className="footer pt-5 mt-5">
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

export default CleaningChecklist;

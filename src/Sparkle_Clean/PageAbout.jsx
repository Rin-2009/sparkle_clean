import "./Sparkle_Clean.css/PageAbout.css";
import { Link } from "react-router-dom";
import sparkle_img5 from "../assets/sparkle_img5.png";
import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import logoLight from "../assets/logo-light.svg";
import "./Sparkle_Clean.css/Footer.css";
function PageAbout() {
  return (
    <>
      <section className="pageAbout">
        <div className="header-about">
          <h1 className="hidden-up">About SparkleClean</h1>
          <p className="hidden-up">
            Austin's trusted cleaning professionals since 2018. Insured, bonded,
            and eco-friendly
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
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className=" container-xxl container-about">
          <div className="row gx-5  row-about hidden-up">
            <div className=" col-md-12 col-sm-12 col-lg-6 col-xl-6 ">
              <div className="col-texts">
                <span>Our Story</span>
                <h2>Cleaning with Heart</h2>
                <b>
                  “To deliver exceptional cleaning services that give people
                  back their time, using safe products and reliable teams who
                  treat every home like their own.”
                </b>
                <p>
                  SparkleClean was founded in 2018 by Maria Vasquez, a lifelong
                  Austin resident who saw a gap in the market for truly
                  reliable, eco-conscious cleaning services. What started as a
                  one-woman operation has grown into a team of 40+ trained
                  cleaning professionals serving the greater Austin area. We
                  believe a clean home should not come at the cost of your
                  health or the environment. That is why every product we use is
                  EPA-certified, cruelty-free, and safe for families with
                  children and pets. Our rigorous hiring process includes
                  background checks, skills training, and ongoing quality
                  assurance.
                </p>
              </div>
            </div>
            <div className=" col-md-12 col-sm-12 col-lg-6 col-xl-6">
              <div className="col-img">
                <img src={sparkle_img5} alt="" />
              </div>
            </div>
          </div>
        </div>

        <section className="cards-about hidden-up">
          <div className=" container-xxl container-cards">
            <div className=" title-cards">
              <h1>Our Core Values</h1>
              <p>The principles that drive every clean we do.</p>
            </div>

            <div className=" row gx-4 gy-4">
              <div className=" col-md-6 col-lg-6 col-xl-4 col-sm-12">
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

                  <h4>Reliability</h4>
                  <p>
                    We show up on time, every time. Our teams are
                    background-checked, insured, and trained to deliver
                    consistent quality.
                  </p>
                </div>
              </div>
              <div className=" col-md-6 col-lg-6 col-xl-4 col-sm-12">
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

                  <h4>Eco-Friendly</h4>
                  <p>
                    We use only EPA-certified, green cleaning products that are
                    safe for children, pets, and the environment without
                    sacrificing results.
                  </p>
                </div>
              </div>
              <div className=" col-md-6 col-lg-6 col-xl-4 col-sm-12">
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

                  <h4>Customer First</h4>
                  <p>
                    Your satisfaction is our top priority. If you are not happy
                    with any part of our service, we will re-clean it for free
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team hidden-up">
          <div className="container-xxl">
            <div className="title-team">
              <h1>Meet Our Team</h1>
              <p>The people behind the sparkle.</p>
            </div>
            <div className="row gx-4 gy-4 row-team">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="div">
                  <img src={S1} alt="Carlos Rivera" />
                  <div>
                    <h5>Carlos Rivera</h5>
                    <p>Commercial Division Head</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="div">
                  <img src={S2} alt="Aisha Patel" />
                  <div>
                    <h5>Aisha Patel</h5>
                    <p>Quality Assurance Lead</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="div">
                  <img src={S3} alt="James Cooper" />
                  <div>
                    <h5>James Cooper</h5>
                    <p>Operations Manager</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="div">
                  <img src={S4} alt="Emma Wilson" />
                  <div>
                    <h5>Emma Wilson</h5>
                    <p>Customer Success Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cleaner-home hidden-up">
          <div className="container">
            <h1>Ready for a Cleaner Home?</h1>

            <p>
              Experience the SparkleClean difference. Book your first cleaning
              today.
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

export default PageAbout;

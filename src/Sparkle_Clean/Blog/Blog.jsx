import { useState } from "react";
import "../Sparkle_Clean.css/Footer.css";
import logoLight from "../Blog/blog_imgs/logo-light.svg";
import "../Sparkle_Clean.css/Blog.css";
import { Link } from "react-router-dom";
import { articles } from "./articlesData";

function Blog() {
  const [filter, setFilter] = useState("All");

  const filters =
    filter === "All" ? articles : articles.filter((i) => i.category === filter);
  return (
    <>
      <section>
        <div className="header-blog">
          <span className="hidden-up">Our Blog</span>
          <h1 className="hidden-up">Cleaning Tips & Insights</h1>
          <p className="hidden-up">
            Stay up to date with the latest cleaning tips, home care guides, and
            industry insights from our team.
          </p>

          <div className="breadcrumb-div hidden-up">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className=" nav-link text-decoration-none">
                    Home
                  </Link>
                </li>

                <li
                  className="breadcrumb-item active text-light"
                  aria-current="page"
                >
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section>
          <div className="container-fluid container-blog">
            <div className="search-and-filter hidden-up">
              <div className="search-box">
                <form>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search articles..."
                  />
                </form>

                <div className="filter-buttons">
                  <button onClick={() => setFilter("All")}>All</button>
                  <button onClick={() => setFilter("Tips")}>Tips</button>
                  <button onClick={() => setFilter("Guide")}>Guide</button>
                  <button onClick={() => setFilter("Lifestyle")}>
                    Lifestyle
                  </button>
                </div>
              </div>
            </div>

            <div className="row g-4 hidden-up">
              {filters.map((item) => (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
                  key={item.id}
                >
                  <Link
                    to={item.link}
                    className="text-decoration-none text-light"
                  >
                    <div className="div-blog">
                      <div className="main-img">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>

                      <div className="card-blog">
                        <div className="spans">
                          <b>{item.category}</b>
                          <span>{item.date}</span>
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <div className="commit">
                          <img src={item.img} alt={item.author} />

                          <div>
                            <h6>{item.author}</h6>
                            <p>{item.readTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="form-card hidden-up">
        <div className=" card-form card">
          <span>Newsletter</span>
          <h1>Stay in the Loop</h1>
          <p>
            Subscribe to our newsletter for the latest cleaning tips, seasonal
            checklists, and exclusive offers.
          </p>

          <form className="form">
            <input
              type="email"
              className=" form-control"
              placeholder="Your Email..."
            />
            <button>Subscribe</button>
          </form>
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

export default Blog;

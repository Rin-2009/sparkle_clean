import { useState } from "react";
import "../Sparkle_Clean.css/Footer.css";
import logoLight from "../Blog/blog_imgs/logo-light.svg";
import "../Sparkle_Clean.css/Blog.css";
import { Link } from "react-router-dom";
import img1 from "../Blog/blog_imgs/sparkle_img1.png";
import img2 from "../Blog/blog_imgs/sparkle_img2.png";
import img3 from "../Blog/blog_imgs/sparkle_img3.png";
import img4 from "../Blog/blog_imgs/sparkle_img4.png";
import img5 from "../Blog/blog_imgs/sparkle_img5.png";
import img6 from "../Blog/blog_imgs/sparkle_img6.png";
import S1 from "../Blog/blog_imgs/S1.png";
import S2 from "../Blog/blog_imgs/S2.png";
import S3 from "../Blog/blog_imgs/S3.png";
import S4 from "../Blog/blog_imgs/S4.png";

const articles = [
  {
    id: 1,
    image: img1,
    category: "Tips",
    date: "February 18, 2026",
    title: "5 Surprising Benefits of Professional Cleaning Services",
    description:
      "Beyond a clean home, professional cleaning offers health benefits, time savings, and even financial returns you might not expect.",
    author: "Carlos Rivera",
    img: S1,
    readTime: "6 min read",
  },
  {
    id: 2,
    image: img2,
    category: "Tips",
    date: "February 3, 2026",
    title: "10 Eco-Friendly Cleaning Tips That Actually Work",
    description:
      "Discover natural cleaning solutions using everyday household items. Better for your health, your family, and the environment.",
    author: "Aisha Patel",
    img: S2,
    readTime: "6 min read",
  },
  {
    id: 3,
    image: img3,
    category: "Guide",
    date: "January 28, 2026",
    title: "The Complete Guide to Cleaning Before Moving",
    description:
      "Whether moving in or out, this guide covers everything you need to know about pre-move cleaning to protect your deposit and start fresh.",
    author: "James Cooper",
    img: S3,
    readTime: "7 min read",
  },
  {
    id: 4,
    image: img4,
    category: "Guide",
    date: "January 15, 2026",
    title: "The Ultimate Spring Cleaning Checklist for Every Room",
    description:
      "A comprehensive room-by-room guide to deep cleaning your home this spring. From kitchen to bathroom, we cover every detail.",
    author: "Maria Vasquez",
    img: S4,
    readTime: "8 min read",
  },
  {
    id: 5,
    image: img5,
    category: "Guide",
    date: "December 10, 2025",
    title: "How Often Should You Deep Clean Your Home?",
    description:
      "A practical guide to deep cleaning frequency for every room. Learn the ideal schedule based on your household size and lifestyle.",
    author: "James Cooper",
    img: S2,
    readTime: "7 min read",
  },
  {
    id: 6,
    image: img6,
    category: "Lifestyle",
    date: "November 22, 2025",
    title: "7 Organizing Tips for a Clutter-Free Home",
    description:
      "Simple decluttering strategies that professional organizers swear by. Transform your space with these practical methods.",
    author: "Maria Vasquez",
    img: S2,
    readTime: "5 min read",
  },
];

function Blog() {
  const [filter, setFilter] = useState("All");

  const filters =
    filter === "All" ? articles : articles.filter((i) => i.category === filter);

  return (
    <>
      <section>
        <div className="header-blog">
          <span>Our Blog</span>
          <h1>Cleaning Tips & Insights</h1>
          <p>
            Stay up to date with the latest cleaning tips, home care guides, and
            industry insights from our team.
          </p>

          <div className="breadcrumb-div">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className=" nav-link">
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
            <div className="search-and-filter">
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

            <div className="row g-4">
              {filters.map((item) => (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
                  key={item.id}
                >
                  <Link
                    to={`/${item.id}`}
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
          ;
        </section>
      </section>

      <section className="form-card">
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

import { Link } from "react-router-dom";
import "./Sparkle_Clean.css/PagePricing.css";
import { useState } from "react";
import "./Sparkle_Clean.css/Footer.css";
import logoLight from "../assets/logo-light.svg";

function PagrPricing() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Are your cleaners insured and bonded?",
      answer:
        "Yes, SparkleClean carries up to $2 million in liability insurance and all our team members are fully bonded. Every cleaner passes a thorough background check before joining our team, so you can feel confident and secure.",
    },
    {
      id: 2,
      question: "What is included in a standard cleaning?",
      answer:
        "Our standard cleaning covers dusting all surfaces, vacuuming and mopping floors, kitchen cleaning (counters, sink, stovetop, exterior of appliances), bathroom sanitization (toilet, tub, shower, sink, mirrors), and trash removal from all rooms.",
    },
    {
      id: 3,
      question: "What cleaning products do you use?",
      answer:
        "We use EPA-certified, eco-friendly cleaning products that are safe for children, pets, and people with allergies. Our green cleaning line is free from harsh chemicals, ammonia, and bleach while still delivering professional-grade results.",
    },
    {
      id: 4,
      question: "How long does a typical cleaning take?",
      answer:
        "A standard cleaning for a 1,500 sq ft home typically takes 2–3 hours with a two-person team. Deep cleans may take 4–6 hours depending on the condition and size of the space. We always provide a time estimate before we begin.",
    },
    {
      id: 5,
      question: "Can I reschedule or cancel a cleaning?",
      answer:
        "Absolutely. We ask for at least 24 hours notice for rescheduling or cancellations at no charge. Changes made within 24 hours of the appointment may incur a small fee. You can reschedule through our website, app, or by calling our team.",
    },
  ];

  return (
    <>
      <section>
        <div className="header-pricing">
          <h1>Pricing</h1>
          <p>
            Transparent pricing with no hidden fees. Choose the plan that fits
            your needs.
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
                  Pricing
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="pagePricing" id="pricing">
          <div className=" container-xxl">
            <div className="title-pricing mb-5">
              <span>Pricing</span>
              <h1>Simple, Transparent Pricing</h1>
              <p>
                Every plan includes eco-friendly products, insured cleaners, and
                our satisfaction
              </p>
            </div>
            <div className=" row gx-4 gy-4">
              <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12">
                <div className="texts-1 card">
                  <span>Basic</span>
                  <p>Regular maintenance cleaning</p>
                  <h2>$99</h2>
                  <b>Starting at</b>

                  <div className="blocks">
                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Dusting all surfaces</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Vacuuming & mopping</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Kitchen & bathroom cleaning</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Trash removal</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={20}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>{" "}
                      </svg>
                      <small>Inside appliances</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={20}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>{" "}
                      </svg>
                      <small>Baseboards & blinds</small>
                    </div>
                  </div>
                  <button className="btn">Book Basic</button>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 col-lg-6  col-sm-12">
                <div className="texts-1 most card">
                  <em>Most Popular</em>
                  <span>Standard</span>
                  <p>Deep clean for a fresh start</p>
                  <h2>$179</h2>
                  <b>Starting at</b>

                  <div className="blocks">
                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Everything in Basic</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Inside appliances</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Baseboards & door frames</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Window sills & blinds</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Cabinet exteriors</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Light fixture cleaning</small>
                    </div>
                  </div>
                  <button className="btn">Book Standard</button>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 col-lg-6  col-sm-12">
                <div className="texts-1 card">
                  <span>Premium</span>
                  <p>Complete top-to-bottom service</p>
                  <h2>$299</h2>
                  <b>Starting at</b>

                  <div className="blocks">
                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Everything in Standard</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Inside cabinets & drawers</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Oven & fridge deep clean</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Wall spot cleaning</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Closet organization</small>
                    </div>

                    <div className="block">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={25}
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>{" "}
                      </svg>
                      <small>Priority scheduling</small>
                    </div>
                  </div>
                  <button className="btn">Book Premium</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="faq">
        <div className=" title-FAQ">
          <span>FAQ</span>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our cleaning services.</p>
        </div>

        <div>
          {faqData.map((item) => (
            <div className="faq-item" key={item.id}>
              <div
                className="faq-header"
                onClick={() => setOpen(open === item.id ? null : item.id)}
              >
                <h5>{item.question}</h5>
                <span>{open === item.id ? "×" : "+"}</span>
              </div>

              {open === item.id && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="cleaner-home">
        <div className="container">
          <h1>Need a Custom Quote?</h1>

          <p>
            Every space is unique. Contact us for a personalized quote tailored
            to your specific needs..
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

export default PagrPricing;

import "./Sparkle_Clean.css/Home.css";
import { useState, useEffect } from "react";
import Services from "./Services";
import Pricing from "./Pricing";
import Results from "./Results";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const text_list = [
    "Made Simple",
    "Eco-Friendly",
    "You Can Trust",
    "Guaranteed Spotless",
  ];

  const [text, setText] = useState(text_list[0]);

  useEffect(() => {
    const changeText = () => {
      const randomIndex = Math.floor(Math.random() * text_list.length);
      setText(text_list[randomIndex]);
    };

    const random = setInterval(changeText, 3000);

    return () => clearInterval(random);
  }, []);

  const selectedPlans = [
    {
      id: 1,
      t: "One-Time",
      amount: 315,
      s: "Save 0%",
    },
    {
      id: 2,
      t: "Weekly",
      amount: 221,
      s: "Save 30%",
    },
    {
      id: 3,
      t: "Bi-Weekly",
      amount: 252,
      s: "Save 20%",
    },
    {
      id: 4,
      t: "Monthly",
      amount: 284,
      s: "Save 10%",
    },
  ];

  const [selected, setSelected] = useState(selectedPlans[0]);
  const [range, setRange] = useState(500);
  const [rooms, setRooms] = useState(1);
  const [select, setSelect] = useState("House");

  const getSteps = (e) => {
    setRange(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <section className=" home">
        <div className=" container-xxl">
          <div className=" row g-5">
            <div className=" col-md-12 col-lg-6 col-sm-12 c-1">
              <span className="span-dot mb-5 ps-5">
                <span className="dot"></span> Instant Quote
              </span>

              <h1 className=" mt-4 display-1 fw-bold">
                Professional Cleaning,
              </h1>
              <h2 className="text" key={text}>
                {text}
              </h2>

              <p>
                Trusted by thousands of homeowners and businesses in Austin. Our
                insured, background-checked cleaning professionals use
                eco-friendly products to deliver a spotless space every single
                time.
              </p>

              <div className="btns mb-5">
                <button className=" btn btn-lg fs-5">Get Free Quote</button>
                <button className=" btn btn-lg">
                  <i className="fa-solid fa-phone pe-3"></i>
                  Call (555) 867-5309
                </button>
              </div>

              <div className="tags">
                <div className="">
                  <h3>5000+</h3>
                  <span>Homes Cleaned</span>
                </div>
                <div className="">
                  <h3>4.9★</h3>
                  <span>Star Rating</span>
                </div>
                <div className="">
                  <h3>100%</h3>
                  <span>Satisfaction</span>
                </div>
                <div className="">
                  <h3>200+</h3>
                  <span>5-Star Reviews</span>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 c-2 mt-0">
              <div
                className=" card p-4 rounded-4"
                style={{ background: "#0d0d1dee" }}
              >
                <h2 className=" text-white fs-4">Instant Quote</h2>
                <p style={{ color: "#ffffffb4" }}>
                  Get your estimated price in seconds
                </p>

                <label className=" form-label " style={{ color: "#ffffffbd" }}>
                  Property Type
                </label>
                <select
                  name=""
                  id="select"
                  value={select}
                  style={{ color: "#ffffffce" }}
                  className=" form-control bg-dark"
                >
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Office">Office</option>
                </select>

                <div className=" justify-content-between d-flex p-2">
                  <span style={{ color: "#ffffffb4" }}>Home Size</span>
                  <b style={{ color: "#21b15d" }}>{range} sq ft</b>
                </div>
                <div className="">
                  <input
                    className=" form-range"
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    onChange={getSteps}
                    value={range}
                  />
                </div>
                <div
                  className=" justify-content-between d-flex p-2"
                  style={{ color: "#ffffffb4" }}
                >
                  <span>500 sq ft</span>
                  <span>5000 sq ft</span>
                </div>

                <div className=" mt-4">
                  <h4
                    style={{ color: "#ffffffb4" }}
                    className=" font-monospace mb-4 fs-6"
                  >
                    Bedrooms
                  </h4>
                  <div className=" d-flex gap-5 mb-4">
                    <button
                      className="n-1"
                      onClick={() => setRooms(0, rooms - 1)}
                    >
                      -
                    </button>
                    <span className=" text-white fs-3">{rooms}</span>
                    <button className="n-2" onClick={() => setRooms(rooms + 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="">
                  <h4
                    style={{ color: "#ffffffb4" }}
                    className=" mb-4 font-monospace fs-6"
                  >
                    Frequency
                  </h4>

                  <div className="bp">
                    {selectedPlans.map((t, i) => (
                      <div className="" key={i}>
                        <button
                          className="btn-plans"
                          style={{ background: "#09070c" }}
                          onClick={() => setSelected(t)}
                        >
                          {t.t}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div
                    className=" card text-center p-2 mt-4 rounded-4"
                    style={{
                      background: "rgba(17, 206, 177, 0.14)",
                      color: "#ffffff",
                    }}
                    key={selected.id}
                  >
                    <span>Estimated Price</span>
                    <h2 className=" display-5 fw-bold">{selected.amount}$</h2>
                    <b> {selected.s}</b>
                  </div>
                  <button
                    className=" btn text-white w-100 mt-4 font-monospace fs-5"
                    style={{ background: "rgba(5, 230, 196, 0.75)" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الميزات والضمانات المتجاوب */}
      <section className=" badges text-white py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-md-3 text-center px-3">
              <div className="mb-3 d-flex justify-content-center">
                <div
                  className="p-3 rounded-circle"
                  style={{
                    background: "rgba(0, 255, 217, 0.15)",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyCcontent: "center",
                  }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={28}
                    height={28}
                    style={{ color: "rgb(5, 250, 213)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="fw-bold mb-2">Fully Insured</h6>
              <p className=" text-light small">
                Up to $2M liability coverage for complete peace of mind.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 text-center px-3">
              <div className="mb-3 d-flex justify-content-center">
                <div
                  className="p-3 rounded-circle"
                  style={{
                    background: "rgba(0, 255, 217, 0.15)",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyCcontent: "center",
                  }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={28}
                    height={28}
                    style={{ color: "rgb(5, 250, 213)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="fw-bold mb-2">Background Checked</h6>
              <p className=" text-white small">
                Every team member passes thorough background screening.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 text-center px-3">
              <div className="mb-3 d-flex justify-content-center">
                <div
                  className="p-3 rounded-circle"
                  style={{
                    background: "rgba(0, 255, 217, 0.15)",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyCcontent: "center",
                  }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={28}
                    height={28}
                    style={{ color: "rgb(5, 250, 213)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="fw-bold mb-2">Eco-Friendly</h6>
              <p className=" text-white small">
                Green-certified products safe for kids, pets, and the planet.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 text-center px-3">
              <div className="mb-3 d-flex justify-content-center">
                <div
                  className="p-3 rounded-circle"
                  style={{
                    background: "rgba(0, 255, 217, 0.15)",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyCcontent: "center",
                  }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={28}
                    height={28}
                    style={{ color: "rgb(5, 250, 213)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="fw-bold mb-2">Satisfaction Guaranteed</h6>
              <p className=" text-white small">
                Not happy? We'll re-clean for free within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="numbers">
          <div className="">
            <h3>5000+</h3>
            <p>Homes Cleaned</p>
          </div>
          <div className="">
            <h3>200+</h3>
            <p>Five-Star Reviews</p>
          </div>
          <div className="">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>
          <div className="">
            <h3>100%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>
      <Services />
      <Pricing />
      <Results />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

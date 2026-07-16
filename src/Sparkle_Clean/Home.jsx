import "./Sparkle_Clean.css/Home.css";
import { useState, useEffect } from "react";

function Home() {
  const text_list = [
    "Made Simple",
    "Eco-Friendly",
    " You Can Trust",
    "Guaranteed Spotless",
  ];

  const [text, setText] = useState(text_list[0]);

  useEffect(() => {
    const changeText = () => {
      const randomIndex = Math.floor(Math.random() * text_list.length);
      setText(text_list[randomIndex]);
    };

    changeText();

    const random = setInterval(changeText, 3000);

    return () => clearInterval(random);
  }, []);

  const selectedPlans = [
    {
      id: 1,
      t: "one-Time",
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

  const selectedPlan = (e) => {
    const f = selectedPlans.find((f) => f.id === e.id);
    setSelected(f);
  };

  const [range, setRange] = useState(500);

  const getSteps = (e) => {
    setRange(e.target.value);
  };

  const [rooms, setRooms] = useState(1);
  const [select, setSelect] = useState("House");
  const op = () => {
    setSelect(e.target.value);
  };

  return (
    <>
      <section className=" home">
        <div className=" container">
          <div className=" row g-5">
            <div className=" col-md-12 col-lg-6 col-sm-12 c-1">
              <span className="span-dot mb-5 ps-5">
                <span className="dot"></span> Instant Quote
              </span>

              <h1 className=" mt-4 display-3 fw-bold">
                Professional Cleaning,
              </h1>
              <h2 className="text display-5" key={text}>
                {text}
              </h2>

              <p>
                Trusted by thousands of homeowners and businesses in Austin. Our
                insured, background-checked cleaning professionals use
                eco-friendly products to deliver a spotless space every single
                time.
              </p>

              <div className="btns mb-5">
                <button className=" btn btn-lg">Get Free Quote</button>
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
                style={{ background: "#080813ee" }}
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
                  style={{ color: "#ffffffce" }}
                  className=" form-control bg-dark"
                >
                  <option value="">House</option>
                  <option value="">Apartment</option>
                  <option value="">Condo</option>
                  <option value="">Office</option>
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
                      onClick={() => setRooms(0 && rooms - 1)}
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

      <section>
        <div className=" badges bg-black p-5">
          <div className="badge-item text-center">
            <div className=" card-header justify-content-center d-flex align-items-center">
              <svg
                class="h-7 w-7 p-3 rounded-pill"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={60}
                color="rgb(5, 250, 213)"
                style={{ background: "rgba(0, 255, 217, 0.18)" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>

            <h6 className=" fw-semibold">Fully Insured</h6>
            <p>
              Up to $2M liability coverage <br /> for complete peace of mind.
            </p>
          </div>

          <div className="badge-item text-center">
            <div className=" justify-content-center d-flex align-items-center">
              <svg
                class="h-7 w-7 p-3 rounded-pill"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={60}
                color="rgb(5, 250, 213)"
                style={{ background: "rgba(0, 255, 217, 0.18)" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <h6>Background Checked</h6>
            <p>
              Every team member passes thorough <br /> background screening.
            </p>
          </div>

          <div className="badge-item text-center">
            <div className=" justify-content-center align-items-center d-flex">
              <svg
                class="h-7 w-7 p-3 rounded-pill"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={60}
                color="rgb(5, 250, 213)"
                style={{ background: "rgba(0, 255, 217, 0.18)" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
            </div>

            <h6>Eco-Friendly</h6>
            <p>
              Green-certified products safe for <br /> kids, pets, and the
              planet.
            </p>
          </div>

          <div className="badge-item text-center">
            <div className=" justify-content-center align-items-center d-flex">
              <svg
                class="h-7 w-7 p-3 rounded-pill"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={60}
                color="rgb(5, 250, 213)"
                style={{ background: "rgba(0, 255, 217, 0.18)" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            </div>

            <h6>Satisfaction Guaranteed</h6>
            <p>
              Not happy? We'll re-clean <br /> for free within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

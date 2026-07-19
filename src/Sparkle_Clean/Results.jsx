import "./Sparkle_Clean.css/Results.css";
import { useState } from "react";
import before from "../assets/sparkle_img1.png";
import after from "../assets/sparkle_img2.png";
function CompareCard() {
  const [slider, setSlider] = useState(50);
  return (
    <div className="compare">
      <img src={before} className="before" alt="Before" />
      <div className="after-wrapper" style={{ width: `${slider}%` }}>
        <img src={after} className="after" alt="After" />
      </div>
      <span className="badge before-badge">Before</span>
      <span className="badge after-badge">After</span>
      <div className="line" style={{ left: `${slider}%` }}>
        <div className="handle">↔</div>
      </div>
      <input
        className="slider"
        type="range"
        min="0"
        max="100"
        value={slider}
        onChange={(e) => setSlider(e.target.value)}
      />
    </div>
  );
}
export default function Results() {
  return (
    <section className="results">
      <div className="container-lg">
        <div className="title-results">
          <span>Results</span>
          <h1>See the Difference</h1>
          <p>
            Real results from our cleaning professionals that showcase the
            quality of our work.
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="text">
              <h2>Kitchen Deep Clean</h2>
              <CompareCard className=" position-relative" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text">
              <h2>Bathroom Restoration</h2>
              <CompareCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

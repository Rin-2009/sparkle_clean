import { Link } from "react-router-dom";
import "./Sparkle_Clean.css/PagePricing.css";

function PagrPricing() {
  return (
    <>
      <section className="pagePricing">
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
      </section>
    </>
  );
}

export default PagrPricing;

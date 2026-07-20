import "./Sparkle_Clean.css/Navbar.css";
import Context from "./ContextData";
import { data } from "./ContextData";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const { changeTheme, theme } = data();
  return (
    <>
      <nav className=" navbar navbar-expand-lg sticky-top navbar-dark pt-0 mt-0">
        <div className="container-fluid py-3 px-3">
          <a href="#home" className=" navbar-brand nav-link">
            <img
              src={logoLight}
              className=" img-fluid object-fit-cover"
              style={{ width: 210 }}
            />
          </a>

          <button
            className="btn navbar-toggler"
            type="button"
            data-bs-target="#nav"
            data-bs-toggle="collapse"
            aria-controls="nav"
            aria-expanded="false"
          >
            <span className=" navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="nav">
            <div className="nav-list mx-auto list text-center align-items-center d-flex gap-5 align-items-center">
              <Link to={"/"} className=" nav-link">
                Home
              </Link>
              <Link to={"/pageAbout"} className=" nav-link">
                About
              </Link>
              <Link to={"/pageServices"} className=" nav-link">
                Services
              </Link>
              <Link to={"/pagePricing"} className=" nav-link">
                Pricing
              </Link>
              <Link to={"/blog"} className=" nav-link">
                Blog
              </Link>
              <Link to={"/pageContact"} className=" nav-link">
                Contact
              </Link>
            </div>

            <div className="btns">
              <button onClick={changeTheme} className=" px-2 py-0 i-mode">
                {theme === "dark" ? (
                  <svg
                    className="hidden h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color="white"
                    width={25}
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={25}
                    color="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                )}
              </button>
              <button
                className=" btn px-3 py-1 text-white btn-secondary"
                style={{ background: "rgb(58, 148, 134)" }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

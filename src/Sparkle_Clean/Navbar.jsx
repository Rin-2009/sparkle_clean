import "./Sparkle_Clean.css/Navbar.css";
import Context from "./ContextData";
import { data } from "./ContextData";
import logo from "../assets/logo.svg";

function Navbar() {
  const { changeTheme, theem } = data();
  return (
    <>
      <nav className=" navbar navbar-expand-lg sticky-top navbar-dark pt-0 mt-0">
        <div className="container-fluid py-3 px-3">
          <a href="#home" className=" navbar-brand nav-link">
            <img
              src="https://sparkleclean-colorlib.pages.dev/assets/img/logo-light.svg"
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
              <a href="#home" className=" nav-link">
                Home
              </a>
              <a href="#about" className=" nav-link">
                About
              </a>
              <a href="#services" className=" nav-link">
                Services
              </a>
              <a href="#pricing" className=" nav-link">
                Pricing
              </a>
              <a href="#blog" className=" nav-link">
                Blog
              </a>
              <a href="#contact" className=" nav-link">
                Contact
              </a>
            </div>

            <div className="btns">
              <button onClick={changeTheme} className=" btn btn-sm px-2 py-0">
                <i className="fa-solid fa-sun text-white i-nav"></i>
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

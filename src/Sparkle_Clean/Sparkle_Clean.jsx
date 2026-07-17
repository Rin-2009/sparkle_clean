import "./Sparkle_Clean.css/Sparkle_Clean.css";
import Context from "./ContextData";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Pricing from "./Pricing";

function Sparkle_Clean() {
  return (
    <>
      <Context>
        <Navbar />
        <Home />
        <Services />
        <Pricing />
      </Context>
    </>
  );
}

export default Sparkle_Clean;

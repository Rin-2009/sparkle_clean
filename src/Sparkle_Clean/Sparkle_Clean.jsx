import "./Sparkle_Clean.css/Sparkle_Clean.css";
import Context from "./ContextData";
import Navbar from "./Navbar";
import Home from "./Home";

function Sparkle_Clean() {
  return (
    <>
      <Context>
        <Navbar />
        <Home />
      </Context>
    </>
  );
}

export default Sparkle_Clean;

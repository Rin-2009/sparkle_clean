import "./Sparkle_Clean.css/Sparkle_Clean.css";
import Context from "./ContextData";
import Navbar from "./Navbar";
import Home from "./Home";
import PageAbout from "./PageAbout";
import PageServices from "./PageServices";
import PagrPricing from "./PagePricing";
import PageContact from "./PageContact";
import Blog from "./Blog/Blog";
import { Routes, Route } from "react-router-dom";
function Sparkle_Clean() {
  return (
    <Context>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageAbout" element={<PageAbout />} />
        <Route path="/pageServices" element={<PageServices />} />
        <Route path="/pagePricing" element={<PagrPricing />} />
        <Route path="/pageContact" element={<PageContact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Context>
  );
}

export default Sparkle_Clean;

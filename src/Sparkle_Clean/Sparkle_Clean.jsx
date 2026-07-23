import "./Sparkle_Clean.css/Sparkle_Clean.css";
import Context from "./ContextData";
import Navbar from "./Navbar";
import Home from "./Home";
import PageAbout from "./PageAbout";
import PageServices from "./PageServices";
import PagrPricing from "./PagePricing";
import PageContact from "./PageContact";
import Article1 from "./Blog/Article1";
import Article2 from "./Blog/Article2";
import Article3 from "./Blog/Article3";
import Article4 from "./Blog/Article4";
import Article5 from "./Blog/Article5";
import Article6 from "./Blog/Article6";
import Blog from "./Blog/Blog";
import CleaningChecklist from "./Cleaning_Checklist";
import { Routes, Route } from "react-router-dom";
import Service_Areas from "./Service_Areas";
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
        <Route path="/blog/article1" element={<Article1 />} />
        <Route path="/blog/article2" element={<Article2 />} />
        <Route path="/blog/article3" element={<Article3 />} />
        <Route path="/blog/article4" element={<Article4 />} />
        <Route path="/blog/article5" element={<Article5 />} />
        <Route path="/blog/article6" element={<Article6 />} />
        <Route path="/cleaningChecklist" element={<CleaningChecklist />} />
        <Route path="/service_areas" element={<Service_Areas />} />
      </Routes>
    </Context>
  );
}

export default Sparkle_Clean;

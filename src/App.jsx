import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/desktop/Footer";

import NotFound404 from "./pages/Found404";
import ExternalLink from "./pages/ExternalPage/ExternalLink";

import Highlights from "./pages/Highlights/Highlights";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";

import SocialLinks from "../src/pages/About/SocialLinks.json"
var data = SocialLinks;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Highlights />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          {data.map(item => {
            return(
              <Route key={item.id} path={`/about/external-link-${item.alt}`} element={<ExternalLink logo={item.logo} alt={item.alt} link={item.link} />} />
            )
          })}
          {/* <Route path="/about/external-link-testing" element={<ExternalLink />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

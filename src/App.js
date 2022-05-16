import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  forceRefresh,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
// import About from "./pages/About";
import Involved from "./pages/Involved";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} exact /> */}
            <Route path="/get-involved" element={<Involved />} exact />
            <Route path="/contact" element={<Contact />} exact />
            {/* <Route element={<NotFound />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

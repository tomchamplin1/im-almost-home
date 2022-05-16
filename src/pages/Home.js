import { React } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Cards from "../components/Cards";
import AboutM from "../components/AboutM";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Showcase />
      <Cards />
      <AboutM />
      <Connect />
      <Footer />
    </div>
  );
}

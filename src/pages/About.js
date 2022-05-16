import { React } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import AboutH from "../components/AboutH";
import AboutM from "../components/AboutM";
import Footer from "../components/Footer";

export default function About() {


  return (
    <div>
      <Navbar />
      <AboutH />
      <AboutM />
      <Footer />
    </div>
  );
}

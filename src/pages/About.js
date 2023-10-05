import { React } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import AboutH from "../components/AboutH";
import AboutM from "../components/AboutM";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

export default function About() {
  return (
    <div>
      <Alert />
      <Navbar />
      <AboutH />
      <AboutM />
      <Footer />
    </div>
  );
}

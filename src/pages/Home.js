import { React } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Cards from "../components/Cards";
import AboutM from "../components/AboutM";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

export default function Home() {
  return (
    <div>
      <Alert />
      <Navbar />
      <Showcase />
      <Cards />
      <AboutM />
      <Connect />
      <Footer />
    </div>
  );
}

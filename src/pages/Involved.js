import { React, useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import InvolvedH from "../components/InvolvedH";
import InvolvedM from "../components/InvolvedM";
import Footer from "../components/Footer";

export default function About() {


  return (
    <div>
      <Navbar />
      <InvolvedH />
      <InvolvedM />
      <Footer />
    </div>
  );
}

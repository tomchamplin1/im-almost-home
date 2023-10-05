import { React, useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import InvolvedH from "../components/InvolvedH";
import InvolvedM from "../components/InvolvedM";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

export default function About() {
  return (
    <div>
      <Alert />
      <Navbar />
      <InvolvedH />
      <InvolvedM />
      <Footer />
    </div>
  );
}

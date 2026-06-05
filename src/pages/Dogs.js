import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import DogsDirectory from "../components/DogsDirectory";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

export default function Dogs() {
  return (
    <div>
      <Alert />
      <Navbar />
      <DogsDirectory />
      <Footer />
    </div>
  );
}

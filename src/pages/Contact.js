import { React, useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import FormH from "../components/FormH";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function About() {


  return (
    <div>
      <Navbar />
      <FormH />
      <Form />
      <Footer />
    </div>
  );
}

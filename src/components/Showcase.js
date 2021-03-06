import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Showcase() {
  return (
    <section class="hero1 py-36 md:px-20 px-4 grid md:grid-cols-2 grid-cols-1">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" class="text-left">
        <h1 class="pt-12 mb-5 lg:text-7xl text-5xl font-extrabold leading-none text-white mx-auto">
          Help us bring them <span className="text-red-600">home</span>.
        </h1>
        <p className="mb-12 text-xl text-gray-100">
          I'm Almost Home is an animal rescue center in the Southwest. We help
          dogs in need find their forever home.
        </p>
        <div className="flex">
          <p class="mb-12">
            <Link
              to="/get-involved"
              class="rounded-3xl bg-white hover:text-white hover:bg-red-600 border hover:border-white text-red-600 text-sm md:text-lg tracking-wider py-2 px-3 shadow font-bold mx-auto"
            >
              Show me how →
            </Link>
          </p>
          <p class="pl-5">
            <Link
              to="/contact"
              class="bg-none text-white hover:text-red-600 text-sm md:text-lg tracking-wider font-bold mx-auto"
            >
              Contact us →
            </Link>
          </p>
        </div>
      </AnimationOnScroll>
      <div className="w-5/5 md:block hidden"></div>
    </section>
  );
}

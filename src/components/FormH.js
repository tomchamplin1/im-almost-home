import React from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function FormH() {
  return (
    <section class="hero3 py-20">
      <div class="text-center px-auto">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce="true"
          class="text-center"
        >
          <h1 class="p-5 lg:text-6xl text-4xl font-bold text-white text-center bg-red-600 w-fit mx-auto">
            Contact us.
          </h1>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

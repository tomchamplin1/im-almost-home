import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Showcase() {
  return (
    <section class="hero1 py-36 md:px-20 px-4 grid md:grid-cols-2 grid-cols-1">
      <div className="bg-white p-12 my-auto rounded-3xl">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce="true"
          class="text-left"
        >
          <h1 class="mb-5 lg:text-7xl text-5xl font-extrabold leading-none text-black mx-auto">
            Help us bring them <span className="text-red-600">home</span>.
          </h1>
          <p className="mb-5 text-xl text-gray-800">
            I'm Almost Home is an animal rescue center in the Southwest. We help
            dogs in need find their forever home.
          </p>
          <div className="flex">
            <p>
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="B9KCAL7GM64X8"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </p>
            <p class="pl-5">
              <Link
                to="/contact"
                class="bg-none text-red-600 text-sm md:text-lg tracking-wider font-bold mx-auto"
              >
                Contact us →
              </Link>
            </p>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="w-5/5 md:block hidden"></div>
    </section>
  );
}

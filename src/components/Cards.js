import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Cards() {
  return (
    <section id="services" class="pt-12 pb-12">
      <div class="px-4 md:px-20 mx-auto">
        <div class="text-center lg:text-left">
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="black"
              class="mx-auto bi bi-house-heart-fill pb-5"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
              />
              <path
                fill-rule="evenodd"
                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"
              />
            </svg>
            <h3 class="md:text-4xl text-3xl leading-tight text-center">
              Our mission
            </h3>
            <p className="text-center text-lg lg:px-60 pt-5">
              We aim to change the lives of the neglected dogs of the El
              Paso/Las Cruces area. They are all almost home, and we exist to
              help get them there safely.
            </p>
          <div class="pt-12 md:pt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <div class="h-80 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg duration-700 dog1">
              {/* <div class="align-middle text-center pt-60">
                <p class="">
                  <Link
                    to="/get-involved"
                    class="rounded-3xl inline-block bg-white hover:bg-red-600 hover:text-white border hover:border-white text-red-600 text-lg py-2 px-5 md:py-2 md:px-8 shadow font-bold"
                  >
                    Adopt
                  </Link>
                </p>
              </div> */}
            </div>
            <div class="h-80 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg duration-700 dog2">
              {/* <div class="align-middle text-center pt-60">
                <p class="">
                  <Link
                    to="/get-involved"
                    class="rounded-3xl inline-block bg-white hover:bg-red-600 hover:text-white border hover:border-white text-red-600 text-lg py-2 px-5 md:py-2 md:px-8 shadow font-bold"
                  >
                    Foster
                  </Link>
                </p>
              </div> */}
            </div>
            <div class="h-80 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg duration-700 dog3">
              {/* <div class="align-middle text-center pt-60">
                <p class="">
                  <Link
                    to="/get-involved"
                    class="rounded-3xl inline-block bg-white hover:bg-red-600 hover:text-white border hover:border-white text-red-600 text-lg py-2 px-5 md:py-2 md:px-8 shadow font-bold"
                  >
                    Transport
                  </Link>
                </p>
              </div> */}
            </div>
            <div class="h-80 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg duration-700 dog4">
              {/* <div class="align-middle text-center pt-60">
                <p class="">
                  <Link
                    to="/get-involved"
                    class="rounded-3xl inline-block bg-white hover:bg-red-600 hover:text-white border hover:border-white text-red-600 text-lg py-2 px-5 md:py-2 md:px-8 shadow font-bold"
                  >
                    Donate
                  </Link>
                </p>
              </div> */}
            </div>
          </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

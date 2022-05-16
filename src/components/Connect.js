import React from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Connect() {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650015840/I%27m%20Almost%20Home/divider_crj2dd.svg"
        className="w-full hidden md:block"
      />
      <div>
        <div class="w-full bg-red-600 md:px-20 px-4 md:pt-0 pt-12 pb-12">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="white"
              class="mx-auto pb-5 bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            <h2 class="md:text-4xl text-3xl text-white text-center">
              Stay up to date
            </h2>
          </div>
          <p className="pt-5 text-white text-center text-xl">
            Like and follow us on Facebook for our most frequent updates:
          </p>
          </AnimationOnScroll>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full md:pt-5">
            <div className="pt-12 inline-block mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="white"
                class="mx-auto bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <p class="pt-12">
                <a
                  href="https://www.facebook.com/Im-Almost-Home-Animal-Rescue-102831131326389/"
                  class="rounded-3xl bg-white hover:text-white hover:bg-red-600 border hover:border-white text-red-600 text-md tracking-wider py-3 px-6 shadow font-bold mx-auto"
                >
                  Take me there
                </a>
              </p>
            </div>
            <div className="md:pt-0 pt-12 mx-auto px-auto">
              <picture>
                <source
                  srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650015840/I'm%20Almost%20Home/fbsc_ck8h3i.webp"
                  type="image/webp"
                />
                <img
                  src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650015840/I'm%20Almost%20Home/fbsc_ck8h3i.png"
                  className="border-none"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

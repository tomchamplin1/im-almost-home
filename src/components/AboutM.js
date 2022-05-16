import React from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function AboutM() {
  return (
    <section class="py-24 md:px-20 px-4 bones">
      <div class="text-left md:text-center px-auto">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="black"
            class="mx-auto pb-5 bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          <h3 class="md:text-4xl text-3xl leading-tight text-center">
            What we do
          </h3>
          <p className="text-center text-lg lg:px-60 pt-5">
            Day in, day out, we're committed to help make the world a better
            place. We aim to ensure that our dogs lives aren't just made better
            for today.
          </p>
        </AnimationOnScroll>
        <div className="pt-12 md:pt-12 grid md:grid-cols-2 grid-cols-1">
          <div className="grid">
            <ul className="md:w-5/5 md:text-left text-left mx-auto my-auto text-lg md:text-xl">
              <p className="text-2xl text-black font-bold pb-2 md:text-left text-left">
                The purpose of I'm Almost Home Animal Rescue is to:
              </p>
              <li className="pb-5">
                <span className="text-2xl font-extrabold">1. </span>Provide a
                temporary safe haven for abandoned, neglected, or unwanted dogs
                and cats until transfer or adoption can be arranged through a
                network of foster homes.
              </li>
              <li className="pb-5">
                <span className="text-2xl font-extrabold">2. </span>Help educate
                the public in appropriate animal care.
              </li>
              <li className="pb-5">
                <span className="text-2xl font-extrabold">3. </span>Have input
                in the development of animal protection laws.
              </li>
              <li className="pb-5">
                <span className="text-2xl font-extrabold">4. </span>Be
                instrumental in the prevention of animal abuse.
              </li>
            </ul>
          </div>
          <div className="px-5">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_700/v1650917991/I'm%20Almost%20Home/dogs-running_xwuzkt.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_700/v1650917991/I'm%20Almost%20Home/dogs-running_xwuzkt.jpg"
                className="rounded-3xl md:w-3/5 w-4/5 mx-auto"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

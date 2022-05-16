import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" class="p-4 bg-gray-100 sm:p-6">
      <div class="md:flex md:justify-between px-4 md:px-16">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <img
              src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_400/v1650918230/I'm%20Almost%20Home/logo_azcd9z.svg"
              class="md:h-24 h-16 mx-auto"
              alt="i'm almost home logo"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:text-left text-center">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-red-600 uppercase">
              Navigation
            </h2>
            <ul class="text-gray-600">
              <li class="mb-4">
                <Link to="/" class="hover:underline">
                  Home
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/get-involved" class="hover:underline">
                  Get Involved
                </Link>
              </li>
              {/* <li class="mb-4">
                <a href="#faq" class="hover:underline">
                  FAQ
                </a>
              </li> */}
              <li class="mb-4">
                <Link to="/contact" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-red-600 uppercase">
              Contact Us
            </h2>
            <ul class="text-gray-600">
              <li class="mb-4">
                <a
                  href="mailto:imalmosthome12@gmail.com"
                  class="hover:underline"
                >
                  <span className="font-bold">Email</span>:
                  imalmosthome12@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+19152417645" class="hover:underline">
                  <span className="font-bold">Phone</span>: +1 (915) 241-7645
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between px-4 md:px-0 text-center">
        <span class="text-sm text-gray-500 text-center mx-auto">
          Designed by <a className="text-red-600" href="https://sitecheer.com">SiteCheer</a>.<br /> © 2022{" "}
          <a href="#" class="hover:underline">
            I'm Almost Home Animal Rescue™
          </a>
          . All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-gray-900 mx-auto">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

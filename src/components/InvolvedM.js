import React from "react";
import { Link } from "react-router-dom";

export default function InvolvedM() {
  return (
    <section className="md:px-20 px-4">
      <div class="text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="md:py-24 pt-24">
            <h2 className="text-red-600 text-xl text-left pb-3">
              WANT TO GET INVOLVED?
            </h2>
            <h1 class="pb-12 md:text-4xl text-3xl font-bold leading-none text-black mx-auto text-left">
              There are many ways you can help.
            </h1>
          </div>
          <div className="my-auto">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 w-5/5 md:w-4/5 mx-auto md:pb-0">
              <a href="#adopt" className="grid">
                <h2 className="bg-red-600 text-white lg:px-3 p-3 text-2xl font-bold rounded-3xl shadow-xl hover:scale-105">
                  Adopt
                </h2>
              </a>
              <a href="#foster" className="grid">
                <h2 className="bg-red-600 text-white lg:px-3 p-3 text-2xl font-bold rounded-3xl shadow-xl hover:scale-105">
                  Foster
                </h2>
              </a>
              <a href="#transport" className="grid">
                <h2 className="bg-red-600 text-white lg:px-3 p-3 text-2xl font-bold rounded-3xl shadow-xl hover:scale-105">
                  Transport
                </h2>
              </a>
              <a href="#donate" className="grid">
                <h2 className="bg-red-600 text-white lg:px-3 p-3 text-2xl font-bold rounded-3xl shadow-xl hover:scale-105">
                  Donate
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24">
          <div className="bg-white mx-auto text-left my-auto" id="adopt">
            <div className="my-auto pt-12 pb-24 md:pt-0 md:pb-0">
              <h2 className="text-3xl text-black font-bold pb-5">Adopt</h2>
              <h3 className="text-xl text-black font-bold pb-2">
                Your perfect dog is waiting for you!
              </h3>
              <p className="text-lg pb-8 text-black">
                Your newest family member is only a click away. We update our
                Facebook page with dogs available for adoption. Feel free to
                browse by clicking on our page below!
              </p>
              <div className="inline-block pb-5">
                <p>
                  <a
                    href="https://www.facebook.com/Im-Almost-Home-Animal-Rescue-102831131326389/"
                    class="rounded-3xl bg-red-600 hover:text-red-600 hover:bg-white border border-red-600 text-white text-lg tracking-wider py-2 px-4 shadow-2xl font-bold"
                  >
                    Take me there
                  </a>
                </p>
              </div>
            </div>
            </div>
            <div className="text-left" id="transport">
              <h2 className="text-3xl text-black font-bold pb-5">Transport</h2>
              <h3 className="text-xl text-black font-bold pb-2">
                We transport dogs throughout the country.
              </h3>
              <p className="text-lg pb-8 text-black">
                Contact us to find out how you can help!
              </p>
              <div className="inline-block mx-auto text-center">
                <p className="pb-5">
                  <Link
                    to="/contact"
                    class="rounded-3xl bg-red-600 hover:text-red-600 hover:bg-white border border-red-600 text-white text-lg tracking-wider py-2 px-4 shadow-2xl font-bold mx-auto"
                  >
                    Contact us
                  </Link>
                </p>
              </div>
          </div>
        </div>
        <div className="bg-white md:py-24 py-12 mx-auto text-left" id="foster">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-3/5 mx-auto my-auto">
              <picture>
                <source
                  srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650015842/I%27m%20Almost%20Home/grassdog_hkiujx.webp"
                  type="image/webp"
                />
                <img
                  srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650015842/I%27m%20Almost%20Home/grassdog_hkiujx.jpg"
                  className="hidden lg:block rounded-3xl mx-auto"
                  decoding="async"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="my-auto">
              <h2 className="text-3xl text-black font-bold pb-5">Foster</h2>
              <h3 className="text-2xl text-black font-bold pb-5">
                Unable to adopt? Fostering is the next best thing!
              </h3>
              <div className="pb-12">
                <h4 className="text-xl font-bold pb-2">Why foster a dog?</h4>
                <p className="text-lg text-black">
                  Many dogs are in desperate and unsafe situations. While we
                  have room for many, we can't always provide individualized
                  attention for every dog. Some are recovering from surgeries,
                  need to be in a calm environment, and many other reasons.
                  That's where you come in. Fostering is extremely rewarding!
                </p>
              </div>
              <div className="">
                <h4 className="text-xl font-bold pb-2">What is fostering?</h4>
                <p className="text-lg text-black pb-12">
                  Fostering involves agreeing to take a homeless animal into
                  your home - giving them love, food, care, and attention for a
                  predetermined or limited period of time until the dog is
                  adopted by someone else.
                </p>
              </div>
              <p className="pb-5">
                <Link
                  to="/contact"
                  class="rounded-3xl bg-red-600 hover:text-red-600 hover:bg-white border border-red-600 text-white text-lg tracking-wider py-2 px-4 shadow-2xl font-bold mx-auto"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="pb-12 lg:py-24 px-5">
            <h4 className="text-3xl font-bold text-center pb-12 py-5">
              Frequently Asked Questions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 pb-5 md:pb-12 px-12 gap-12">
              <div className="text-left">
                <h4 className="text-2xl md:pb-2 font-bold">
                  How much does it cost to foster?
                </h4>
                <p className="text-xl text-black md:pb-0">
                  Nothing! We don't charge any fees for fostering. The only
                  thing it costs is time!
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-2xl pb-2 font-bold">
                  What does I'm Almost Home provide?
                </h4>
                <p className="text-xl text-black md:pb-0">
                  Each foster animal receives all the necessary vaccinations and
                  medical care. If you are new to fostering, we help with food,
                  resources, and medical supplies (as needed).
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-2xl pb-2 font-bold">
                  How long will I foster for?
                </h4>
                <p className="text-xl text-black md:pb-0">
                  Fostering can last a short as a few days to months. Its length
                  of time depends on an individual basis.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-2xl pb-2 font-bold">
                  Can I foster if I already have pets?
                </h4>
                <p className="text-xl text-black md:pb-0">
                  Yes - as long as your pets are friendly and up to date on
                  their shots.
                </p>
            </div>
            </div> */}
        <div className="bg-white md:py-24 py-12 mx-auto text-center" id="donate">
          <div className="">
            <h2 className="text-3xl text-black font-bold pb-5">Donate</h2>
            <div className="py-auto">
              <h3 className="text-xl text-black font-bold pb-5">
                Every single donation goes directly towards our dogs.
              </h3>
              <p className="text-lg pb-5 text-black">
                There are many other ways to help out besides fostering and
                adopting. Another way to help is by donating and/or helping us
                pay for vaccinations, food, toys, and necessary medical
                treatments.{" "}
                <u>100% of your donations go to the care of the animals.</u>
              </p>
              <div className="inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20%"
                  height="20%"
                  fill="black"
                  class="pb-5 mx-auto bi bi-paypal"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                </svg>
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="TBJHZCL9TXN8S"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

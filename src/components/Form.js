import React from "react";

export default function Form() {
  return (
    <div className="px-4 md:px-20 py-24 justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pb-24">
          <h2 className="text-red-600 text-xl text-left pb-3">
            WE'D LOVE TO HEAR FROM YOU
          </h2>
          <h1 class="pb-5 text-6xl font-extrabold leading-none text-black mx-auto md:text-left">
            Get in touch
          </h1>
          <p className="text-black pb-2 text-lg">Reach out:</p>
          <ul>⇨ For information on how to donate, foster or volunteer</ul>
          <ul>⇨ To learn more about the rescue</ul>
          <ul>⇨ To just say hi and get to know us!</ul>
        </div>
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          className="bg-red-600 p-5 w-full mx-auto rounded-lg shadow-2xl"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white text-left">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white text-left">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white text-left">
              Message
            </label>
            <textarea
              placeholder="Message"
              name="message"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm sm:w-auto px-5 py-2 text-center"
              required="yes"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

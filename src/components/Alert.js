import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function Alert() {
  const [alertShow, setAlertShow] = useState(true);
  return (
    <div className="py-3 bg-red-600">
      <p className="text-center text-white">
        Unfortunately, we are not accepting any animals at this time. However,
        donations are always appreciated!
      </p>
    </div>
    // <nav class="w-full z-50 bg-white border-gray-200 px-4 sm:px-4 py-1 shadow-3xl">
    //   <div class="container flex flex-wrap justify-between items-center mx-auto">
    //     <Link to="/" class="flex items-center">
    //       <img
    //         src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_400/v1650918230/I'm%20Almost%20Home/logo_azcd9z.svg"
    //         class="md:h-20 h-16"
    //         alt="I'm Almost Home Logo"
    //         decoding="async"
    //       />
    //     </Link>
    //     <div class="flex md:order-2">
    //       <form
    //         action="https://www.paypal.com/donate"
    //         method="post"
    //         target="_top"
    //         className="hidden md:block"
    //       >
    //         <input
    //           type="hidden"
    //           name="hosted_button_id"
    //           value="TBJHZCL9TXN8S"
    //         />
    //         <input
    //           type="image"
    //           src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
    //           border="0"
    //           name="submit"
    //           title="PayPal - The safer, easier way to pay online!"
    //           alt="Donate with PayPal button"
    //         />
    //         <img
    //           alt=""
    //           border="0"
    //           src="https://www.paypal.com/en_US/i/scr/pixel.gif"
    //           width="1"
    //           height="1"
    //         />
    //       </form>
    //       <button
    //         type="button"
    //         class="mr-4 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    //         aria-controls="mobile-menu-4"
    //         aria-expanded="false"
    //         onClick={() => setNavbarOpen(!navbarOpen)}
    //       >
    //         <span class="sr-only">Open main menu</span>
    //         <svg
    //           class="w-6 h-6"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //         <svg
    //           class="hidden w-6 h-6"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       class={
    //         "justify-between items-center w-full lg:flex md:w-auto md:order-1" +
    //         (navbarOpen ? " " : " hidden")
    //       }
    //       id="mobile-menu-4"
    //     >
    //       <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:text-lg text-center">
    //         <li>
    //           <Link
    //             to="/"
    //             class="block py-2 pr-4 pl-3 text-white bg-red-600 border-black md:hover:border-b md:border-black border-gray-100 md:bg-transparent md:text-red-600 md:p-0"
    //             aria-current="page"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         {/* <li>
    //           <Link
    //             to="/about"
    //             class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 text-black"
    //           >
    //             About
    //           </Link>
    //         </li> */}
    //         <li>
    //           <Link
    //             to="/get-involved"
    //             class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 text-black"
    //           >
    //             Get Involved
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/contact"
    //             class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 text-black"
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

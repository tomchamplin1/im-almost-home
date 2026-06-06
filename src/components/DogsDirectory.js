import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import dogs from "../data/dogs";

const SIZE_OPTIONS = ["All", "Small", "Medium", "Large"];
const SEX_OPTIONS = ["All", "Male", "Female"];

export default function DogsDirectory() {
  const [sizeFilter, setSizeFilter] = useState("All");
  const [sexFilter, setSexFilter] = useState("All");

  const filtered = dogs.filter((d) => {
    const matchSize = sizeFilter === "All" || d.size === sizeFilter;
    const matchSex = sexFilter === "All" || d.sex === sexFilter;
    return matchSize && matchSex;
  });

  return (
    <section className="pt-24 pb-24 px-4 md:px-20 mx-auto">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Available Dogs
          </h1>
          <p className="text-lg text-gray-600 lg:px-40">
            These dogs are looking for their forever homes. Each one has been
            vetted, vaccinated, and is ready for a loving family.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center py-12 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Size:
            </span>
            {SIZE_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setSizeFilter(opt)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 ${
                  sizeFilter === opt
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Sex:
            </span>
            {SEX_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setSexFilter(opt)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 ${
                  sexFilter === opt
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-20">
            No dogs match your filters right now.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-16">
            {filtered.map((dog) => (
              <div
                key={dog.id}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
              >
                <img
                  src={dog.img}
                  alt={dog.name}
                  className="w-full aspect-square sm:aspect-auto sm:h-56 object-cover object-top"
                />
                <div className="p-5 flex flex-col flex-1">
                  <span
                    className={`self-start text-xs font-semibold px-2 py-1 rounded-full mb-1 ${
                      dog.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {dog.status}
                  </span>
                  <h2 className="text-xl font-bold mb-1">{dog.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{dog.breed}</p>
                  <div className="flex flex-col gap-1 text-sm text-gray-600 mb-3">
                    <span><span className="font-semibold">Age:</span> {dog.age}</span>
                    <span><span className="font-semibold">Sex:</span> {dog.sex}</span>
                    <span><span className="font-semibold">Size:</span> {dog.size}</span>
                  </div>
                  <a
                    href="/contact"
                    className="mt-4 block text-center rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-5 transition-colors duration-200"
                  >
                    Inquire About {dog.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </AnimationOnScroll>
    </section>
  );
}

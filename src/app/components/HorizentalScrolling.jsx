"use client";
import React from "react";

const HorizontalScrolling = () => {
  return (
    <div class="overflow-hidden max-w-6xl mx-auto">
        <h1 className="text-center text-xl py-8 md:text-4xl xl:text-6xl font-bold font-playfair ">My  <span className="text-red-500">Go-To</span> Tools</h1>
      <div class="flex justify-between animate-scroll">
        <div>
          <img
            src="/img/html.png"
            alt="Image 1"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            HTML
          </p>
        </div>
        <div>
          <img
            src="/img/css.png"
            alt="Image 2"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            CSS
          </p>
        </div>
        <div>
          <img
            src="/img/Js.png"
            alt="Image 3"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            JavaScript
          </p>
        </div>
        <div>
          <img
            src="/img/tailwind.png"
            alt="Image 4"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            Tailwind CSS
          </p>
        </div>
        <div>
          <img
            src="/img/react.png"
            alt="Image 5"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            React Js
          </p>
        </div>
        <div>
          <img
            src="/img/next.jpeg"
            alt="Image 6"
            class="w-full h-16 object-cover rounded-full"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            Next Js
          </p>
        </div>
        <div>
          <img
            src="/img/firebase.png"
            alt="Image 7"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">
            Firebase
          </p>
        </div>
        <div>
          <img
            src="/img/supabase.png"
            alt="Image 8"
            class="w-full h-16 object-cover"
          />
          <p className="text-center font-semibold tracking-wide text-sm font-playfair">Supabase</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrolling;

import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <section className="section-4 p-4 max-w-6xl mx-auto">
        <div className="w-full shadow-md shadow-gray-500 px-4 rounded-md py-8 text-center">
          <h5 className="text-red-500 font-bold">Get in touch</h5>
          <h2 className="text-xl font-playfair font-bold py-6  md:text-2xl lg:text-3xl xl:text-4xl">
            Have a project in your mind
          </h2>
          <button
            className="px-6 py-3 text-white bg-gradient-to-tr from-red-500 to-red-400 rounded-xl text-sm shadow-md hover:shadow-purple-400 lg:px-8 font-medium"
            type="submit"
          >
            Contact me +
          </button>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;

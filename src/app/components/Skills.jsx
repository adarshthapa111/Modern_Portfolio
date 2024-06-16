import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="section-3 max-w-6xl mx-auto p-4 lg:flex lg:justify-between py-10">
        <div className="section-3-head">
          <div className="head">
            <h1 className="font-semibold text-red-500 text-center">
              What I do is What i learn
            </h1>
          </div>
          <div className="section-3-para">
            <p className="text-3xl font-semibold text-center lg:text-4xl font-playfair tracking-wide">
              I am enthusiastic about collaborating within a team and working
              <span className="text-red-500"> Together</span>.
            </p>
          </div>
          <div className="box-items flex overflow-x-scroll overflow-y-hidden py-4 px-8 space-x-10 no-scrollbar justify-between">
            <div className="box-one h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
              <div className="image shadow-inner shadow-gray-400 w-fit p-2">
                <img src="/img/internet.png" alt="" className="h-8" />
              </div>
              <div className="para my-3">
                <h1 className="font-bold">UI/UX Design</h1>
                <p className="text-xs text-justify my-2">
                  Lorem ipsum dolor sit amet cons sicing elit. Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
              <div className="buttons my-2">
                <button
                  className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
                  type="submit"
                >
                  Read more
                </button>
              </div>
            </div>

            <div className="box-two h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
              <div className="image shadow-inner shadow-gray-400 w-fit p-2">
                <img src="/img/internet.png" alt="" className="h-8" />
              </div>
              <div className="para my-3">
                <h1 className="font-bold">Front-End Dev</h1>
                <p className="text-xs text-justify my-2">
                  Lorem ipsum dolor sit amet cons sicing elit. Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
              <div className="buttons my-2">
                <button
                  className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
                  type="submit"
                >
                  Read more{" "}
                </button>
              </div>
            </div>

            <div className="box-three h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
              <div className="image shadow-inner shadow-gray-400 w-fit p-2">
                <img src="/img/internet.png" alt="" className="h-8" />
              </div>
              <div className="para my-3">
                <h1 className="font-bold">Photo Editing</h1>
                <p className="text-xs text-justify my-2">
                  Lorem ipsum dolor sit amet cons sicing elit. Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
              <div className="buttons my-2">
                <button
                  className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
                  type="submit"
                >
                  Read more{" "}
                </button>
              </div>
            </div>

            <div className="box-four h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
              <div className="image shadow-inner shadow-gray-400 w-fit p-2">
                <img src="/img/internet.png" alt="" className="h-8" />
              </div>
              <div className="para my-3">
                <h1 className="font-bold">App Development</h1>
                <p className="text-xs text-justify my-2">
                  Lorem ipsum dolor sit amet cons sicing elit. Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
              <div className="buttons my-2 flex">
                <button
                  className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
                  type="submit"
                >
                  Read more{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
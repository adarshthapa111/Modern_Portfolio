// import React from "react";

// const Skills = () => {
//   return (
//     <div>
//       <section className="section-3 max-w-6xl mx-auto p-4 lg:flex lg:justify-between py-10">
//         <div className="section-3-head">
//           <div className="head">
//             <h1 className="font-semibold text-red-500 text-center">
//               What I do is What i learn
//             </h1>
//           </div>
//           <div className="section-3-para">
//             <p className="text-3xl font-semibold text-center lg:text-6xl font-playfair tracking-wide">
//               Collabrative Effort brings out the best inside Me
//               <span className="text-red-500"> ✔︎</span>
//             </p>
//           </div>
//           <div className="box-items flex overflow-x-scroll overflow-y-hidden py-4 px-8 space-x-10 no-scrollbar justify-between">
//             <div className="box-one h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
//               <div className="image shadow-inner shadow-gray-400 w-fit p-2">
//                 <img src="/img/internet.png" alt="" className="h-8" />
//               </div>
//               <div className="para my-3">
//                 <h1 className="font-bold">UI/UX Design</h1>
//                 <p className="text-xs text-justify my-2">
//                 The seamless integration of UI and UX is vital in today's digital landscape. UI, the visual bridge between human and machine, plays a crucial role in crafting intuitive pathways that enable users to navigate and interact with products effortlessly.
//                 </p>
//               </div>
//               <div className="buttons my-2">
//                 <button
//                   className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
//                   type="submit"
//                 >
//                   Read more
//                 </button>
//               </div>
//             </div>

//             <div className="box-two h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
//               <div className="image shadow-inner shadow-gray-400 w-fit p-2">
//                 <img src="/img/internet.png" alt="" className="h-8" />
//               </div>
//               <div className="para my-3">
//                 <h1 className="font-bold">Front-End Dev</h1>
//                 <p className="text-xs text-justify my-2">
//                   Lorem ipsum dolor sit amet cons sicing elit. Lorem ipsum dolor
//                   sit amet consectetur.
//                 </p>
//               </div>
//               <div className="buttons my-2">
//                 <button
//                   className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
//                   type="submit"
//                 >
//                   Read more{" "}
//                 </button>
//               </div>
//             </div>

//             <div className="box-four h-64 w-52 shadow-md rounded-md shadow-gray-400 bg-white p-6 flex-none">
//               <div className="image shadow-inner shadow-gray-400 w-fit p-2">
//                 <img src="/img/internet.png" alt="" className="h-8" />
//               </div>
//               <div className="para my-3">
//                 <h1 className="font-bold">App Development</h1>
//                 <p className="text-xs text-justify my-2">
//                   Lorem ipsum dolor sit amet cons sicing elit. Lorem ipsum dolor
//                   sit amet consectetur.
//                 </p>
//               </div>
//               <div className="buttons my-2 flex">
//                 <button
//                   className="px-2 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:shadow-gray-400 font-bold"
//                   type="submit"
//                 >
//                   Read more{" "}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import Image from "next/image"

const Skills = () => {
  return (
    <div className="bg-gray-100 py-10">
      <section className="max-w-6xl mx-auto p-4">
        <div className="text-center mb-10">
          <h1 className="font-semibold text-red-500 text-lg mb-4 font-playfair">
            What I do is What I learn
          </h1>
          <p className="text-3xl lg:text-6xl font-playfair tracking-wide font-semibold">
            Collaborative Effort brings out the best inside Me
            <span className="text-red-500"> ✔︎</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 w-80">
            <div className="image shadow-inner shadow-gray-400 w-fit p-2 mx-auto">
              <Image
                src="/img/internet.png"
                alt=""
                className="h-10 w-10"
                width={40}
                height={40}
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-lg m-4">UI/UX Design</h2>
              <p className="text-sm mb-4">
                The seamless integration of UI and UX is vital in today&apos;s
                digital landscape. UI, the visual bridge between human and
                machine, plays a crucial role in crafting intuitive pathways
                that enable users to navigate and interact with products
                effortlessly.
              </p>
              <button className="px-4 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:bg-gray-100 font-bold transition-all">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80">
            <div className="image shadow-inner shadow-gray-400 w-fit p-2 mx-auto">
              <Image
                src="/img/internet.png"
                alt=""
                className="h-10 w-10"
                width={40}
                height={40}
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-lg m-4">Front-End Dev</h2>
              <p className="text-sm mb-4">
                As a front-end developer, you are the architect of digital
                experiences, shaping the way users interact with applications
                and websites. Your role is pivotal in bridging the gap between
                design and functionality, bringing mockups and wireframes to
                life with code.
              </p>
              <button className="px-4 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:bg-gray-100 font-bold transition-all">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80">
            <div className="image shadow-inner shadow-gray-400 w-fit p-2 mx-auto">
              <Image
                src="/img/internet.png"
                alt="App Development"
                className="h-10 w-10 mx-auto"
                height={40}
                width={40}
                hight={200}
              />
            </div>
            <div className="text-center">
              <h2 className="font-bold text-lg m-4">App Development</h2>
              <p className="text-sm mb-4">
                Leveraging the power of Firebase&apos;s comprehensive suite of
                tools, including its robust Realtime Database and Cloud
                Firestore, enables seamless data synchronization and offline
                persistence for dynamic applications. Alternatively,
                Supabase&apos;s open-source approach offers a PostgreSQL-based
                solution
              </p>
              <button className="px-4 py-2 border-2 border-black bg-white rounded-sm text-sm shadow-md hover:bg-gray-100 font-bold transition-all">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

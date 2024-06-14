import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="font-bold font-playfair text-4xl">
                  Adarsh <span className="text-red-600">✓</span>
                </h1>
              </div>
              <nav className="hidden md:flex space-x-6 pl-10">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Project
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-x-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FR
                </a>
                <span>|</span>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  EN
                </a>
              </div>
              <button className="bg-gray-900 rounded-md p-3 text-white font-medium ">
                Resume
              </button>
            </div>
          </header>
          <main className="flex flex-col items-center justify-center flex-grow min-h-screen">
            <div className="text-center">
              <span className="text-yellow-500">👋</span>
              <p className="text-gray-700">My name is Adarsh Thapa</p>
              <h1 className="text-7xl font-bold leading-none bg-gray-900  text-transparent bg-clip-text text-gray-800 font-playfair tracking-wide z-10">
                Front-End React <br /> || Next{" "}
                <span className="text-red-600">Developer</span>
                <br />
                <p className="text-4xl text-red-500">❖</p>
                {/* <h2 className="text-6xl font-bold">red</h2> */}
              </h1>
              <p className="mt-4 text-gray-700">based in Kathmandu, Nepal.</p>
            </div>
            <div>
              <img
                src="/img/"
                alt="Bazil"
                className="mt-8  rounded-full"
                width={600}
              />
            </div>
            <div className="flex mt-8 space-x-4">
              <button>You need a Front-end Developer</button>
              <button>|| UI/UX designer </button>
            </div>
          </main>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex-shrink-0">
                  <img
                    src="/img/nextJs.jpg"
                    width={40}
                    height={40}
                    alt="Next.js"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Next.js</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The React framework for production.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width={40}
                    height={40}
                    alt="React.js"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">React.js</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A JavaScript library for building user interfaces.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width={40}
                    height={40}
                    alt="Tailwind CSS"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Tailwind CSS</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A utility-first CSS framework for rapid UI development.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width={40}
                    height={40}
                    alt="Supabase"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Supabase</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    An open-source Firebase alternative.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width={40}
                    height={40}
                    alt="Firebase"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Firebase</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A comprehensive app development platform.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex-shrink-0">
                  <SigmaIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">SVG</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Scalable Vector Graphics for high-quality images.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="w-full max-w-6xl mx-auto flex justify-center items-center py-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              audible
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Behance
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Canva
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              loom
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

function SigmaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 7V4H6l6 8-6 8h12v-3" />
    </svg>
  );
}

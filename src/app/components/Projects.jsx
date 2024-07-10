import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex">
          <h1 className="text-xl md:text-4xl xl:text-6xl text-center font-playfair font-bold max-w-6xl mx-auto text-gray-900 ">
            <span className="text-red-500">◆</span> My{" "}
            <span className="text-red-500">Overall</span> Projects{" "}
            <span className="text-red-500">◆</span>
          </h1>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <div className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">My Overall Projects</span>
          </div>
          <Image
            src="/img/khanaaau.png"
            width={700}
            height={500}
            controls
            className="h-full w-full object-contain object-center"
            alt="Khana Aau Project Screenshot"
          />
        </div>
        <div className="bg-white p-6 dark:bg-gray-950 rounded-lg shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-playfair">
              Khana Aau
            </h3>
            <Link
              href="https://khanaaau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:bg-gradient-to-r from-orange-500 to-orange-600  py-2 px-6 font-medium text-gray-800 hover:text-gray-100 rounded-xl"
              prefetch={false}
            >
              View
            </Link>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-justify">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="py-1 px-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-xs font-medium">
                HTML
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full text-xs font-medium">
                CSS
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-xs font-medium">
                JavaScript
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-xs font-medium">
                React
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full text-xs font-medium">
                Firebase
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full text-xs font-medium">
                Node.js
              </span>
            </div>
            <br />
            The homepage greets visitors with a captivating hero section,
            featuring mouthwatering images of your signature dishes and a
            welcoming message that encapsulates the essence of your
            restaurant&apos;s dining experience. Visitors can easily navigate
            through the website&apos;s intuitive menu, which provides detailed
            information about your culinary offerings, including appetizers,
            main courses, desserts, and beverages.
            <br />
            <br />
            One of the standout features of your website is the online ordering
            system. Customers can conveniently browse through your menu, select
            their desired items, and place orders directly from the website. The
            ordering process is streamlined, with a user-friendly interface that
            guides customers through each step, from selecting dishes to
            specifying any dietary preferences or special instructions.
            <br />
            <br />
            <div className="flex text-sm justify-between">
              <div>
                <span className="">Demo User: sandesh@gmail.com</span> <br />
                <span className="">Password: Sandesh@1234</span>
              </div>
              <div className="text-end">
                <span className="">Demo Admin: adarsh@gmail.com</span> <br />
                <span className="">Password: adarsh1234</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link
              href="https://github.com/adarshthapa111/Restaurant_Management_Website/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://khanaaau.vercel.app/"
              className="flex space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="h-4 w-4" />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-500 font-playfair">
              Hamro Furniture
            </h3>
            <Link
              href="https://showmeroom.vercel.app/"
              className="text-sm hover:bg-gradient-to-r from-gray-500 to-slate-500 py-2 px-6 font-medium text-gray-800 hover:text-gray-100 rounded-xl"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 text-justify">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="py-1 px-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-xs font-medium">
                HTML
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full text-xs font-medium">
                CSS
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-xs font-medium">
                JavaScript
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full text-xs font-medium">
                Shadcn/ui
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-xs font-medium">
                Next Js
              </span>

              <span className="py-1 px-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full text-xs font-medium">
                Firebase
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-xs font-medium">
                Supabase
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full text-xs font-medium">
                Node.js
              </span>
            </div>
            <br />
            The homepage greets visitors with a captivating hero section,
            featuring mouthwatering images of your signature dishes and a
            welcoming message that encapsulates the essence of your
            restaurant&apos;s dining experience. Visitors can easily navigate
            through the website&apos;s intuitive menu, which provides detailed
            information about your culinary offerings, including appetizers,
            main courses, desserts, and beverages.
            <br />
            <br />
            One of the standout features of your website is the online ordering
            system. Customers can conveniently browse through your menu, select
            their desired items, and place orders directly from the website. The
            ordering process is streamlined, with a user-friendly interface that
            guides customers through each step, from selecting dishes to
            specifying any dietary preferences or special instructions.
            <br />
            <br />
            <div>
              <div className="flex-col">
                <span className="">Demo Account: sandesh@gmail.com</span> <br />
                <span className="">Password: Sandesh@1234</span>
              </div>
            </div>
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 ">
            <Link
              href="https://github.com/adarshthapa111/Room-Rental-System"
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2 border p-1.5 rounded-md bg-slate-100 shadow-md"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://showmeroom.vercel.app/"
              className="flex space-x-2 border border-gray-600 p-1.5 rounded-md bg-slate-50 shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon
                className="h-4 w-4"
                target="_blank"
                rel="noopener noreferrer"
              />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <div className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </div>
          <img
            src="/img/hamrofurniture.png"
            width={700}
            height={500}
            controls
            className="h-full w-full object-contain object-center"
            alt="Book My Room Project Screenshot"
          />
        </div>
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-playfair">
              Book My Room
            </h3>
            <Link
              href="https://showmeroom.vercel.app/"
              className="text-sm hover:bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6 font-medium text-gray-800 hover:text-gray-100 rounded-xl"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 text-justify">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="py-1 px-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-xs font-medium">
                HTML
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full text-xs font-medium">
                CSS
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-xs font-medium">
                JavaScript
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-xs font-medium">
                React
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full text-xs font-medium">
                Firebase
              </span>
              <span className="py-1 px-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full text-xs font-medium">
                Node.js
              </span>
            </div>
            <br />
            The homepage greets visitors with a captivating hero section,
            featuring mouthwatering images of your signature dishes and a
            welcoming message that encapsulates the essence of your
            restaurant&apos;s dining experience. Visitors can easily navigate
            through the website&apos;s intuitive menu, which provides detailed
            information about your culinary offerings, including appetizers,
            main courses, desserts, and beverages.
            <br />
            <br />
            One of the standout features of your website is the online ordering
            system. Customers can conveniently browse through your menu, select
            their desired items, and place orders directly from the website. The
            ordering process is streamlined, with a user-friendly interface that
            guides customers through each step, from selecting dishes to
            specifying any dietary preferences or special instructions.
            <br />
            <br />
            <div>
              <div className="flex-col">
                <span className="">Demo Account: sandesh@gmail.com</span> <br />
                <span className="">Password: Sandesh@1234</span>
              </div>
            </div>
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 ">
            <Link
              href="https://github.com/adarshthapa111/Room-Rental-System"
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2 border p-1.5 rounded-md bg-slate-100 shadow-md"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://showmeroom.vercel.app/"
              className="flex space-x-2 border border-gray-600 p-1.5 rounded-md bg-slate-50 shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon
                className="h-4 w-4"
                target="_blank"
                rel="noopener noreferrer"
              />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <div className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </div>
          <img
            src="/img/bookmyroom.png"
            width={700}
            height={500}
            controls
            className="h-full w-full object-contain object-center"
            alt="Book My Room Project Screenshot"
          />
        </div>
      </div>
    </section>
  );
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

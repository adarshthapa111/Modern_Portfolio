import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <>
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
              One of the standout features of your website is the online
              ordering system. Customers can conveniently browse through your
              menu, select their desired items, and place orders directly from
              the website. The ordering process is streamlined, with a
              user-friendly interface that guides customers through each step,
              from selecting dishes to specifying any dietary preferences or
              special instructions.
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
        {/* Hamro Furniture  */}
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-500 font-playfair">
                Hamro Furniture
              </h3>
              <Link
                href="https://hamrofurniture.vercel.app/"
                className="text-sm bg-gradient-to-r from-gray-500 to-slate-500 py-2 px-6 font-medium text-gray-100 rounded-xl"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid gap-4">
                <div>
                  <p className="text-muted-foreground text-justify">
                    This project involved the design and development of a custom
                    web application for a leading e-commerce company. The
                    application features a modern and responsive user interface,
                    advanced product management tools, and seamless integration
                    with the company's existing systems.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl my-2 tracking-wider font-semibold font-playfair">
                    Project Details
                  </h2>
                  <ul className="grid gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      <span>Duration: 1.5 months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <UsersIcon className="w-5 h-5" />
                      <span>Team: Alone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span>Industry: E-commerce</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CodeIcon className="w-5 h-5" />
                      <span>Technologies: HTML, Tailwind CSS, Next js</span>
                    </li>
                  </ul>
                  <div>
                    <h2 className="text-2xl font-semibold font-playfair">Demo Account</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <UserIcon className="w-5 h-5" />
                      <span>Username: demo_user</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <LockIcon className="w-5 h-5" />
                      <span>Password: demo_password</span>
                    </div>
                  </div>
                  <div className="my-6 space-x-4">
                    <button className="bg-gray-900 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                      Link to Github ☛
                    </button>
                    <button className="bg-gray-900 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center hover:px-6">
                      Live Demo ☛
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View project</span>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 z-10">
                <Image
                  src="/img/furniture.png"
                  alt="Project Image 1"
                  width={600}
                  height={400}
                  className="rounded-lg overflow-hidden border border-gray-200"
                />
              </div>
              <div className="col-span-1 z-20">
                <Image
                  src="/img/furniture2.png"
                  alt="Project Image 2"
                  width={300}
                  height={300}
                  className="rounded-lg overflow-hidden border border-gray-200"
                />
              </div>
              <div className="col-span-1 z-20">
                <Image
                  src="/img/furniture3.png"
                  alt="Project Image 3"
                  width={300}
                  height={400}
                  className="rounded-lg overflow-hidden border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Book My Room  */}
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
              One of the standout features of your website is the online
              ordering system. Customers can conveniently browse through your
              menu, select their desired items, and place orders directly from
              the website. The ordering process is streamlined, with a
              user-friendly interface that guides customers through each step,
              from selecting dishes to specifying any dietary preferences or
              special instructions.
              <br />
              <br />
              <div>
                <div className="flex-col">
                  <span className="">Demo Account: sandesh@gmail.com</span>{" "}
                  <br />
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
      <section>
        <div class="relative overflow-hidden  py-40 ">
          <div class="absolute inset-0 h-full z-0"></div>
          <div class="relative p-10 max-w-6xl mx-auto">
            <h2 class="text-sm text-gray-400 p-2 rounded-full shadow-md my-2 border w-fit border-gray-400">
              Side Project
            </h2>
            <h1 class="text-5xl bg-gradient-to-r from-slate-600 via-gray-400 to-gray-300 bg-clip-text text-transparent font-bold font-playfair tracking-wider">
              Hamro Furniture ⚡︎
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="grid gap-4">
                  <div>
                    <p className="text-muted-foreground text-justify">
                      This project involved the design and development of a
                      custom web application for a leading e-commerce company.
                      The application features a modern and responsive user
                      interface, advanced product management tools, and seamless
                      integration with the company's existing systems.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl my-2 tracking-wider font-semibold font-playfair">
                      Project Details
                    </h2>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>Duration: 1.5 months</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <UsersIcon className="w-5 h-5" />
                        <span>Team: Alone</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BriefcaseIcon className="w-5 h-5" />
                        <span>Industry: E-commerce</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CodeIcon className="w-5 h-5" />
                        <span>Technologies: HTML, Tailwind CSS, Next js</span>
                      </li>
                    </ul>
                    <div className="my-6 space-x-4">
                      <button className="bg-gray-900 p-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                        Link to Github ☛
                      </button>
                      <button className="bg-gray-900 p-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center hover:px-6">
                        Live Demo ☛
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-2 z-10">
                  <Image
                    src="/img/furniture.png"
                    alt="Project Image 1"
                    width={600}
                    height={400}
                    className="rounded-lg overflow-hidden border border-gray-400"
                  />
                </div>
                <div className="col-span-1 z-20">
                  <Image
                    src="/img/furniture2.png"
                    alt="Project Image 2"
                    width={300}
                    height={200}
                    className="rounded-lg overflow-hidden border border-gray-400"
                  />
                </div>
                <div className="col-span-1 z-20">
                  <Image
                    src="/img/furniture3.png"
                    alt="Project Image 3"
                    width={300}
                    height={200}
                    className="rounded-lg overflow-hidden border border-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
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
function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

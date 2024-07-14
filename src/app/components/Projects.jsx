import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex">
            <h1 className="text-xl md:text-4xl xl:text-6xl my-6 text-center font-playfair font-bold max-w-6xl mx-auto text-gray-900 ">
              <span className="text-red-500">◆</span> My{" "}
              <span className="text-red-500">Overall</span> Projects{" "}
              <span className="text-red-500">◆</span>
            </h1>
          </div>
        </div>
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
          <div className="group relative overflow-hidden ">
            <div className="absolute inset-0 z-10 " prefetch={false}>
              <span className="sr-only">My Overall Projects</span>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 z-10">
                <Image
                  src="/img/khanaaau.png"
                  alt="Project Image 1"
                  width={600}
                  height={400}
                  className="rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="col-span-1 z-20">
                <Image
                  src="/img/khanaaau1.png"
                  alt="Project Image 2"
                  width={300}
                  height={300}
                  className="rounded-lg h-52 object-contain overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="col-span-1 z-20">
                <Image
                  src="/img/khanaaau2.png"
                  alt="Project Image 3"
                  width={300}
                  height={400}
                  className="rounded-lg h-52 object-contain overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-justify">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-orange-500 font-playfair">
                    Khana Aau
                  </h3>
                  <Link
                    href="https://khanaaau.vercel.app/"
                    className="text-sm bg-orange-500 py-2 px-6 font-medium text-gray-100 rounded-xl border-2 border-gray-200"
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
                        This project involved the design and development of a
                        custom web application for a restaurant. The application
                        features a modern and responsive user interface,
                        advanced product management tools, and seamless
                        integration with the company&apos;s existing systems. I have
                        integrated full system for online ordering and
                        reservation system. Customer can view the calories in
                        their food. Also there is seprate admin dashboard for
                        food adding, customer tracking and full analytics of
                        table reservation and online ordering.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl my-2 tracking-wider font-semibold font-playfair text-gray-800">
                        Project Details
                      </h2>
                      <ul className="grid gap-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5" />
                          <span>Duration: 3 months</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <UsersIcon className="w-5 h-5" />
                          <span>Team: Alone</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BriefcaseIcon className="w-5 h-5" />
                          <span>Industry: Hospitality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CodeIcon className="w-5 h-5" />
                          <span>
                            Technologies: HTML, Tailwind CSS, React Js,
                            Firebase, Node Js{" "}
                          </span>
                        </li>
                      </ul>
                      <div>
                        <h2 className="text-2xl font-semibold font-playfair text-gray-800 my-2">
                          Demo Account
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <UserIcon className="w-5 h-5" />
                          <span>Username: sandesh@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <LockIcon className="w-5 h-5" />
                          <span>Password: Sandesh@1234</span>
                        </div>
                      </div>
                      <div className="my-6 space-x-4">
                        <Link
                          href="https://github.com/adarshthapa111/Restaurant_Management_Website"
                          prefetch={false}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-orange-500 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                            Link to Github ☛
                          </button>
                        </Link>
                        <Link
                          href="https://khanaaau.vercel.app/"
                          prefetch={false}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-orange-500 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                            Live Demo ☛
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hamro Furniture  */}
        <div className="py-20">
          <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-slate-500 font-playfair">
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
                      This project involved the design and development of a
                      custom web application for a leading e-commerce company.
                      The application features a modern and responsive user
                      interface, advanced product management tools, and seamless
                      integration with the company&apos;s existing systems.
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
                        <span>
                          Technologies: HTML, Tailwind CSS, Next Js, Supabase,
                          Firebase{" "}
                        </span>
                      </li>
                    </ul>
                    <div>
                      <h2 className="text-2xl font-semibold font-playfair">
                        Demo Account
                      </h2>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <UserIcon className="w-5 h-5" />
                        <span>Username: san@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <LockIcon className="w-5 h-5" />
                        <span>Password: san1234</span>
                      </div>
                    </div>
                    <div className="my-6 space-x-4">
                      <Link
                        href="https://github.com/adarshthapa111/Furniture-Website"
                        prefetch={false}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button className="bg-gray-900 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                          Link to Github ☛
                        </button>
                      </Link>

                      <Link
                        href="https://hamrofurniture.vercel.app/"
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-gray-900 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                          Live Demo ☛
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
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
                    className="rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="col-span-1 z-20">
                  <Image
                    src="/img/furniture2.png"
                    alt="Project Image 2"
                    width={300}
                    height={300}
                    className="rounded-lg h-52 object-contain overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="col-span-1 z-20">
                  <Image
                    src="/img/furniture3.png"
                    alt="Project Image 3"
                    width={300}
                    height={400}
                    className="rounded-lg h-52 object-contain overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book My Room  */}
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 min-h-screen">
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View project</span>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 z-10">
                <Image
                  src="/img/bookmyroom.png"
                  alt="Project Image 1"
                  width={600}
                  height={400}
                  className="rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="col-span-1 z-20">
                <Image
                  src="/img/bookmyroom2.png"
                  alt="Project Image 2"
                  width={300}
                  height={300}
                  className="rounded-lg h-52 object-contain overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="col-span-1 z-20">
                <Image
                  src="/img/bookmyroom1.png"
                  alt="Project Image 3"
                  width={300}
                  height={400}
                  className="rounded-lg h-52 object-contain overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-justify">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500  bg-clip-text text-transparent font-playfair">
                  Book My Room
                </h3>
                <Link
                  href="https://showmeroom.vercel.app/"
                  className="text-sm shadow-gray-400 bg-gradient-to-r from-purple-500 to-blue-500  py-2 px-6 font-medium text-gray-100 rounded-xl border-2 border-gray-200"
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
                      This project involved the design and development of a
                      custom web application for hotel room booking. The
                      application features a modern and responsive user
                      interface, room booking avaibilites for login user, and
                      seamless integration with the company&apos;s existing systems.
                      Also, user can add and update their room.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl my-2 tracking-wider font-semibold font-playfair text-gray-800">
                      Project Details
                    </h2>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>Duration: 2 months</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <UsersIcon className="w-5 h-5" />
                        <span>Team: Alone</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BriefcaseIcon className="w-5 h-5" />
                        <span>Industry: Tours and Travel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CodeIcon className="w-5 h-5" />
                        <span>
                          Technologies: HTML, Tailwind CSS, Next Js, Supabase,
                          Firebase{" "}
                        </span>
                      </li>
                    </ul>
                    <div>
                      <h2 className="text-2xl font-semibold font-playfair text-gray-800 my-2">
                        Demo Account
                      </h2>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <UserIcon className="w-5 h-5" />
                        <span>Username: sandesh@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <LockIcon className="w-5 h-5" />
                        <span>Password: Sandesh@1234</span>
                      </div>
                    </div>
                    <div className="my-6 space-x-4">
                      <Link
                        href="https://github.com/adarshthapa111/Hotel_Room_Rental_System"
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></Link>
                      <button className="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                        Link to Github ☛
                      </button>

                      <Link
                        href="https://showmeroom.vercel.app/"
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-gradient-to-r from-purple-500 to-blue-500  py-2 px-4 text-white font-playfair tracking-wider rounded-sm shadow-md shadow-gray-400 border-gray-100 border-2 text-center">
                          Live Demo ☛
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ExternalLinkIcon(props) {
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
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
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

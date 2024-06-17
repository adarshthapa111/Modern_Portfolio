import Link from "next/link";
import Image from "next/image"

export default function HorizentalScrolling() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-4xl p-6 font-semibold font-playfair">
          <span className="text-red-500"> Go-To</span> Tools
        </h1>
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View HTML</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6">
            <Image
              src="/img/html.png"
              alt="HTML Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">HTML</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hypertext Markup Language
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View CSS</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6">
            <Image
              src="/img/css.png"
              alt="CSS Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">CSS</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cascading Style Sheets
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Tailwind CSS</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6 dark:bg-gray-950">
            <Image
              src="/img/tailwind.png"
              alt="Tailwind CSS Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Utility-first CSS framework
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View JavaScript</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6 dark:bg-gray-950">
            <Image
              src="/img/Js.png"
              alt="JavaScript Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">JavaScript</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Programming language
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View React.js</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6 ">
            <Image
              src="/img/react.png"
              alt="React.js Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">React.js</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              JavaScript library for building user interfaces
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Next.js</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6">
            <Image
              src="/img/next.jpeg"
              alt="Next.js Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <h3 className="text-xl font-bold">Next.js</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              React framework for building server-rendered applications
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="https://firebase.google.com" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Firebase</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6">
            <Image
              src="/img/firebase.png"
              alt="Firebase Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">Firebase</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Backend-as-a-Service platform
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Supabase</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 bg-white p-6">
            <Image
              src="/img/supabase.png"
              alt="Supabase Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <h3 className="text-xl font-bold">Supabase</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Open-source Firebase alternative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

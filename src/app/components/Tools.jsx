import Link from "next/link";
import Image from "next/image";

export default function Tools() {
  const tools = [
    {
      name: "HTML",
      description: "Hypertext Markup Language",
      image: "/img/html.png",
      alt: "HTML5 Logo",
    },
    {
      name: "CSS",
      description: "Cascading Style Sheets",
      image: "/img/css.png",
      alt: "CSS3 Logo",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      image: "/img/tailwind.png",
      alt: "Tailwind CSS Logo",
    },
    {
      name: "JavaScript",
      description: "Programming language",
      image: "/img/Js.png",
      alt: "JavaScript Logo",
    },
    {
      name: "React.js",
      description: "JavaScript library for building user interfaces",
      image: "/img/react.png",
      alt: "React.js Logo",
    },
    {
      name: "Next.js",
      description: "React framework for building server-rendered applications",
      image: "/img/next.jpeg",
      alt: "Next.js Logo",
    },
    {
      name: "Firebase",
      description: "Backend-as-a-Service platform",
      image: "/img/firebase.png",
      alt: "Firebase Logo",
      link: "https://firebase.google.com",
    },
    {
      name: "Supabase",
      description: "Open-source Firebase alternative",
      image: "/img/supabase.png",
      alt: "Supabase Logo",
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto"
      aria-labelledby="tools-heading"
    >
      <h2 id="tools-heading" className="text-xl md:text-4xl p-6 font-semibold">
        <span className="text-red-500">Go-To</span> Tools
      </h2>
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border"
          >
            <Link
              href={tool.link || "#"}
              className="absolute inset-0 z-10"
              aria-label={`Learn more about ${tool.name}`}
            >
              <span className="sr-only">View {tool.name}</span>
            </Link>
            <div className="flex flex-col items-center justify-center gap-2 bg-white p-6">
              <Image
                src={tool.image}
                alt={tool.alt}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />
              <h3 className="text-xl font-bold">{tool.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

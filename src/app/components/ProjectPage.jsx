import React from "react";
import ProjectShowcase from "./ProjectShowcase";

export default function ProjectPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          <span className="text-red-500">◆</span> My{" "}
          <span className="text-red-500">Overall</span> Projects{" "}
          <span className="text-red-500">◆</span>
        </h1>

        <ProjectShowcase
          title="Khana Aau"
          description="This project involved the design and development of a custom web application for a restaurant. The application features a modern and responsive user interface, advanced product management tools, and seamless integration with the company's existing systems. I have integrated full system for online ordering and reservation system. Customer can view the calories in their food. Also there is seprate admin dashboard for food adding, customer tracking and full analytics of table reservation and online ordering."
          duration="3 months"
          team="Alone"
          industry="Hospitality"
          technologies={[
            "HTML",
            "Tailwind CSS",
            "React Js",
            "Firebase",
            "Node Js",
          ]}
          demoUser={{ username: "sandesh@gmail.com", password: "Sandesh@1234" }}
          demoAdmin={{ username: "adarsh@gmail.com", password: "adarsh1234" }}
          githubLink="https://github.com/adarshthapa111/Restaurant_Management_Website"
          liveLink="https://khanaaau.vercel.app/"
          images={[
            { src: "/img/khanaaau.png", alt: "Khana Aau Main" },
            { src: "/img/khanaaau1.png", alt: "Khana Aau Feature 1" },
            { src: "/img/khanaaau2.png", alt: "Khana Aau Feature 2" },
          ]}
          color="from-orange-500 to-red-500"
        />

        <ProjectShowcase
          title="Hamro Furniture"
          description="This project involved the design and development of a custom web application for a leading e-commerce company. The application features a modern and responsive user interface, advanced product management tools, and seamless integration with the company's existing systems."
          duration="1.5 months"
          team="Alone"
          industry="E-commerce"
          technologies={[
            "HTML",
            "Tailwind CSS",
            "Next Js",
            "Supabase",
            "Firebase",
          ]}
          demoUser={{ username: "san@gmail.com", password: "san1234" }}
          githubLink="https://github.com/adarshthapa111/Furniture-Website"
          liveLink="https://hamrofurniture.vercel.app/"
          images={[
            { src: "/img/furniture.png", alt: "Hamro Furniture Main" },
            { src: "/img/furniture2.png", alt: "Hamro Furniture Feature 1" },
            { src: "/img/furniture3.png", alt: "Hamro Furniture Feature 2" },
          ]}
          color="from-gray-500 to-slate-500"
        />

        {/* Add more ProjectShowcase components for other projects */}
      </div>
    </section>
  );
}

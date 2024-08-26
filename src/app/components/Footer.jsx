import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-700 py-8 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-6xl flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-playfair">Adarsh Thapa</h3>
            <p className="text-sm font-medium">Frontend Developer</p>
            <p className="text-sm mt-2">
              Passionate about building beautiful and functional web
              applications.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/adarsh-thapa-8393552b0/"
              className="hover:text-gray-500 transition-colors"
              prefetch={false}
            >
              {/* <Image className="w-5 h-5" /> */}
              <Image
                src="/img/dark_linkedIn.png"
                width={200}
                height={200}
                className="h-8 w-8 object-contain object-center"
                alt="Linked In"
              />
            </Link>
            <Link
              href="https://github.com/adarshthapa111"
              className="hover:text-gray-500 transition-colors"
              prefetch={false}
            >
              <Image
                src="/img/dark_github.png"
                width={200}
                height={200}
                className="h-8 w-8 object-contain object-center"
                alt="Github"
              />
            </Link>
            <Link
              href="https://www.instagram.com/sawndesh_thapa/"
              className="hover:text-gray-500 transition-colors"
              prefetch={false}
            >
              <Image
                src="/img/dark_instagram.png"
                width={200}
                height={200}
                className="h-8 w-8 object-contain object-center"
                alt="dark_instagram.png"
              />
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/#drafts?compose=GTvVlcSGLrXWhZRsjpCQVfqwzMQPfRfwbxFrVnzbSTMGbCNJZsKdgJvNZPMTGqNsgKHDbZLjvNKsv"
              className="hover:text-gray-500 transition-colors"
              prefetch={false}
            >
              <Image
                src="/img/dark_mail.png"
                width={200}
                height={200}
                className="h-8 w-8 object-contain object-center hover:border"
                alt="Gmail"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

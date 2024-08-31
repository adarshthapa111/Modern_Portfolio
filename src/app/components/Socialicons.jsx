import React from "react";
import Image from "next/image";

const SocialLink = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/adarsh-thapa-8393552b0/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <Image
          src="/img/linkedin.png"
          alt="LinkedIn"
          height={400}
          width={400}
          className="h-8 w-8 rounded-full animate-pulse"
        />
      </a>
      <a
        href="https://github.com/adarshthapa111"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <Image
          src="/img/github.png"
          alt="LinkedIn"
          height={400}
          width={400}
          className="h-8 w-8 rounded-full "
        />
      </a>
      <a
        href="https://www.instagram.com/sawndesh_thapa/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <Image
          src="/img/instagram.png"
          alt="GitHub"
          height={400}
          width={400}
          className="h-8 w-8 rounded-full"
        />
      </a>
    </div>
  );
};

export default SocialLink;

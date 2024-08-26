import React from "react";

const SocialLink = () => {
  return (
    <div className="flex space-x-4">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="/img/linkedin.png"
          alt="LinkedIn"
          className="h-8 w-8 rounded-full animate-pulse"
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="/img/github.png"
          alt="LinkedIn"
          className="h-8 w-8 rounded-full "
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="img/instagram.png"
          alt="GitHub"
          className="h-8 w-8 rounded-full"
        />
      </a>
    </div>
  );
};

export default SocialLink;

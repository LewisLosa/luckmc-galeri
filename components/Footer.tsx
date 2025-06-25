import React from "react";
import { socialMediaLinks } from "@/constants/socials";

const Footer: React.FC = () => {
  return (
    <footer className="sm:p-8 shadow-lg w-full ">
      {/* Başlık */}
      <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Bizi sosyal medyada takip edin!
      </h3>

      {/* Social Kartlar */}
      <div className="flex flex-wrap pb-10 justify-center items-center gap-3 sm:gap-4">
        {socialMediaLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="
              flex items-center justify-center gap-3
              px-4 py-3 
              bg-white dark:bg-neutral-800
              text-neutral-700 dark:text-gray-200
              rounded-xl
              w-full sm:w-auto flex-grow sm:flex-grow-0
              transition-all duration-300 ease-in-out
              transform hover:-translate-y-1 hover:shadow-xl
              hover:bg-green-600 dark:hover:bg-green-500
              hover:text-white
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
            "
          >
            <social.icon className="h-6 w-6" />
            <span className="font-semibold text-sm">{social.name}</span>
          </a>
        ))}
      </div>
      <p className="lg:text-sm font-light text-center text-gray-800 dark:text-white mt-10">
        Bu site <a target="_blank" href="https://github.com/">açık kaynaklıdır</a>, <a target="_blank" href="https://losa.dev">losa.dev</a> tarafından 💚 ile geliştirilmiştir.
      </p>
    </footer>
  );
};

export default Footer;
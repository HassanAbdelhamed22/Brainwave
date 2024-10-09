import React from "react";
import Section from "./ui/Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.id}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-n-7 hover:bg-n-6 transition-colors duration-300"
            >
              <img
                src={social.iconUrl}
                alt={social.title}
                width={24}
                height={24}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;

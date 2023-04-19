import { NextJs } from "@/assets/svgs/NextJs";
import { Tailwind } from "@/assets/svgs/Tailwind";

export const Footer = () => (
  <div className="bottom-0 left-0 w-full text-center border-t border-[#bd93f9] p-1 bg-[#44475a] opacity-60 hover:opacity-100">
    <div className="flex justify-center">
      <div>Made with ❤️ by Jacob Reed using:</div>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noreferrer"
        aria-label="Next JS"
        title="Next JS"
        className="ml-2"
      >
        <NextJs />
      </a>
      <div>&nbsp;+&nbsp;</div>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Tailwind CSS"
        title="Tailwind CSS"
        className="ml-1"
      >
        <Tailwind />
      </a>
    </div>
  </div>
);

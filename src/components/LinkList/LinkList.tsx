import { Link } from "@/types/Link";

interface Props {
  links: Link[];
}

export const LinkList = (props: Props) => {
  const { links } = props;
  const linkList = links.map((link, index) => {
    return (
      <div
        className="flex space-x-2 text-red text-xl mt-2 mb-2 hover:animate-pulse hover:scale-125"
        key={`${index}-${link.label}`}
      >
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
          onClick={() => navigator.clipboard.writeText(link.url)}
        >
          {link.svg}
        </a>
      </div>
    );
  });

  return (
    <div className="drop-shadow-lg bg-[#44475a] rounded-lg items-center p-2">
      <div className="flex space-x-6">{linkList}</div>
    </div>
  );
};

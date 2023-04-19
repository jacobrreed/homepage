import { BuyMeACoffee } from "@/assets/svgs/BuyMeACoffee";
import { Email } from "@/assets/svgs/Email";
import { Github } from "@/assets/svgs/Github";
import { LinkedIn } from "@/assets/svgs/LinkedIn";
import { LinkList } from "@/components/LinkList/LinkList";

export const Header = () => (
  <div className="sticky mb-8 top-0 flex">
    <LinkList
      links={[
        {
          label: "Github",
          url: "https://github.com/jacobrreed",
          svg: <Github />,
        },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/jacobrreed/",
          svg: <LinkedIn />,
        },
        {
          label: "Email",
          url: "mailto:jacob.russell.reed@gmail.com",
          svg: <Email />,
        },
        {
          label: "Buy Me A Coffee",
          url: "https://www.buymeacoffee.com/jacobreed",
          svg: <BuyMeACoffee />,
        },
      ]}
    />
  </div>
);

import { BuyMeACoffee } from "@/assets/svgs/BuyMeACoffee";
import { Email } from "@/assets/svgs/Email";
import { Github } from "@/assets/svgs/Github";
import { LinkedIn } from "@/assets/svgs/LinkedIn";
import { About } from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import { Job } from "@/components/Job/Job";
import { LinkList } from "@/components/LinkList/LinkList";
import { Location } from "@/components/Location/Location";
import { Name } from "@/components/Name/Name";
import { ProfilePic } from "@/components/ProfilePic/ProfilePic";

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center my-5 space-y-4 grid-cols-3">
        <ProfilePic />
        <Name />
        <Job />
        <Location />
        <About />
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
      </main>
      <Footer />
    </>
  );
};

export default Home;

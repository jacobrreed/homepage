import { About } from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Job } from "@/components/Job/Job";
import { Location } from "@/components/Location/Location";
import { Name } from "@/components/Name/Name";
import { ProfilePic } from "@/components/ProfilePic/ProfilePic";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center my-5 space-y-4 grid-cols-3">
        <ProfilePic />
        <Name />
        <Job />
        <Location />
        <About />
      </main>

      <Footer />
    </>
  );
};

export default Home;

import Image from "next/image";
import profilePic from "../../assets/profile.png";

export const ProfilePic = () => (
  <Image
    src={profilePic}
    alt="profile picture"
    priority
    className="rounded-full shadow-md shadow-purple-300 hover:shadow-lg hover:shadow-purple-300 mb-4 justify-center"
  />
);

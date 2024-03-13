import React, { useContext } from "react";
import { FeatureCard } from "./imports";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";

const featureCardData = [
  {
    imgSrc: "/stats.svg",
    heading: "Discover your obsessions",
    description:
      "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.",
    id: 1,
  },
  {
    imgSrc: "/apps.svg",
    heading: "Bring AniList anywhere",
    description:
      "Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.",
    id: 2,
  },
  {
    imgSrc: "/social.svg",
    heading: "Join the conversation",
    description:
      "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.",
    id: 3,
  },
  {
    imgSrc: "/custom.svg",
    heading: "Tweak it to your liking",
    description:
      "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.",
    id: 4,
  },
];
const HomeAbout = () => {
  return (
    <div className="Home-about-wrapper flex items-center flex-wrap flex-col bg-[#101e30]">
      <h1 className="font-bold text-4xl">The next-generation anime platform</h1>
      <br></br>
      <h2 className="text-lg text-[#acd5f2]">
        Track, share, and discover your favorite<br></br>
        <span className="pl-5">anime and manga with AniList.</span>
      </h2>
      <div className="home-inf-card w-7/10 h-[400px] mx-auto">
        <ul className="home-inf-card-list flex flex-wrap">
          {featureCardData.map((feature) => (
            <FeatureCard
              imgSrc={feature.imgSrc}
              heading={feature.heading}
              description={feature.description}
              key={feature.id}
            />
          ))}
        </ul>
      </div>
      <Link href="/register">
        <div>
          <button
            className="home-about-btn bg-[#2e51a2] text-white font-bold py-3 px-4 rounded-full 
          flex h-[50px] w-[150px] items-center justify-center
          hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700
          hover:shadow-xl hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50
          "
          >
            Join Now
            <FaGreaterThan className="ml-2" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default HomeAbout;

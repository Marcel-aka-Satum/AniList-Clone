import Image from "next/image";
import React from "react";

const FeatureCard = ({ imgSrc, heading, description }) => {
  return (
    <div className="feature-card w-1/2 flex p-4">
      <div className="feature-img">
        <Image src={imgSrc} alt="Feature" height={140} width={140} />
      </div>
      <div className="feature-description p-3">
        <h1 className="font-bold">{heading}</h1>
        <p className="font-light text-[#acd5f2]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

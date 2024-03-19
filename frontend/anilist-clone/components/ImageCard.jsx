import React from "react";
import Image from "next/image";

export default function ImageCard() {
  return (
    <div className="image-card w-[85px] h-[115px] px-4 mr-5 relative">
      <Image src={"/banner2.jpg"} alt="Anime" layout="fill" objectFit="cover" />
    </div>
  );
}

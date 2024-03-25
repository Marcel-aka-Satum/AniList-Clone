import React from "react";
import Image from "next/image";

export default function ImageCard({ imgsrc }) {
  return (
    <div className="image-card w-[230px] h-[326px]">
      <img
        src={imgsrc}
        alt="Anime"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

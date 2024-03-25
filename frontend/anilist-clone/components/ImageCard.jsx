import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ imgsrc }) {
  return (
    <Link href="/anime/[id]" as="/anime/1">
      <div className="image-card w-[100px] h-[150px]">
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
    </Link>
  );
}

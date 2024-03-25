import React from "react";
import { ImageCard } from "./imports";

export default function WatchedCard({ imgsrc }) {
  return (
    <div className="grid grid-cols-3 border border-blue-500 rounded">
      <ImageCard imgsrc={imgsrc} />
      <div className="Detail Watched text-sm">
        Watched episode 30-40 of Bleach
      </div>
      <div>1 day ago</div>
    </div>
  );
}

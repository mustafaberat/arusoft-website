import React from "react";
import Image from "next/image";

function ThingsCard({ text, imageSource, path = "" }) {
  // export default function ThingsCard({ text, path = "/" }) {
  return (
    <div className="thingsCard">
      <a href={path}>{text}</a>
      <Image
        src={`${imageSource}`}
        alt={text}
        width={500}
        height={300}
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default ThingsCard;

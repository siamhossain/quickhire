"use client";

import React from "react";
import Image from "next/image";

interface HeadingProps {
  title: string;
  coloredTitle: string;
  buttonText: string;
  onClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  coloredTitle,
  buttonText,
  onClick,
}) => {
  return (
    <div className="flex justify-between items-baseline w-full mb-[40px]">
      {/* Heading */}
      <h2 className="heading-lg leading-[110%]">
        {title} <span className="text-[#26A4FF]">{coloredTitle}</span>
      </h2>

      {/* Button */}
      <button
        onClick={onClick}
        className="flex items-center gap-3 text-base text-primary font-semibold leading-[160%] px-4 py-2 hover:border-b border-primary rounded-none"
      >
        {buttonText}

        <Image
          src="/arrow-right.svg"
          alt="Arrow Right Icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default Heading;

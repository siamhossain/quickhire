import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeadingProps {
  title: string;
  coloredTitle: string;
  buttonText: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  coloredTitle,
  buttonText,
}) => {
  return (
    <div className="flex justify-between items-baseline w-full mb-[40px]">
      {/* Heading */}
      <h2 className="heading-lg leading-[110%]">
        {title} <span className="text-[#26A4FF]">{coloredTitle}</span>
      </h2>

      {/* Button */}
      <Link
        href="/jobs"
        className="flex items-center gap-3 text-base text-primary font-semibold leading-[160%] py-2 cursor-pointer hover:text-black rounded-none transition-colors duration-300"
      >
        {buttonText}

        <Image
          src="/arrow-right.svg"
          alt="Arrow Right Icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default Heading;

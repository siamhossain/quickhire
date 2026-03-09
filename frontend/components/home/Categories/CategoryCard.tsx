"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Job } from "@/types/job";

type CategoryData = {
  name: string;
  jobCount: number;
};

export default function CategoryCards() {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        cache: "no-store",
      });

      const result = await res.json();
      const jobs: Job[] = result.data;

      // Count jobs per category
      const categoryMap: Record<string, number> = {};
      jobs.forEach((job) => {
        categoryMap[job.category] = (categoryMap[job.category] || 0) + 1;
      });

      const categoryData: CategoryData[] = Object.entries(categoryMap).map(
        ([name, jobCount]) => ({ name, jobCount }),
      );

      setCategories(categoryData);
    }

    fetchCategories();
  }, []);

  const handleClick = (categoryName: string) => {
    // Navigate to jobs page filtered by this category
    router.push(`/jobs?category=${encodeURIComponent(categoryName)}`);
  };

  const getIconPath = (categoryName: string) => {
    const map: Record<string, string> = {
      Design: "/design.svg",
      Development: "development.svg",
      Marketing: "/marketing.svg",
    };
    return map[categoryName] || "/default.svg";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => handleClick(cat.name)}
          className="group cursor-pointer border border-[#D6DDEB] rounded-none p-[32px] flex flex-col gap-2 hover:bg-primary hover:border-primary transition duration-400"
        >
          {/* icon */}
          <div className="w-10 h-10 group-hover:bg-white rounded-md">
            <Image
              src={getIconPath(cat.name)}
              alt={`${cat.name} icon`}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <h3 className="heading-md group-hover:text-white transition duration-400">
            {cat.name}
          </h3>

          <p className="text-body text-[18px] group-hover:text-white transition duration-400">
            {`${cat.jobCount} `}
            jobs available
            <Image
              src="/arrow-right.svg"
              alt="Arrow Right Icon"
              width={16}
              height={16}
              className="inline ml-2"
            />
          </p>
        </div>
      ))}
    </div>
  );
}

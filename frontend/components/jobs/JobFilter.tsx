"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

type Job = {
  _id: string;
  category: string;
};

const name = "JobFilter";

export default function JobFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");

  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories dynamically
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        cache: "no-store",
      });

      const result = await res.json();

      const jobs: Job[] = result.data;

      const uniqueCategories = [...new Set(jobs.map((job) => job.category))];

      setCategories(uniqueCategories);
    }

    fetchCategories();
  }, []);

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);
    if (location) params.append("location", location);

    router.push(`/jobs?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setLocation("");
    router.push("/jobs");
  };

  return (
    <div className="bg-white w-[852px] h-[90px] p-[16px] mt-[16px] rounded-none shadow-(--filter-shadow) flex items-center justify-between gap-[16px]">
      <div className="relative">
        <div className="absolute left-0 flex items-center pointer-events-none p-[16px]">
          {/* Search Icon */}
          <Image
            src="/search-icon.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className="pointer-events-none"
          />
        </div>
        {/* Search input*/}
        <input
          type="text"
          placeholder="Job title or keyword"
          className="border-b-1 border-[#D6DDEB] ml-[56px] p-4 pl-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Dynamic Category */}
      {/* <select
        className="w-[200px] border-b-1 border-indigo-500"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select> */}

      <div className="relative">
        <div className="absolute left-0 flex items-center pointer-events-none p-[16px]">
          <Image
            src="/location-icon.svg"
            alt="Location Icon"
            width={24}
            height={24}
            className="pointer-events-none"
          />
        </div>
        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          className="border-b-1 border-[#D6DDEB] ml-[56px] p-4 pl-0"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleFilter}
          className="bg-primary rounded-none text-white px-4 py-2 text-[18px] font-bold leading-[160%]"
        >
          Search my job
        </button>

        {/* <button
          onClick={handleReset}
          className="border px-4 py-2 rounded w-full"
        >
          Reset
        </button> */}
      </div>
    </div>
  );
}

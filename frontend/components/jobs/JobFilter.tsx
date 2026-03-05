"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type Job = {
  _id: string;
  category: string;
};

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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/jobs`,
        { cache: "no-store" }
      );

      const result = await res.json();

      const jobs: Job[] = result.data;

      const uniqueCategories = [
        ...new Set(jobs.map((job) => job.category)),
      ];

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
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid md:grid-cols-4 gap-4">

      {/* Search */}
      <input
        type="text"
        placeholder="Search job title..."
        className="border p-2 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Dynamic Category */}
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="border p-2 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleFilter}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Filter
        </button>

        <button
          onClick={handleReset}
          className="border px-4 py-2 rounded w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
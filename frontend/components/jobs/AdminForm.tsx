"use client";

import { useState } from "react";
import { createJob } from "@/lib/api";

export default function AdminForm({ refreshJobs }: any) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createJob(form);
    alert("Job created successfully");
    refreshJobs();

    setForm({
      title: "",
      company: "",
      location: "",
      category: "",
      description: "",
      featured: false,
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-6">Create New Job</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {Object.keys(form)
          .filter((key) => key !== "featured")
          .map((key) => (
            <div key={key} className="flex flex-col gap-2">
              <label className="text-sm font-medium capitalize text-gray-700">
                {key}
              </label>

              <input
                type="text"
                placeholder={`Enter ${key}`}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                value={(form as any)[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
            </div>
          ))}

        {/* Featured Checkbox */}
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={form.featured}
            className="w-4 h-4 accent-black"
            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
          />
          Mark as Featured Job
        </label>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 font-semibold hover:bg-gray-800 transition cursor-pointer"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}

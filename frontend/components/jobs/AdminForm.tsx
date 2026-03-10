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
    // Reset form fields
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(form)
        .filter((key) => key !== "featured")
        .map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key}
            className="w-full border p-2"
            value={(form as any)[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

      {/* Featured Checkbox */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={form.featured}
          onChange={(e) => setForm({ ...form, featured: e.target.checked })}
        />
        Featured Job
      </label>

      <button className="bg-black text-white px-6 py-2 rounded cursor-pointer">
        Create Job
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { createJob } from "@/lib/api";

export default function AdminForm({refreshJobs}: any) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createJob(form);
    alert("Job created successfully");
    refreshJobs(); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key}
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button className="bg-black text-white px-6 py-2 rounded cursor-pointer">
        Create Job
      </button>
    </form>
  );
}
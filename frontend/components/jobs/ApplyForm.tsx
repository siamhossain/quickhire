"use client";

import { useState } from "react";
import { applyToJob } from "@/lib/api";

export default function ApplyForm({ jobId }: { jobId: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_note: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await applyToJob({ ...form, job_id: jobId });
        alert("Application submitted");
    } catch (error) {
        alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Resume Link"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, resume_link: e.target.value })
        }
      />
      <textarea
        placeholder="Cover Note"
        className="w-full border p-2"
        onChange={(e) =>
          setForm({ ...form, cover_note: e.target.value })
        }
      />

      <button  className="bg-black text-white px-6 py-2 rounded cursor-pointer">
        Apply Now
      </button>

    </form>
  );
}
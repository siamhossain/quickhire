"use client";

import { useEffect, useState } from "react";
import { getJobById, updateJob } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";

export default function EditJobPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
    featured: false,
  });

  useEffect(() => {
    async function loadJob() {
      const job = await getJobById(id as string);
      setForm(job);
    }

    loadJob();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await updateJob(id as string, form);

    alert("Job updated successfully");

    router.push("/admin");
  };

  // const handleChange = (e: any) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 pt-[110px]">
      <h1 className="text-3xl font-bold mb-6">Edit Job</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="border p-2 w-full"
        />

        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className="border p-2 w-full"
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 w-full"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 w-full"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full"
        />

        {/* Featured Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />
          Featured Job
        </label>

        <button className="bg-black text-white px-6 py-2 rounded cursor-pointer">
          Update Job
        </button>
      </form>
    </div>
  );
}

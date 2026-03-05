"use client";

import { useEffect, useState } from "react";
import { getJobs, deleteJob } from "@/lib/api";

type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
};

export default function AdminJobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadJobs() {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this job?");

    if (!confirmDelete) return;

    try {
      await deleteJob(id);

      // remove deleted job from UI
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Manage Jobs</h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500">
                {job.company} • {job.location}
              </p>
            </div>

            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { deleteJob } from "@/lib/api";
import Link from "next/link";
import { Job } from "@/types/job";

type Props = {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
};

export default function AdminJobList({ jobs, setJobs }: Props) {
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this job?");

    if (!confirmDelete) return;

    try {
      await deleteJob(id);

      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  return (
    <div className="mt-14 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Manage Jobs</h2>

      <div className="space-y-5">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >
            {/* Job Info */}
            <div>
              <h3 className="font-semibold text-lg hover:underline">
                <Link href={`/jobs/${job._id}`}>{job.title}</Link>
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.company} • {job.location}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/jobs/${job._id}`}
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 transition"
              >
                View
              </Link>

              <Link
                href={`/admin/edit/${job._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 transition"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(job._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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

      // remove deleted job from UI
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  

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
              <h3 className="font-semibold"><Link href={`/jobs/${job._id}`}>{job.title}</Link></h3>
              <p className="text-sm text-gray-500">
                {job.company} • {job.location}
              </p>
            </div>

            <div className="flex gap-3">
                <Link href={`/jobs/${job._id}`} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
                    View
                </Link> 

                <Link href={`/admin/edit/${job._id}`} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                    Edit
                </Link>

                <button onClick={() => handleDelete(job._id)} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
                    Delete
                </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import Link from "next/link";
import { Job } from "@/types/job";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">
        {job.location} • {job.type}
      </p>

      <Link
        href={`/jobs/${job._id}`}
        className="inline-block mt-4 text-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}
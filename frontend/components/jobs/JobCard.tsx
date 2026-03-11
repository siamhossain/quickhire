import Link from "next/link";
import Image from "next/image";
import { Job } from "@/types/job";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border border-[#D6DDEB] p-[24px] rounded-none shadow">
      <div className="logo mb-2">
        <Image
          src={"images/company-logos/default.svg"}
          alt={job.company}
          width={48}
          height={48}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-2">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      <Link
        href={`/jobs/${job._id}`}
        className="inline-block mt-4 text-primary px-4 py-2 border border-primary rounded hover:bg-primary hover:text-white transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  );
}

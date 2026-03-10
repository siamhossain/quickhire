import { getLatestJobs } from "@/lib/api";

export default async function LatestJobsPage() {
  const jobs = await getLatestJobs();

  return (
    <div className="container mx-auto py-10 pt-[110px]">
      <h1 className="text-3xl font-bold mb-6">Latest Jobs</h1>

      <div className="grid grid-cols-3 gap-6">
        {jobs.map((job: any) => (
          <div key={job._id} className="border p-4 rounded">
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

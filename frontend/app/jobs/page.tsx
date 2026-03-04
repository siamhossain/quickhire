import JobCard from "@/components/jobs/JobCard";
import { getJobs } from "@/lib/api";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">
        Available Jobs
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job: any) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}
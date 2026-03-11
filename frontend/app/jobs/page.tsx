import JobCard from "@/components/jobs/JobCard";
import JobFilter from "@/components/jobs/JobFilter";
import { getJobs } from "@/lib/api";

type SearchParams = {
  search?: string;
  location?: string;
  category?: string;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function JobsPage({ searchParams }: Props) {
  const params = await searchParams;

  const jobs = await getJobs({
    search: params.search,
    location: params.location,
    category: params.category,
  });

  return (
    <div className="job-list">
      <div className="container-main mt-[70px] py-[70px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Available Jobs
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h1>
        {/* <JobFilter /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jobs.map((job: any) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

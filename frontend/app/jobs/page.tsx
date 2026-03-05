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
        <div className="max-w-6xl mx-auto p-10">

            <h1 className="text-3xl font-bold mb-8">
                Available Jobs
            </h1>

            <JobFilter />

            <div className="grid md:grid-cols-3 gap-6">
                {jobs.map((job: any) => (
                <JobCard key={job._id} job={job} />
                ))}
            </div>

            {jobs.length === 0 && (
                <p className="text-center text-gray-500 mt-10">
                No jobs found.
                </p>
            )}

        </div>
    );
}
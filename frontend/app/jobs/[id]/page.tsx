import { getJobById } from "@/lib/api";
import ApplyForm from "@/components/jobs/ApplyForm";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export default async function JobDetails({ params }: Props) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-[120px]">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Job Details
        <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
      </h1>

      {/* Job Info Card */}
      <div className="border border-gray-200 bg-white shadow-sm p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">{job.title}</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold text-black">Company:</span>{" "}
            {job.company}
          </p>

          <p>
            <span className="font-semibold text-black">Location:</span>{" "}
            {job.location}
          </p>

          <p>
            <span className="font-semibold text-black">Category:</span>{" "}
            {job.category}
          </p>

          <p className="leading-relaxed">
            <span className="font-semibold text-black">Description:</span>{" "}
            {job.description}
          </p>
        </div>
      </div>

      {/* Apply Section */}
      <div className="border border-gray-200 bg-white shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Apply for this job
        </h2>

        <ApplyForm jobId={job._id} />
      </div>
    </div>
  );
}

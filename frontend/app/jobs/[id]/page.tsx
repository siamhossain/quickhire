import { getJobById } from "@/lib/api";
import ApplyForm from "@/components/jobs/ApplyForm";
import { notFound } from "next/navigation";

export default async function JobDetails({
  params,
}: {
  params: { id: string };
}) {
  const job = await getJobById(params.id);

//   if (!job) notFound();

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold">
        {job.title}
      </h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="mt-4">{job.description}</p>

      <ApplyForm jobId={job._id} />
    </div>
  );
}
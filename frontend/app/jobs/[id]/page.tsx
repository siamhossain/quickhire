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
    <div className="max-w-4xl mx-auto p-10 pt-[110px]">
      <h1 className="text-4xl font-bold underline pb-6">Job Details</h1>
      {} <h1 className="text-2xl font-bold">Title: {job.title}</h1>
      <p className="text-gray-600 mt-3">
        <span className="font-bold">Company:</span> {job.company}
      </p>
      <p className="mt-4">
        <span className="font-bold">Location:</span> {job.location}
      </p>
      <p className="mt-4">
        <span className="font-bold">Category:</span> {job.category}
      </p>
      <p className="mt-4">
        <span className="font-bold">Description:</span> {job.description}
      </p>
      <h2 className="text-3xl font-bold mt-10 mb-6">Apply for this job</h2>
      <ApplyForm jobId={job._id} />
    </div>
  );
}

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
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold">{job.title}</h1>

      <p className="text-gray-600">{job.company}</p>

      <p className="mt-4">{job.description}</p>

      <ApplyForm jobId={job._id} />
    </div>
  );
}
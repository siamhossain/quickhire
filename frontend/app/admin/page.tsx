import AdminForm from "@/components/jobs/AdminForm";

export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">
        Create New Job
      </h1>
      <AdminForm />
    </div>
  );
}
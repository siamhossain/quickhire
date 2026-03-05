import AdminForm from "@/components/jobs/AdminForm";
import AdminJobList from "@/components/jobs/AdminJobList";

export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Panel
      </h1>

      {/* Create Job */}
      <AdminForm />

      {/* Job List & Delete */}
      <AdminJobList />

    </div>
  );
}
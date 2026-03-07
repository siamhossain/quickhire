"use client";

import { useEffect, useState } from "react";
import AdminForm from "@/components/jobs/AdminForm";
import AdminJobList from "@/components/jobs/AdminJobList";
import { getJobs } from "@/lib/api";
import { Job } from "@/types/job";

export default function AdminPage() {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadJobs() {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error("Failed to load jobs");
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    loadJobs();
  }, []);


  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        <p>Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Panel
      </h1>

      {/* Create Job */}
      <AdminForm refreshJobs={loadJobs} />

      {/* Job List & Delete */}
      <AdminJobList jobs={jobs} setJobs={setJobs}  />

    </div>
  );
}
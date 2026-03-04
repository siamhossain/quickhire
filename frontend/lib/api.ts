const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getJobs() {
  const res = await fetch(`${API_URL}/jobs`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
}

export async function getJobById(id: string) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch job");
  return res.json();
}

export async function createJob(data: any) {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create job");
  return res.json();
}

export async function applyToJob(data: any) {
  const res = await fetch(`${API_URL}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to apply");
  return res.json();
}
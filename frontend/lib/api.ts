const API_URL = process.env.NEXT_PUBLIC_API_URL;

type JobFilter = {
  search?: string;
  location?: string;
  category?: string;
};

export async function getJobs(filters: JobFilter = {}) {

    const params = new URLSearchParams();

    if (filters?.search) params.append("search", filters.search);
    if (filters?.location) params.append("location", filters.location);
    if (filters?.category) params.append("category", filters.category);  

    const res = await fetch(
        // `${API_URL}/jobs${params.toString() ? `?${params.toString()}` : ""}`,
        `${API_URL}/jobs?${params.toString()}`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");

    const result = await res.json();

    return result.data;
}

export async function getJobById(id: string) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch job");

  const result = await res.json();

  return result.data;
}

export async function createJob(data: any) {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create job");

  const result = await res.json();

  return result.data;
}

export async function applyToJob(data: any) {
  const res = await fetch(`${API_URL}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to apply");
  
  const result = await res.json();

  return result.data;
}
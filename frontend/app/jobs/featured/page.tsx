import FeaturedJobCard from "@/components/home/Featured/FeaturedJobCards";

export default async function FeaturedJobsPage() {
  return (
    <div className="featured-job-section py-10 pt-[110px]">
      <div className="container-main">
        <h1 className="text-3xl font-bold mb-6">Featured Jobs</h1>

        <FeaturedJobCard />
      </div>
    </div>
  );
}
